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
