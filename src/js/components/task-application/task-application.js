import '../task-list'
import '../new-task-form'

const template = document.createElement('template')
template.innerHTML = `
<new-task-form></new-task-form>
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
        this.#taskList.setTasks()
      })

      this.addEventListener('deleteTask', (event) => {
        this.#taskList.setTasks()
      })

      this.addEventListener('editTask', (event) => {
        this.#taskList.setTasks()
      })
    }
  }
)
