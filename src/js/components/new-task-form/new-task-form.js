const template = document.createElement('template')
template.innerHTML = `
<style>
  #main {
    width: 480px;
  }
  h2 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 32px;
  }
  #submitButton {
    width: 90px;
    height: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 0;
  }
  input {
    margin-bottom: 10px;
  }
  form {
    font-size: 18px;
  }
</style>
<div id="main">
  <h2> Create a new task </h2>
  <form>
    <label> Task name: </label>
    <input type="text" name="name" required ><br/>
    <label> Task description: </label>
    <input type="text" name="description" required><br/>
    <label> Due by: </label>
    <input type="date" name="date" required>
    <label> hour: </label>
    <input type="number" name="hour" min="0" max="23" required>
    <label> minute: </label>
    <input type="number" name="minute" min="0" max="59" required><br/>
    <input type="submit" value="Create" id="submitButton">
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
        this.#form.reset()
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
      const taskObject = this.#createTaskObject(data)

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
