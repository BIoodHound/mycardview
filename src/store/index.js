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
    buffs: '',
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
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
