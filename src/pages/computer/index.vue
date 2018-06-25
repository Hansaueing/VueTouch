<template>
  <div class="counter-warp">
    <p>Expression：{{ result }}</p>
    <h1 @click="inputNum('0')">0</h1>
    <h1 @click="inputNum('1')">1</h1>
    <h1 @click="inputNum('2')">2</h1>
    <h1 @click="inputNum('3')">3</h1>
    <h1 @click="inputNum('4')">4</h1>
    <h1 @click="inputSymbol('+')">+</h1>
    <h1 @click="clear()">clear</h1>
    <h1 @click="equal()">=</h1>


    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import computer from './computer'

export default {
  computed: {
    result () {
      return computer.state.expression
    }
  },
  methods: {
    increment () {
      computer.commit('increment')
    },
    decrement () {
      computer.commit('decrement')
    },
    inputNum (number) {
      computer.commit('inputNum', number)
    },
    inputSymbol (symbol) {
      computer.commit('inputSymbol', symbol)
    },
    clear () {
      computer.commit('clear')
    },
    equal () {
      computer.commit('equal')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
