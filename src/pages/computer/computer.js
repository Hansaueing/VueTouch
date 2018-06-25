// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const computer = new Vuex.Store({
  state: {
    count: 0,
    expression: ''
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    inputNum: (state, inputNum) => {
      console.log('num=' + inputNum)
      const obj = state
      obj.expression = obj.expression + inputNum
    },
    inputSymbol: (state, symbol) => {
      console.log('symbol=' + symbol)
      const obj = state
      obj.expression = obj.expression + ' ' + symbol + ' '
    },

    clear: (state) => {
      const obj = state
      obj.expression = ''
    },
    equal: (state) => {
      const obj = state
      let expression = obj.expression
      let singleArray = expression.split(' ')
      console.dir(singleArray)
    }
  }
})

export default computer
