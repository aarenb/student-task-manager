const template = document.createElement('template')
template.innerHTML = `
<style>
  #container{
    display: none;
    width: 440px;
    height: 200px;
    z-index: 10;
    top: 0; 
    left: 0;
    transform: translate(calc(50vw - 50%), calc(50vh - 50%));
    position: fixed;
    border: solid 5px black;
    border-radius: 10px;
    background: rgb(54, 255, 168);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 24px;
    margin: 10px;
  }
  #buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .button {
    font-weight: bold;
    width: 70px;
    height: 30px;
    margin-bottom: 5px;
  }
  button {
    margin-left: 10px;
  }
  input {
    margin-bottom: 5px;
  }
</style>
<div id="container">
    <h3> Edit the task: </h3>
    <form>
      <label> Task name: </label>
      <input type="text" name="name" id="name" required><br/>
      <label> Task description: </label>
      <input type="text" name="description" id="description" required><br/>
      <label> Due by: </label>
      <input type="date" name="date" id="date" required>
      <label> hour: </label>
      <input type="number" name="hour" min="0" max="23" id="hour" required>
      <label> minute: </label>
      <input type="number" name="minute" min="0" max="59" id="minute" required><br/>
      <div id="buttons">
        <input type="submit" value="Edit" class="button">
        <button type="button" id="cancel" class="button"> Cancel </button>
      </div>
    </form>
  </div>
`

customElements.define('edit-task',
  /**
   * Represents a task-application element.
   */
  class extends HTMLElement {
    #form
    #taskId
    #cancelButton
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')
      this.#cancelButton = this.shadowRoot.querySelector('button')
      this.#taskId = this.getAttribute('taskId')

      this.#cancelButton.addEventListener('click', (event) => {
        const cancelEdit = new CustomEvent('cancelEdit', {
          bubbles: true,
          composed: true
        })
        this.dispatchEvent(cancelEdit)
      })

      this.#form.addEventListener('submit', (event) => {
        const taskData = this.#getEditedTaskData()

        const editTask = new CustomEvent('editTask', {
          bubbles: true,
          composed: true,
          detail: {
            data: taskData,
            taskId: this.#taskId
          }
        })
        this.dispatchEvent(editTask)
      })
    }

    /**
     * Sets the current task data as values in the edit form.
     *
     */
    setFormValues () {
      console.log(this.#taskId)
      let taskData = localStorage.getItem(this.#taskId)
      taskData = JSON.parse(taskData)

      const nameField = this.shadowRoot.querySelector('#name')
      nameField.setAttribute('value', taskData.name)

      const descriptionField = this.shadowRoot.querySelector('#description')
      descriptionField.setAttribute('value', taskData.description)

      const dateField = this.shadowRoot.querySelector('#date')
      dateField.setAttribute('value', taskData.date)

      const hourField = this.shadowRoot.querySelector('#hour')
      hourField.setAttribute('value', taskData.hour)

      const minuteField = this.shadowRoot.querySelector('#minute')
      minuteField.setAttribute('value', taskData.minute)
    }

    /**
     * Gets the edited task's data from the form.
     *
     * @returns {*} The data in a json string format.
     */
    #getEditedTaskData () {
      const formData = new FormData(this.#form)
      const data = Object.fromEntries(formData)
      return JSON.stringify(data)
    }
  }
)
