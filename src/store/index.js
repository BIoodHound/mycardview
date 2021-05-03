import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:8180/';
//to handle state
const state = {
  user: {
    username:'',
    name:'',
    lastName:'',
    email:'',
    password:''
  },
  idUser:{
    
  },
  card: {
    imagen: '',
    nombre: '',
    info: '',
    buffo: '',
    vida: '',
  },

  buf: {
    imagen: '',
    nombre: '',
    info: '',
    buffo: '',
    vida: '',
  },
  bufList: {
    name: '',
    id: '',
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
  }
}

//to handle actions
const actions = {
  getUserRegister({ commit }) {
    axios.post(url + 'api/register', commit).then(response => {
      commit('SET_USER', response.data)
    })
  },
  getUserLogin({ commit }) {
    console.log(commit);
    axios.post(url + 'api/login', commit).then(response => {
      commit('SET_USER', response.data)
    })
  },
  getCard({ commit }) {
    axios.get(url + 'api/card/1').then(res => {
      commit('GET_CARD', res.data)
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
  }

}

//to handle mutations
const mutations = {
  SET_USER(state, idUser) {
    state.idUser = idUser;
  },
  GET_CARD(state, response) {
    state.card = response;
  },
  GET_BUF(state, response) {
    state.buf = response;
  },
  GET_BUFLIST(state, response) {
    state.bufList = response;
    console.log(response)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
