import { defineStore } from 'pinia';
export const useMainStore = defineStore('main',{
  state:()=>({
    counter:10,
  }),
  getters:{
    doubleCounter:(state)=>state.counter*2,
    doubleCounterPlusOne: ()=>{
      console.log('this',this)
      return 2
    },
    doubleCounterPlusOne2(){
      console.log('this1',this)
      return this.doubleCounter +1
    }
  },
  actions:{
    reset(){
      this.counter = 0
    }
  }
})