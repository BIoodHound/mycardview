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
    image: '',
    name: '',
    description: '',
    attack_buff: '',
    hp_buff: '',
    windfury: '',
    divineShield: ''
  },
  bufList: {
    name: '',
    id: ''
  },
  enemy: {
    name: '',
    attack: '',
    health: '',
    image: '',
    description: ''
  },
  enemyList: {
    name: '',
    id: ''
  },
  resultCombat:{

  },
  cards: [

  ]
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
  },
  getBodyEnemy: state => {
    return state.enemy;
  },
  getBodyEnemyList: state => {
    return state.enemyList;
  },
  getResultCombat : state => {
    return state.resultCombat;
  },
  getCards : state => {
    return state.cards;
  }
}

//to handle actions
const actions = {
  async getUserRegister({ commit }, req) {
    return await axios.post(url + 'api/register', req).then(response => {
      localStorage.setItem("registerUser", response.data);
      commit('SET_USER', response.data)
    }).catch( error => { console.log(error); });
  },
  async getUserLogin({ commit }, req) {
    return await axios.post(url + 'api/login', req).then(response => {
      localStorage.setItem("userId", response.data);
      commit('SET_USER', response.data)
    })
    .catch( error => { console.log(error); });
  },
  async getCard({ commit }, idUser) {
    return await axios.get(url + 'api/card/' + idUser).then(res => {
      localStorage.setItem('cardDetail', JSON.stringify(res.data));
      commit('GET_CARD', res.data)
    }).catch( error => { console.log(error); });
  },
  async getUserDetails({ commit }, idUser) {
    return await axios.get(url + 'api/user/' + idUser).then(res => {
      localStorage.setItem('userDetail', JSON.stringify(res.data));
      commit('GET_USER', res.data)
    }).catch( error => { console.log(error); });
  },
  async getBuf({ commit }, idBuff) {
    return await axios.get(url + 'api/buff/' + idBuff).then(res => {
      localStorage.setItem('buffoDetail', JSON.stringify(res.data));
      commit('GET_BUF', res.data)
    }).catch( error => { console.log(error); });
  },
  async getBufList({ commit }) {
    return await axios.get(url + 'api/buff').then(res => {
      localStorage.setItem("BuffList", JSON.stringify(res.data));
      commit('GET_BUFLIST', res.data)
    }).catch( error => { console.log(error); });
  },
  async getEditUser({ commit }, req) {
    return await axios.post(url + 'api/editAccount/' + localStorage.getItem("userId"), req).then(response => {
      //localStorage.setItem('userDetail', JSON.stringify(response.data));
      localStorage.setItem('statusEdit', response.status);
      commit('SET_USER', response.data)
    }).catch( error => { console.log(error); });
  },
  async getAddBuff({ commit }, req) {
    console.log(req);
    return await axios.post(url + 'api/card/addbuff', req).then(response => {
      localStorage.setItem('statusAddBuff', response.status);
      commit('SET_ADD_BUFF', response.data)
    }).catch( error => { console.log(error); });
  },
  async getRemoveBuff({ commit }, req) {
    return await axios.post(url + 'api/card/removebuff', req).then(response => {
      localStorage.setItem('statusRemoveBuff', response.status);
      commit('SET_REMOVE_BUFF', response.data)
    }).catch( error => { console.log(error); });
  },
  async getEnemy({ commit }, idEnemy) {
    return await axios.get(url + 'api/enemy/' + idEnemy).then(res => {
      localStorage.setItem('enemyDetail', JSON.stringify(res.data));
      commit('GET_ENEMY', res.data)
    }).catch( error => { console.log(error); });
  },
  async getEnemyList({ commit }) {
    return await axios.get(url + 'api/enemy').then(res => {
      localStorage.setItem('EnemyList', JSON.stringify(res.data));
      commit('GET_ENEMYLIST', res.data)
    }).catch( error => { console.log(error); });
  },
  async getCombatResult({ commit }, req) {
    return await axios.post(url + 'api/combat/', req).then(response => {
      localStorage.setItem('resultCombat', JSON.stringify(response.data));
      commit('GET_RESULT_COMBAT', response.data)
    }).catch( error => { console.log(error); });
  },
  async setMyCard({ commit }, req) {
    return await axios.post(url + 'api/starterCards', req).then(response => {
      localStorage.setItem('myCardDetail', JSON.stringify(response.data));
      commit('SET_MY_CARD', response.data)
    }).catch( error => { console.log(error); });
  },
  async getStartedCards({ commit }) {
    return await axios.get(url + 'api/enemy/').then(res => {
      localStorage.setItem('CardList', JSON.stringify(res.data));
      commit('GET_ALL_CARDS', res.data)
    }).catch( error => { console.log(error); });
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
  },
  SET_REMOVE_BUFF(state, response) {
    state.card.buffs = response;
  },
  GET_ENEMY(state, response) {
    state.enemy = response;
  },
  GET_ENEMYLIST(state, response) {
    state.enemyList = response;
  },
  GET_RESULT_COMBAT(state, response) {
    state.resultCombat = response;
  },
  SET_MY_CARD(state, response) {
    state.card = response;
  },
  GET_ALL_CARDS(state, response) {
    state.cards = response;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})