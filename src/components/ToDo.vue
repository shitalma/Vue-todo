<template>
  <div>
    <div class="container" id="todo">

      <section class="panel">

        <input v-model="newTask" @keyup.enter="addTask" placeholder="What do you need to do?" autofocus class="text-input">
        <button @click="clearList">Clear List</button>

      </section>

      <section class="list">

        <ul class="list-item">
          <li v-for="task in tasks" :key="task.text" :class="{done: isChecked(task)}">

            <input type="checkbox" class="checkbox" @click="check" v-model="task.checked">

            <input type="text" v-if="task === editingTask" v-auto-focus class="text-input" @keyup.enter="endEditing(task)" @blur="endEditing(task)" v-model="task.text">

            <label v-if="task !== editingTask" @dblclick="editTask(task)">{{ task.text }}</label>

            <button class="delete" @click="removeTask(task)">X</button>

          </li>
        </ul>

      </section>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTask: '',
      tasks: [],
      editingTask: {}
    }
  },

  computed: {
    areAllSelected: function () {
      return this.tasks.every((task) => task.checked) && this.tasks.length > 0
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

    editTask: function (task) {
      this.editingTask = task
    },

    endEditing: function (task) {
      this.editingTask = {}
      if (task.text.trim() === '') {
        this.removeTask(task)
      }
    },

    clearList: function () {
      this.tasks = []
    },

    selectAll: function (t) {
      const targetValue = !this.areAllSelected
      for (let i = 0; i < this.tasks.length; i++) {
        this.tasks[i].checked = targetValue
      }
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
  /* Relevant resets */

  ul, li {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Global Styles */

  body {
    line-height: 1;
    font-family: "Lato", sans-serif;
    background-color: #EFF1F2;
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

  /* Task  area */

  .list li {
    background-color: #3465A4;
  }

  .list li button {
    background-color: transparent;
    border: 1px solid #3465A4;
    color: #ddd;
    visibility: hidden;
    font-size: 20px;
    font-weight: bold;
  }

  .list li:hover > button {
    visibility: visible;
  }

  .list label {
    padding-right: 10px;
    display: inline-block;
    width: 70%;
    font-size: 18px;
    line-height: 24px;
    color: #fcfcfc;
    z-index: 2;
    overflow: hidden;
  }

  .list li.done label {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  /* Instructions and Credit */

  .hidden {
    display: none;
  }

  /* Media Queries */

  @media screen and (max-width: 768px) {
    .container {
      width: 90%;
      max-width: 90%;
    }

    .text-input, .list label {
      width: 60%;
      font-size: 14px;
    }

    button {
      width: 50px;
      height: 50px;
    }
  }
</style>
