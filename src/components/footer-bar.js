class NoteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>© ${new Date().getFullYear()} Notes Application</p>
      </footer>
    `;
  }
}
customElements.define("note-footer", NoteFooter);
