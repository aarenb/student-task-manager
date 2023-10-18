const template = document.createElement('template')
template.innerHTML = `
<style>
  #main{
    background: purple;
    padding: 50px;
  }
</style>
<div id="main">
  <p> this is a task </p>
</div>
`

customElements.define('task-item',
  /**
   * Represents a task-item element.
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
