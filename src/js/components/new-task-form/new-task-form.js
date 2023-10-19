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
      console.log(data.name)
      console.log(data.date)
    }
  }
)
