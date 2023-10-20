const template = document.createElement('template')
template.innerHTML = `
<style>
  div {
    background: white;
    height: 200px;
    margin-right: 50px;
  }
</style>
<div>
  <p> a meme! </p>
</div>
`

customElements.define('student-meme',
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
