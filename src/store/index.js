import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:8080/';
//to handle state
const state = {
  request: [],
  card: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios.post(url + 'api/register', commit).then(response => {
      commit('SET_POSTS', response.data)
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
  SET_POSTS(state, request) {
    state.request = request;
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
