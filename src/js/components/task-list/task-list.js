import '../task-item'

import { Date, Time } from 'time-date-manager'

const template = document.createElement('template')
template.innerHTML = `
<style>
  #main{
    background: rgb(225, 252, 237);
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
  }

  h2 {
    font-size: 38px;
    text-align: center;
    text-decoration: underline;
    margin-top: 0;
    margin-bottom: 10px;
  }
</style>
<div id="main">
  <h2>Your tasks:</h2>
</div>
`

customElements.define('task-list',
  /**
   * Represents a task-list element.
   */
  class extends HTMLElement {
    #main
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#main = this.shadowRoot.querySelector('#main')

      this.setTasks()
    }

    /**
     * Sets the task items.
     */
    setTasks () {
      this.#clearTasks()
      for (let i = 1; i < localStorage.length + 1; i++) {
        let task = localStorage.getItem(`${i}`)
        task = JSON.parse(task)
        if (task.name !== null) {
          const taskDate = new Date(Number(task.year), Number(task.month), Number(task.day))
          const dueDate = taskDate.getFormatedDate('dd/mm/yy')

          const taskTime = new Time(Number(task.hour), Number(task.minute))
          const dueTime = taskTime.getTimeIn24HourClockFormat()

          const newTask = document.createElement('task-item')
          newTask.setName(task.name)
          newTask.setDescription(task.description)
          newTask.setDueDate(dueDate)
          newTask.setDueTime(dueTime)
          newTask.setCheckBox(task.isChecked)
          newTask.setTaskId(`${i}`)
          this.#main.appendChild(newTask)
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
  }
)
