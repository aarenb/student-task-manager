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

      this.#listenForSubmit()
    }

    /**
     * Listens for a submit of the form.
     */
    #listenForSubmit () {
      this.#form.addEventListener('submit', (event) => {
        this.#form.reset()
        this.#dispatchNewTaskEvent()
      })
    }

    /**
     * Dispatches a custom newTask event.
     */
    #dispatchNewTaskEvent () {
      const taskData = this.#getTaskData()
      const newTask = new CustomEvent('newTask', {
        detail: {
          data: taskData
        }
      })
      this.dispatchEvent(newTask)
    }

    /**
     * Gets the created task's data from the form.
     *
     * @returns {*} The data in a json string format.
     */
    #getTaskData () {
      const formData = new FormData(this.#form)
      const data = Object.fromEntries(formData)
      return JSON.stringify(data)
    }
  }
)
