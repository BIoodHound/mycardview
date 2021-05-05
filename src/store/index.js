import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:8180/';
//to handle state
const state = {
  user: {
    username: '',
    name: '',
    lastName: '',
    email: '',
    password: ''
  },
  idUser: null,
  card: {
    image: '',
    name: '',
    buffs: {
      id: '',
      name: '',
      description: '',
      hp_buff: '',
      attack_buff: '',
      windfury: '',
      divineShield: '',
      card: []
    },
    attack: '',
    health: ''
  },
  buf: {
    imagen: '',
    nombre: '',
    info: '',
    buffo: '',
    vida: ''
  },
  bufList: {
    name: '',
    id: ''
  }
}

//to handle state
const getters = {
  getIdUser: state => {
    return state.idUser;
   },
  getBodyCard: state => {
    return state.card;
  },
  getBodyBuf: state => {
    return state.buf;
  },
  getBodyBufList: state => {
    return state.bufList;
  },
  getUser: state => {
    return state.user;
  },
  getBuffAdd: state => {
    return state.card.buffs;
  }
}

//to handle actions
const actions = {
  getUserRegister({ commit }) {
    axios.post(url + 'api/register', commit).then(response => {
      commit('SET_USER', response.data)
    })
  },
  getUserLogin({ commit }, req) {
    axios.post(url + 'api/login', req).then(response => {
      //console.log(response.data);
      commit('SET_USER', response.data)
    })
  },
  getCard({ commit }) {
    axios.get(url + 'api/card/1').then(res => {
      commit('GET_CARD', res.data)
    })
  },
  getUserDetails({ commit }) {
    axios.get(url + 'api/user/1').then(res => {
      commit('GET_USER', res.data)
    })
  },
  getBuf({ commit }) {
    axios.get(url + 'api/buf/1').then(res => {
      commit('GET_BUFO', res.data)
    })
  },
  getBufList({ commit }) {
    axios.get(url + 'api/buff').then(res => {
      commit('GET_BUFLIST', res.data)
    })
  },
  getEditUser({ commit }) {
    axios.get(url + 'api/editAccount', commit).then(response => {
      commit('SET_USER', response.data)
    })
  },
  getAddBuff({ commit }, req) {
    axios.post(url + 'api/card/addbuff', req).then(response => {
      commit('SET_ADD_BUFF', response.data)
    })
  }
}

//to handle mutations
const mutations = {
  SET_USER(state, idUser) {
    state.idUser  = idUser;
  },
  GET_CARD(state, response) {
    state.card = response;
  },
  GET_USER(state, response) {
    state.user = response;
  },
  GET_BUF(state, response) {
    state.buf = response;
  },
  GET_BUFLIST(state, response) {
    state.bufList = response;
  },
  SET_ADD_BUFF(state, response) {
    state.card.buffs = response;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})