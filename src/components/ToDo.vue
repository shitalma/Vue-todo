<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul id="todos">
      <li v-for="todo in todos">
        {{ todo.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data () {
    return {
      msg: 'Welcome to Your TODO App',
      todos: [{
        name: 'random data'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  text-align: center;
}
</style>
