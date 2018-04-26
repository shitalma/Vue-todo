<template>
  <div>
    <div class="container" id="todo">

      <section class="panel">

        <input v-model="newTask" @keyup.enter="addTask" placeholder="What's on your mind?" autofocus class="text-input">
        <button @click="clearList">Delete All</button>

      </section>

      <section class="list">

        <ul class="list-item">
          <li v-for="task in tasks" :key="task.text" :class="{done: isChecked(task)}">

            <input type="checkbox" class="checkbox" v-model="task.checked">

            <span>{{ task.text }}</span>

            <button class="delete" @click="removeTask(task)">X</button>

          </li>
        </ul>

      </section>

    </div>
    <section class="footer">
      <p>Total = {{totalTasks}}</p>
      <p v-bind:hidden="allTasksCompleted">Completed = {{completedTasks}}</p>
      <p class="complete" v-show="allTasksCompleted">No Pending Tasks. You are awesome!</p>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newTask: '',
      tasks: []
    }
  },

  computed: {
    allTasksCompleted: function () {
      return this.tasks.every((task) => task.checked) && this.tasks.length > 0
    },
    totalTasks: function () {
      return this.tasks.length
    },
    completedTasks: function () {
      return this.tasks.filter((task) => task.checked).length
    }
  },

  methods: {
    addTask: function () {
      const task = this.newTask.trim()
      if (task) {
        this.tasks.push({text: task, checked: false})
        this.newTask = ''
      }
    },

    removeTask: function (task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    },

    clearList: function () {
      this.tasks = []
    },

    check: (task) => {
      task.checked = true
    },

    isChecked: (task) => task.checked
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul, li {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    line-height: 1;
    font-family: "Lato", sans-serif;
  }

  .container {
    width: 70%;
    margin: 1em auto 3em;
    border: 1px solid #efefef;
  }

  .panel, li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 10px;
    border-bottom: 1px solid #efefef;
    background-color: #E7E8EB;
  }

  .footer {
    width: 70%;
    margin: 1em auto 3em;
    border: 0;
  }

  .footer p {
    color: grey;
  }

  .footer .complete {
    color: #42b983;
  }

  .text-input {
    border: 1px solid #dedede;
    padding-left: 10px;
    width: 70%;
    height: 35px;
    color: #555;
  }

  button {
    color: #555;
    background-color: #FFFFFF;
    border: 1px solid #bbb;
    outline: 0;
    width: 100px;
    height: 38px;
    cursor: pointer;
    font-size: 14px;
  }

  .list li button {
    background-color: transparent;
    border: 0;
    color: #ddd;
    visibility: hidden;
    font-size: 20px;
    font-weight: bold;
  }

  .list li:hover > button {
    visibility: visible;
  }

  .list span {
    padding: 0 5px 0 0;
    display: inline-block;
    width: 70%;
    font-size: 18px;
    line-height: 24px;
    color: #42b983;
  }

  .list li.done span {
    color: #29384B;
    text-decoration: line-through;
  }
</style>
