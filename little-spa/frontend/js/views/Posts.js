import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Posts")
    }

    async getHTML() {
        return `
            <h1>Posts</h1>
            <p>Lorem ipsum dolor sit amet</p>
            <ul>
                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a></li>
                <li><a href="#">Lorem, ipsum dolor</a></li>
                <li><a href="#">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, delectus?</a></li>
            </ul>
        `
    }
}