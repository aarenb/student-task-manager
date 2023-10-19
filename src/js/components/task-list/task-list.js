import '../task-item'

const template = document.createElement('template')
template.innerHTML = `
<style>
  #main{
    background: yellow;
  }
</style>
<div id="main">
  <p> this is a task list </p>
</div>
`

customElements.define('task-list',
  /**
   * Represents a task-list element.
   */
  class extends HTMLElement {
    #main
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#main = this.shadowRoot.querySelector('#main')

      this.setItems()
    }

    /**
     * Sets the task items.
     */
    setItems () {
      const newTask = document.createElement('task-item')
      newTask.setName('test')
      newTask.setDescription('test test test')
      newTask.setDueDate('19/10/2023')
      newTask.setDueTime('11:30')
      newTask.setCheckBox(true)
      this.#main.appendChild(newTask)
    }
  }
)
