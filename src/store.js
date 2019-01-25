import Vue from 'vue'
import Vuex from 'vuex'
import db from './config.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    rooms: [],
    roomId: '',
    arrowList: [],
    username: '',
    player1: '', 
    player2: '',
    point1: 0,
    point2: 0,
    statusRoom: 'sadas'
  },
  mutations: {
    createRoomMt (state, payload) {
      console.log("payload di create room", payload)
      state.roomId = payload.id
      state.statusRoom = payload.statusRoom
      state.player1 = payload.player1
      console.log(state.player1)
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
    },
    mutateGetPoint(state, data){
    },
    ready(state, payload){
      console.log("payload di ready", payload)
      state.statusRoom = payload.status
      // state.player2 = payload.player2
      // console.log(state.player2)
    },
    mutateAddUser(state, datum){
      state.player1 = datum.player1
      state.player2 = datum.player2
      state.point1 = datum.point1
      state.point2 = datum.point2
    }
  },
  actions: {

    pluspoint({commit}, roomId){
      let self = this.state
      if(localStorage.getItem('username') === self.player2){
        console.log('selfplayer2', self.player2)
        self.point2 += 5
        db.collection('rooms').doc(roomId)
          .update({
            point2: self.point2
          })
      } else {
        console.log('selfplayer1')
        self.point1 += 5
        db.collection('rooms').doc(roomId)
        .update({
          point1: self.point1
        })
      }
    },
    deleteRoom({commit}, roomId){
      console.log(roomId)
      db.collection('rooms').doc(roomId).delete()
    },
    playgame({commit}, roomId){
      console.log('pluygame di', roomId)
      db.collection('rooms').doc(roomId)
        .onSnapshot(data => {
          let datum = data.data()
          console.log('fsafwefacs', datum)
          // commit('mutateGetPoint', datum)
        })
    },
    register ({ commit }, name) {
      localStorage.setItem('username', name)
      commit('setUname', name)
    },
    getArrows ({commit}) {
      console.log('lets get arrow')
      db.collection('arrows')
      .onSnapshot((querySnapshot) => {
          var listArrow = [];
          querySnapshot.forEach((doc) => {
              listArrow.push(doc.data().key)
          });
          console.log("Current arrow list: ", listArrow)
          commit('mutateArrows', listArrow)
      });
    },
    createRoomAct ({ commit }, room) {
      console.log('di actions')
      console.log(room)
      let res = {
        title: room.title,
        player1: localStorage.getItem('username'),
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
        commit('createRoomMt', {id: docRef.id, statusRoom: res.statusRoom, player1: res.player1})
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
    watchData({commit}, roomId){
      db.collection('rooms').doc(roomId)
        .onSnapshot(data => {
          let datum = data.data()
          commit('mutateAddUser', datum)
        })
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
           .then( ()=>{
             console.log("MADSUK")
             commit('ready', {status: true, player2: roomData.player2})
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
