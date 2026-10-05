class ImageGap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const gap = this.getAttribute('gap') || '0px';
    const direction = this.getAttribute('direction') || 'row';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: ${direction};
          gap: ${gap};
          width: 100%;
          align-items: center;
        }
        
        ::slotted(img) {
          flex: 1 1 0%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          margin: 0 !important;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('image-gap', ImageGap);
