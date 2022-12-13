export default class Popup extends HTMLElement {
    constructor() {
        super()
		this.addEventListener('click', () => this.alert());
	}

	render() {
		let data = {
            name: this.getAttribute('name'),
			button: this.getAttribute('button') || ''
        }
        this.innerHTML = `
		<div>
			this is ${data.name} ${data.button}
		</div>`
		//console.log("render")
	}

	alert() {
		
		console.log(`Привет! ${data.name}`)
	}

    connectedCallback() {
		this.render()
    }

	static get observedAttributes() { 
		return ['name']
	}

	attributeChangedCallback(name, oldValue, newValue) { 
		if(oldValue !== newValue) {
			this[`_${name}`] = newValue;
			this.render();
		}
	}
}
  
customElements.define('popup-element', Popup)