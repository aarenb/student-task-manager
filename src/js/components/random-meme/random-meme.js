import meme1 from '/images/meme1.jpg'
import meme2 from '/images/meme2.jpg'
import meme3 from '/images/meme3.jpg'
import meme4 from '/images/meme4.jpg'
import meme5 from '/images/meme5.jpg'
import meme6 from '/images/meme6.jpg'
import meme7 from '/images/meme7.jpg'
import meme8 from '/images/meme8.jpg'
import meme9 from '/images/meme9.jpg'
import meme10 from '/images/meme10.jpg'
import meme11 from '/images/meme11.jpg'
import meme12 from '/images/meme12.jpg'
import meme13 from '/images/meme13.jpg'
import meme14 from '/images/meme14.jpg'
import meme15 from '/images/meme15.jpg'
import meme16 from '/images/meme16.jpg'
import meme17 from '/images/meme17.jpg'
import meme18 from '/images/meme18.jpg'
import meme19 from '/images/meme19.jpg'
// This is the only way to show the memes on netlify, I know it's not ideal.

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

customElements.define('random-meme',
  /**
   * Represents a random-meme element.
   */
  class extends HTMLElement {
    #image
    #images
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#image = this.shadowRoot.querySelector('img')
      this.#images = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10, meme11, meme12, meme13, meme14, meme15, meme16, meme17, meme18, meme19]

      this.#assignRandomMeme()
    }

    /**
     * Assigns a random meme to the image element.
     */
    #assignRandomMeme () {
      const randomNumber = Math.floor(Math.random() * 19)
      this.#image.src = this.#images[randomNumber]
    }
  }
)
