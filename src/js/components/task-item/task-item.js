const template = document.createElement('template')
// TODO: Can you break out this css into seperate file?
template.innerHTML = `
<style> 
  #container {
    background: rgb(230, 139, 240);
    padding: 12px;
    border: solid black 2px;
  }
  #checkAndName {
    display: flex;
    align-items: center;
    background: orange;
  }
  #name {
    margin-left: 8px;
  }
  #check {
    width: 20px;
    height: 20px;
  }
  #dueDate {
    display: flex;
    align-items: center;
    background: green;
  }
  #date {
    margin-left: 8px;
  }
  #time {
    margin-left: 8px;
  }
</style>
<div id="container">
  <div id="checkAndName">
    <input type="checkbox" id="check"/> 
    <h3 id="name"> Fix this website </h3>
  </div>
  <p id="description"> Very important!! have to get that csn </p>
  <div id="dueDate">
  <p> Due by: </p>
  <p id="date"> 23/10/2023 </p>
  <p id="time"> 09:00 </p>
  </div>
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
