import '../task-item'

const template = document.createElement('template')
template.innerHTML = `
<style>
  #main{
    background: yellow;
    padding: 50px;
  }
</style>
<div id="main">
  <p> this is a task list </p>
  <task-item></task-item>
  <task-item></task-item>
</div>
`

customElements.define('task-list',
  /**
   * Represents a task-list element.
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
