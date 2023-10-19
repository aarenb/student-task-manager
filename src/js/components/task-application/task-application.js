import '../task-list'
import '../new-task-form'

const template = document.createElement('template')
template.innerHTML = `
<style>
  #main{
    background: pink;
    padding: 50px;
  }
</style>
<div id="main">
  <p> this is a task manager application </p>
  <new-task-form></new-task-form>
  <task-list></task-list>
</div>
`

customElements.define('task-application',
  /**
   * Represents a task-application element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)
