class NoteForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.customValidationTitleHandler =
      this.customValidationTitleHandler.bind(this);
    this.customValidationBodyHandler =
      this.customValidationBodyHandler.bind(this);
  }

  _updateStyle() {
    this._style.textContent = `
        input,
        textarea {
            font-size: 18px;
            font-family: "Ubuntu", sans-serif;
        }

        form>label {
            color: #232e3f;
            font-size: 18px;
            font-weight: bold;
        }

        form {
            min-width: 350px;
            padding: 32px;
            border: groove;
        }

        form>h2 {
            color: #232e3f;
            text-align: center;
            margin-top: -5px;
            margin-bottom: 25px;
        }

        form>.input-title,
        textarea {
            margin-bottom: 24px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: groove;
            display: block;
            width: 97%;
            padding: 12px 8px;
        }

        form>.add-note {
            margin-top: 48px;
            background-color: #232e3f;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 0px;
            border: none;
            color: white;
            display: block;
            width: 100%;
            padding: 12px 8px;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        form>.add-note:hover,
        form>.add-note:focus-visible {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            background-color: #2f3d53;
        }

        .validation-message {
            margin-block-start: 0.5rem;
            color: red;
        }

      `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <form id="noteForm">
            <h2>Create Note</h2>
            <input class="input-title" type="text" id="title" name="title" placeholder="Title" required>
            <p id="titleValidation" class="validation-message" aria-live="polite"></p>
            <textarea id="body" name="body" rows="4" placeholder="Body" required></textarea>
            <p id="bodyValidation" class="validation-message" aria-live="polite"></p>
            <input class="add-note" type="submit" value="Add Note">
        </form>
      `;

    this._shadowRoot
      .querySelector("#noteForm")
      .addEventListener("submit", this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this._shadowRoot.querySelector("#title").value;
    const body = this._shadowRoot.querySelector("#body").value;

    const addNoteEvent = new CustomEvent("addNote", {
      detail: { title, body },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(addNoteEvent);

    this._shadowRoot.querySelector("#title").value = "";
    this._shadowRoot.querySelector("#body").value = "";
  }

  setupEventListeners() {
    const titleInput = this._shadowRoot.querySelector("#title");
    const bodyInput = this._shadowRoot.querySelector("#body");

    titleInput.addEventListener("input", this.customValidationTitleHandler);
    bodyInput.addEventListener("input", this.customValidationBodyHandler);
  }

  customValidationTitleHandler(event) {
    const titleInput = event.target;
    const titleValidationMessage =
      this._shadowRoot.querySelector("#titleValidation");

    if (!titleInput.value.trim()) {
      titleValidationMessage.innerText = "Title is required.";
    } else {
      titleValidationMessage.innerText = "";
    }
  }

  customValidationBodyHandler(event) {
    const bodyInput = event.target;
    const bodyValidationMessage =
      this._shadowRoot.querySelector("#bodyValidation");

    if (!bodyInput.value.trim()) {
      bodyValidationMessage.innerText = "Body is required.";
    } else {
      bodyValidationMessage.innerText = "";
    }
  }
}

customElements.define("note-form", NoteForm);
