class Tooltip extends HTMLElement {
  constructor() {
    // El componente no ha sido puesto en el dom 
    super();
    this._tooltipIcon;
    this._tootipVisible = false;
    this._tooltipText = 'Some dummy tooltip text.';
    this.attachShadow({mode: 'open'});
    // const template = document.querySelector('#tooltip-template');
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.innerHTML = `
      <style>
        div {
          font-weight: normal;
          background-color: black;
          color: white;
          position: absolute;
          top: 2rem;
          left: 0.75rem;
          z-index: 10;
          padding: 0.15rem;
          border-radius: 3px;
          box-shadow: 1px 1px 6px rgba(0,0,0,0 0.26);
        }

        /* :host Permite aplicar estilos al componente mismo, en este caso uc-tooltip */
        :host {
          position: relative;
        }

        /* :host(.important) permite aplicar una condicionante al componente mismo */
        :host(.important) {
          background: var(--color-primary, #ccc);
          padding: 0.15rem;
        }
        /* host-context() permite especificar una condicion a estilar dentro del host */
        :host-context(p) {
          font-weight: bold;
        }

        .highlight {
          background-color: red;
        }

        /* Permite aplicar estilos al slot mediante algun selector */
        ::sloted(.highlight) {
          border-bottom: 1px dotted red;
        }

        .icon {
          background: black;
          color: white;
          padding: 0.15rem 0.5rem;
          text-align: center;
          border-radius: 50%;
        }
      </style>
      <slot>Some default</slot>
      <span class="icon"> ?</span>
    `
  }
  connectedCallback() {
    // el componente ha sido puesto en el dom
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    this._tooltipIcon = this.shadowRoot.querySelector('span');
    this._tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this._render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
    if (oldValue === newValue) {
      return;
    }
    if (name === 'text') {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    return ['text'];
  }

  disconnectedCallback() {
    console.log('Disconnected!!');
    this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
    this._tooltipIcon.removeEventListener('mouseenter', this._hideTooltip);
  }

  _render() {
    let tooltipContainer = this.shadowRoot.querySelector('div');
    if (this._tootipVisible) {
      tooltipContainer = document.createElement('div');
      tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      if (tooltipContainer) {
        this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }


  _showTooltip() {
    this._tootipVisible = true;
    this._render();
  }

  _hideTooltip() { 
    this._tootipVisible = false;
    this._render();
  }
}


customElements.define('uc-tooltip', Tooltip);