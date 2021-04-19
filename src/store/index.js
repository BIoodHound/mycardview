import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:8080/';
//to handle state
const state = {
  user: {
    username:'',
    name:'',
    lastName:'',
    email:'',
    password:''
  },
  card: {
    imagen: '',
    nombre: '',
    info: '',
    buffo: '',
    vida: '',
  }
}

//to handle state
const getters = {
  getUser: state => {
    return state.user;
  },
  getName: state => {
    return state.user.name;
  },
  getUsername: state => {
    return state.user.username;
  },
  getLastname: state => {
    return state.user.lastName;
  },
  getEmail: state => {
    return state.user.email;
  },
  getBodyCard: state => {
    return state.card;
  },
  getCardName: state => {
    return state.card.nombre;
  },
  getInfo: state => {
    return state.card.info;
  },
  getImg: state => {
    return state.card.imagen;
  },
  getVida: state => {
    return state.card.vida;
  },
  getBuffo: state => {
    return state.card.buffo;
  },
}

//to handle actions
const actions = {
  //GET PARA PROBAR EL REGISTER, LUEGO CAMBIADLO POR EL getUserRegister
  getTest({ commit }) {
    const usuario = {
      username:'AlexisAK',
      name:'Alexis',
      lastName:'Álvarez',
      email:'alexis@gmail.com',
      password:'testing'
    }
      commit('SET_USER', usuario)
  },
  getUserRegister({ commit }) {
    axios.post(url + 'api/register', commit).then(response => {
      commit('SET_USER', response.data)
    })
  },
  getUserLogin({ commit }) {
    axios.post(url + 'api/login', commit).then(response => {
      commit('SET_USER', response.data)
    })
  },
  getCard({ commit }) {
    axios.get(url + 'api/card/1').then(res => {
      commit('GET_CARD', res.data)
    })
  }

}

//to handle mutations
const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  GET_CARD(state, response) {
    state.card = response;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
