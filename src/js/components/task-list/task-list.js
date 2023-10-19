import '../task-item'

import { Date, Time } from 'time-date-manager'

const template = document.createElement('template')
template.innerHTML = `
<style>
  #main{
    background: yellow;
  }
</style>
<div id="main">
  <p> this is a task list </p>
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

      this.setItems()
    }

    /**
     * Sets the task items.
     */
    setItems () {
      let task = window.localStorage.getItem('task')
      task = JSON.parse(task)

      const newTask = document.createElement('task-item')
      newTask.setName(task.name)
      newTask.setDescription(task.description)
      newTask.setDueDate('sss')
      newTask.setDueTime('ssss')
      newTask.setCheckBox(true)
      this.#main.appendChild(newTask)

      // for (let i = 0; i < window.localStorage.length; i++) {
      //   const key = window.localStorage.key(i)
      //   let task = window.localStorage.getItem(key)
      //   task = JSON.parse(task)

      //   const newTask = document.createElement('task-item')
      //   newTask.setName(task.name)
      //   newTask.setDescription(task.description)
      //   newTask.setDueDate('sss')
      //   newTask.setDueTime('ssss')
      //   newTask.setCheckBox(true)
      //   this.#main.appendChild(newTask)
      // }
    }
  }
)
