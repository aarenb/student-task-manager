const template = document.createElement('template')
// TODO: Can you break out this css into seperate file?
template.innerHTML = `
<style> 
  #container {
    background: rgb(230, 139, 240);
    padding: 12px;
    border: solid black 2px;
  }
  #checkAndName {
    display: flex;
    align-items: center;
    background: orange;
  }
  #name {
    margin-left: 8px;
  }
  #checkBox {
    width: 20px;
    height: 20px;
  }
  #dueDate {
    display: flex;
    align-items: center;
    background: green;
  }
  #date {
    margin-left: 8px;
  }
  #time {
    margin-left: 8px;
  }
  #deletePopup {
    z-index: 10;
    width: 450px;
    height: 150px;
    background: white;
    position: fixed;
    top: 0; 
    left: 0;
    transform: translate(calc(50vw - 50%), calc(50vh - 50%));
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #deletePopup button {
    width: 100px;
  }

</style>
<div id="container">
  <div id="checkAndName">
    <input type="checkbox" id="checkBox"/> 
    <h3 id="name"></h3>
  </div>
  <p id="description"></p>
  <div id="dueDate">
  <p> Due by: </p>
  <p id="date"></p>
  <p id="time"></p>
  </div>
  <div id="buttons">
    <button type="button" id="delete"> Delete </button>
    <button type="button"> Edit </button>
  </div>

  <div id="deletePopup">
    <h3> Are you sure you want to delete this task? </h3>
    <div>
      <button type="button" id="yesDelete"> Yes </button>
      <button type="button" id="noDelete"> No </button>
    </div>
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
    #deletePopup
    #yesDeleteButton
    #noDeleteButton
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
      this.#deletePopup = this.shadowRoot.querySelector('#deletePopup')
      this.#yesDeleteButton = this.shadowRoot.querySelector('#yesDelete')
      this.#noDeleteButton = this.shadowRoot.querySelector('#noDelete')

      this.#checkbox.addEventListener('change', (event) => {
        this.#saveCheckboxStatus()
      })

      this.#deleteButton.addEventListener('click', (event) => {
        this.#deletePopup.style.display = 'flex'
      })

      this.#yesDeleteButton.addEventListener('click', (event) => {
        this.#deletePopup.style.display = 'none'
        localStorage.removeItem(this.#taskId)
        const deleteTask = new CustomEvent('deleteTask')
        this.dispatchEvent(deleteTask)
      })

      this.#noDeleteButton.addEventListener('click', (event) => {
        this.#deletePopup.style.display = 'none'
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
