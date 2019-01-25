import Vue from 'vue'
import Vuex from 'vuex'
import db from './config.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    rooms: [],
    roomId: '',
    arrowList: [],
    username: ''
  },
  mutations: {
    createRoomMt (state, payload) {
      console.log(payload)
      state.roomId = payload
    },
    getRoomMt (state, payload) {
      // console.log(payload)
      state.rooms = payload
    },
    mutateArrows (state, listArrow) {
      state.arrowList = listArrow
    },
    setUname (state, name) {
      state.username = name
    },
    mutateLogOut (state) {
      state.username = null
    }
  },
  actions: {
    register ({ commit }, name) {
      localStorage.setItem('username', name)
      commit('setUname', name)
    },
    getArrows ({commit}) {
      db.collection('arrows')
      .onSnapshot((querySnapshot) => {
          var listArrow = [];
          querySnapshot.forEach((doc) => {
              listArrow.push(doc.data().key)
          });
          // console.log("Current cities in CA: ", listArrow)
          commit('mutateArrows', listArrow)
      });
    },
    createRoomAct ({ commit }, room) {
      let res = {
        title: room.title,
        player1: room.player1,
        player2: room.player2,
        statusRoom: room.statusRoom,
        point1: room.point1,
        point2: room.point2,
        ready1: room.ready1,
        ready2: room.ready2
      }
      db
      .collection("rooms").add(res)
      .then(function(docRef) {
        commit('createRoomMt', docRef.id)
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    },
    getRoomAct ({ commit }) {
      db
        .collection("rooms")
        .onSnapshot(function(querySnapshot) {
          var rooms = [];

          querySnapshot.forEach(function(doc) {
              rooms.push({id: doc.id, ...doc.data()});
          });
          commit('getRoomMt', rooms)
      });
    },
    joinRoomAct ({ commit }, roomId) {
      db
        .collection('rooms')
        .doc(roomId)
        .onSnapshot(function (data) {
          var roomData = data.data()
          if (roomData.player2) {
            console.log('sudah ada player', roomData.player2)
          }
          if (!roomData.player2) {
            console.log('belum ada player', roomData.player2)
           db
           .collection('rooms')
           .doc(roomId)
           .update({
             player2: localStorage.getItem('username'),
             statusRoom: true
           })
           if(roomData.statusRoom) {
             alert('roomFull')
           }
          }
        })
    },
    logout ({commit}) {
      localStorage.removeItem('username')
      commit('mutateLogOut')
    }
  }
})
