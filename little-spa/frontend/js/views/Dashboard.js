import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Dashboard")
    }

    async getHTML() {
        return `
            <h1>Welcome back to Dashboard</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto adipisci dolorem quo? Reiciendis, quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cupiditate.</p>
            <a href="/posts" data-link>View recent posts</a>
        `
    }
}