import '../task-list'
import '../new-task-form'
import '../random-meme'

const template = document.createElement('template')
template.innerHTML = `
<style>
  div {
    background: rgb(54, 255, 168);
    padding: 30px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
<div>
  <new-task-form></new-task-form>
  <random-meme></random-meme>
</div>
<task-list></task-list>
`

customElements.define('task-application',
  /**
   * Represents a task-application element.
   */
  class extends HTMLElement {
    #taskForm
    #taskList
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#taskForm = this.shadowRoot.querySelector('new-task-form')
      this.#taskList = this.shadowRoot.querySelector('task-list')

      this.#taskForm.addEventListener('newTask', (event) => {
        this.#saveTask(event.detail.data)
        this.#taskList.setTasks()
      })

      this.addEventListener('deleteTask', (event) => {
        this.#taskList.setTasks()
      })

      this.addEventListener('editTask', (event) => {
        this.#taskList.setTasks()
      })
    }

    /**
     * Saves a task to the local storage.
     *
     * @param {*} taskData - The data of the task to save.
     */
    #saveTask (taskData) {
      taskData = JSON.parse(taskData)
      const taskObject = this.#createTaskObject(taskData)

      let i = 1
      let notSet = true
      while (notSet) {
        if (localStorage.getItem(`${i}`) === null) {
          localStorage.setItem(`${i}`, JSON.stringify(taskObject))
          if (localStorage.getItem('highestTaskId') < i || localStorage.getItem('highestTaskId') === null) {
            localStorage.setItem('highestTaskId', i)
          }
          notSet = false
        }
        i++
      }
    }

    /**
     * Creates a new task object.
     *
     * @param {*} data - The data to turn into a task object.
     * @returns {object} The created task object.
     */
    #createTaskObject (data) {
      const yearData = `${data.date.charAt(0)}${data.date.charAt(1)}${data.date.charAt(2)}${data.date.charAt(3)}`
      const monthData = `${data.date.charAt(5)}${data.date.charAt(6)}`
      const dayData = `${data.date.charAt(8)}${data.date.charAt(9)}`

      const taskObject = {
        name: data.name,
        description: data.description,
        date: data.date,
        year: yearData,
        month: monthData,
        day: dayData,
        hour: data.hour,
        minute: data.minute,
        isChecked: false
      }
      return taskObject
    }
  }
)
