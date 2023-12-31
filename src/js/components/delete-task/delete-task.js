const template = document.createElement('template')
template.innerHTML = `
<style>
  #container {
    width: 440px;
    height: 150px;
    z-index: 10;
    top: 0; 
    left: 0;
    transform: translate(calc(50vw - 50%), calc(50vh - 50%));
    position: fixed;
    border: solid 5px black;
    border-radius: 10px;
    background: rgb(54, 255, 168);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 100px;
    height: 30px;
    font-weight: bold;
  }
</style>
<div id="container">
  <h3> Are you sure you want to delete this task? </h3>
  <div>
    <button type="button" id="yes"> Yes </button>
    <button type="button" id="no"> No </button>
  </div>
</div>
`

customElements.define('delete-task',
  /**
   * Represents a delete-task element.
   */
  class extends HTMLElement {
    #yesButton
    #noButton
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#setInstanceVariables()

      this.#listenForYes()
      this.#listenForNo()
    }

    /**
     * Sets the instance variables.
     */
    #setInstanceVariables () {
      this.#yesButton = this.shadowRoot.querySelector('#yes')
      this.#noButton = this.shadowRoot.querySelector('#no')
    }

    /**
     * Listens for a click on the yes button.
     */
    #listenForYes () {
      this.#yesButton.addEventListener('click', () => {
        this.#dispatchDeleteTaskEvent()
      })
    }

    /**
     * Dispatches a custom deleteTask event.
     */
    #dispatchDeleteTaskEvent () {
      const deleteTask = new CustomEvent('deleteTask', {
        bubbles: true,
        composed: true
      })
      this.dispatchEvent(deleteTask)
    }

    /**
     * Listens for a click on the no button.
     */
    #listenForNo () {
      this.#noButton.addEventListener('click', () => {
        this.#dispatchDontDeleteTaskEvent()
      })
    }

    /**
     * Dispatches a custom dontDeleteTask event.
     */
    #dispatchDontDeleteTaskEvent () {
      const dontDeleteTask = new CustomEvent('dontDeleteTask', {
        bubbles: true,
        composed: true
      })
      this.dispatchEvent(dontDeleteTask)
    }
  }
)
