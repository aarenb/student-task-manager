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
