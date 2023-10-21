const template = document.createElement('template')
template.innerHTML = `
<style>
  div {
    height: 250px;
  }

  img {
    height: 250px;
  }
</style>
<div>
  <img>
</div>
`

customElements.define('student-meme',
  /**
   * Represents a task-application element.
   */
  class extends HTMLElement {
    #image
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#image = this.shadowRoot.querySelector('img')
      this.#assignRandomMeme()
    }

    /**
     * Assigns a random meme to the image element.
     */
    #assignRandomMeme () {
      const randomNumber = Math.floor(Math.random() * 16) + 1
      this.#image.setAttribute('src', `../images/meme${randomNumber}.jpg`)
    }
  }
)
