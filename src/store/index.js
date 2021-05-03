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
  card: {
    image: '',
    name: '',
    buffs: '',
    attack: '',
    health: ''
  }
}

//to handle state
const getters = {
  getUser: state => {
    return state.user;
  },
  getBodyCard: state => {
    return state.card;
  },
}

//to handle actions
const actions = {
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
      console.log(res.data)
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
