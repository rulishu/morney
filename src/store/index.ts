import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex) //把 store 绑到 Vue.prototype

const store = new Vuex.Store({
  state: { //data
    recordList:[] as RecordItem[]
  },
  mutations: { //同步methods
    fetchRecords(state){
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state,record){
      const record2: RecordItem= clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecord')
    },
    saveRecord(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))
    },
  },

  // actions: {
  // },
  // modules: {
  // }
})

// console.log(store.state.count)  //0
// store.commit('increment',10)  //+10

export default store;