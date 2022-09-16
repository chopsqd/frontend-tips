import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Settings")
    }

    async getHTML() {
        return `
            <h1>Settings</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus aliquid numquam asperiores rem laudantium totam vero rerum eius</p>
            <a href="/" data-link>Back to Dashboard</a>
        `
    }
}