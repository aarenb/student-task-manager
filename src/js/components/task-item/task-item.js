import '../delete-task'
import '../edit-task'

const template = document.createElement('template')
// TODO: Can you break out this css into seperate file?
template.innerHTML = `
<style> 
  #container {
    background: rgb(175, 252, 211);
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    border: solid 3px rgb(71, 150, 108);
    margin-bottom: 15px;
    margin-left: 15px;
  }
  #checkAndName {
    display: flex;
    align-items: center;
    height: 33px;
  }
  #name {
    margin-left: 8px;
    font-size: 24px;
    text-decoration: underline;
  }
  #descriptionHeader {
    font-weight: bold;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 0;
  }
  #description {
    margin: 0;
    font-size: 18px;
  }
  #checkBox {
    width: 30px;
    height: 30px;
  }
  #dueDate {
    display: flex;
    align-items: center;
    background: green;
    color: white;
    padding-left: 10px;
    width: 200px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  #date {
    margin-left: 8px;
  }
  #time {
    margin-left: 8px;
  }
  #buttons button {
    width: 75px;
    height: 30px;
    font-weight: bold;
  }
  #darkenBackground {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.51)
  }
  edit-task {
    display: none;
  }
  delete-task {
    display: none;
  }
</style>
<div id="container">
  <div id="checkAndName">
    <input type="checkbox" id="checkBox"/> 
    <h3 id="name"></h3>
  </div>
  <p id="descriptionHeader"> Description:</p>
  <p id="description"></p>
  <div id="dueDate">
  <p> Due by: </p>
  <p id="date"></p>
  <p id="time"></p>
  </div>
  <div id="buttons">
    <button type="button" id="delete"> Delete </button>
    <button type="button" id="edit"> Edit </button>
  </div>

  <div id="darkenBackground">
    <delete-task></delete-task>
    <edit-task></edit-task>
  </div>
</div>
`

customElements.define('task-item',
  /**
   * Represents a task-item element.
   */
  class extends HTMLElement {
    #name
    #description
    #date
    #time
    #checkbox
    #taskId
    #deleteButton
    #deleteTask
    #darkenBackground
    #editButton
    #editTask
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#name = this.shadowRoot.querySelector('#name')
      this.#description = this.shadowRoot.querySelector('#description')
      this.#date = this.shadowRoot.querySelector('#date')
      this.#time = this.shadowRoot.querySelector('#time')
      this.#checkbox = this.shadowRoot.querySelector('#checkBox')
      this.#deleteButton = this.shadowRoot.querySelector('#delete')
      this.#deleteTask = this.shadowRoot.querySelector('delete-task')
      this.#darkenBackground = this.shadowRoot.querySelector('#darkenBackground')
      this.#editButton = this.shadowRoot.querySelector('#edit')
      this.#editTask = this.shadowRoot.querySelector('edit-task')

      this.#checkbox.addEventListener('change', (event) => {
        this.#saveCheckboxStatus()
      })

      this.#deleteButton.addEventListener('click', (event) => {
        console.log('deletButton')
        this.#deleteTask.style.display = 'block'
        this.#darkenBackground.style.display = 'block'
      })

      this.addEventListener('deleteTask', (event) => {
        this.#deleteTask.style.display = 'none'
        this.#darkenBackground.style.display = 'none'
        localStorage.removeItem(this.#taskId)
      })

      this.addEventListener('dontDeleteTask', (event) => {
        this.#deleteTask.style.display = 'none'
        this.#darkenBackground.style.display = 'none'
      })

      this.#editButton.addEventListener('click', (event) => {
        this.#editTask.setFormValues()
        this.#editTask.style.display = 'block'
        this.#darkenBackground.style.display = 'block'
      })

      this.addEventListener('cancelEdit', (event) => {
        this.#editTask.style.display = 'none'
        this.#darkenBackground.style.display = 'none'
      })
    }

    /**
     * Saves the tasks' checkbox status to local storage.
     */
    #saveCheckboxStatus () {
      let taskObject = localStorage.getItem(this.#taskId)
      taskObject = JSON.parse(taskObject)
      if (this.#checkbox.checked) {
        taskObject.isChecked = 'true'
      } else {
        taskObject.isChecked = 'false'
      }
      localStorage.setItem(this.#taskId, JSON.stringify(taskObject))
    }

    /**
     * Sets the task's name.
     *
     * @param {string} name - The name to set.
     */
    setName (name) {
      this.#name.textContent = name
    }

    /**
     * Sets the task's description.
     *
     * @param {string} description - The description to set.
     */
    setDescription (description) {
      this.#description.textContent = description
    }

    /**
     * Sets the task's due date.
     *
     * @param {string} date - The due date to set.
     */
    setDueDate (date) {
      this.#date.textContent = date
    }

    /**
     * Sets the task's due time.
     *
     * @param {string} time - The due time to set.
     */
    setDueTime (time) { // TODO: Change name?
      this.#time.textContent = time
    }

    /**
     * Sets the task id.
     *
     * @param {string} id - The task id to set.
     */
    setTaskId (id) {
      this.#taskId = id
      this.#editTask.setAttribute('taskId', this.#taskId)
    }

    /**
     * Sets the check box to checked or not.
     *
     * @param {string} isChecked - 'True' if check box is checked.
     */
    setCheckBox (isChecked) {
      if (isChecked === 'true') {
        this.#checkbox.checked = true
      } else {
        this.#checkbox.checked = false
      }
    }
  }
)
