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
      this.#showRandomImage()
    }

    /**
     * Assigns a random image to the image element.
     */
    #showRandomImage () {
      const random = Math.floor(Math.random() * 8) // TODO: break out?

      switch (random) {
        case 0:
          this.#image.setAttribute('src', '../images/meme1.jpg')
          break
        case 1:
          this.#image.setAttribute('src', '../images/meme2.jpg')
          break
        case 2:
          this.#image.setAttribute('src', '../images/meme3.jpg')
          break
        case 3:
          this.#image.setAttribute('src', '../images/meme4.jpg')
          break
        case 4:
          this.#image.setAttribute('src', '../images/meme5.jpg')
          break
        case 5:
          this.#image.setAttribute('src', '../images/meme6.jpg')
          break
        case 6:
          this.#image.setAttribute('src', '../images/meme7.jpg')
          break
        case 7:
          this.#image.setAttribute('src', '../images/meme8.jpg')
          break
      }
    }
  }
)
