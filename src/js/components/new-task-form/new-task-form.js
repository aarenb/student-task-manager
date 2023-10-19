const template = document.createElement('template')
template.innerHTML = `
<form>
  
</form>
`

customElements.define('new-task-form',
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
