import '../task-item'

import { Date, Time } from 'time-date-manager'

const template = document.createElement('template')
template.innerHTML = `
<style>
  #main{
    padding: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 38px;
    text-align: center;
    text-decoration: underline;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  #tasks{
    display: flex;
    flex-wrap: wrap;
  }
</style>
<div id="main">
  <h2>Your tasks:</h2>
  <div id="tasks">
  </div>
</div>
`

customElements.define('task-list',
  /**
   * Represents a task-list element.
   */
  class extends HTMLElement {
    #tasks
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#tasks = this.shadowRoot.querySelector('#tasks')

      this.setTasks()
    }

    /**
     * Sets the task items.
     */
    setTasks () {
      this.#clearTasks()
      for (let i = 1; i <= localStorage.getItem('highestTaskId'); i++) {
        if (localStorage.getItem(`${i}`) !== null) {
          let taskData = localStorage.getItem(`${i}`)
          taskData = JSON.parse(taskData)
          const newTask = this.#createTaskItem(taskData, i)
          this.#tasks.appendChild(newTask)
        }
      }
    }

    /**
     * Removes any task-items inside of the task-list.
     */
    #clearTasks () {
      const tasks = this.shadowRoot.querySelectorAll('task-item')
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].remove()
      }
    }

    /**
     * Creates a new task-item element.
     *
     * @param {*} taskData - The data for the task.
     * @param {number} taskId - The task's id.
     * @returns {Element} The created task-item.
     */
    #createTaskItem (taskData, taskId) {
      const taskDate = new Date(Number(taskData.year), Number(taskData.month), Number(taskData.day))
      const dueDate = taskDate.getFormatedDate('dd/mm/yy')
      const taskTime = new Time(Number(taskData.hour), Number(taskData.minute))
      const dueTime = taskTime.getTimeIn24HourClockFormat()

      const newTask = document.createElement('task-item')
      newTask.setName(taskData.name)
      newTask.setDescription(taskData.description)
      newTask.setDueDate(dueDate)
      newTask.setDueTime(dueTime)
      newTask.setCheckBox(taskData.isChecked)
      newTask.setTaskId(`${taskId}`)

      return newTask
    }
  }
)
