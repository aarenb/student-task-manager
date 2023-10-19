import { Date, Time } from 'time-date-manager'

const template = document.createElement('template')
template.innerHTML = `
<style>
  #main {
    background: lavender;
  }
</style>
<div id="main">
  <h2> Create a new task </h2>
  <form>
    <label> Task name: </label>
    <input type="text" name="name" required><br/>
    <label> Task description: </label>
    <input type="text" name="description" required><br/>
    <label> Due by: </label>
    <input type="date" name="date" required>
    <label> hour: </label>
    <input type="number" name="hour" min="0" max="23" required>
    <label> minute: </label>
    <input type="number" name="minute" min="0" max="59" required><br/>
    <input type="submit" value="Create">
  </form>
</div>
`

customElements.define('new-task-form',
  /**
   * Represents a task-application element.
   */
  class extends HTMLElement {
    #form
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')
      const newTask = new CustomEvent('newTask')

      this.#form.addEventListener('submit', (event) => {
        this.saveTaskInfo()
        this.dispatchEvent(newTask)
        event.preventDefault()
      })
    }

    /**
     * Saves the task info to local storage.
     */
    saveTaskInfo () {
      const formData = new FormData(this.#form)
      const data = Object.fromEntries(formData)

      // const year = `${data.date.charAt(0)}${data.date.charAt(1)}${data.date.charAt(2)}${data.date.charAt(3)}`
      // const month = `${data.date.charAt(5)}${data.date.charAt(6)}`
      // const day = `${data.date.charAt(8)}${data.date.charAt(9)}`
      // const taskDate = new Date(Number(year), Number(month), Number(day))

      // const taskTime = new Time(Number(data.hour), Number(data.minute))

      const taskObject = {
        name: data.name,
        description: data.description,
        date: 'test',
        time: 'taskTime',
        isChecked: false
      }
      console.log('oooo')

      // for (let i = 1; i++;) {
      //   if (window.localStorage.getItem(i.toString()) !== null) {
      //     window.localStorage.setItem(i.toString(), JSON.stringify(taskObject))
      //     break
      //   }
      // }

      window.localStorage.setItem('task', JSON.stringify(taskObject))
      console.log('aaaaa')
    }
  }
)
