class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="style.css">
        <nav>
            <ul>
                <li><a class="main-tab" href="index.html">Vivian Ni</a></li>
                <li><a class="tabs" href="campus-involvement.html">Campus Involvement</a></li>
                <li><a class="tabs" href="professional-development.html">Professional Development</a></li>
                <li><a class="tabs" href="projects.html">Projects</a></li>
                <li><a class="tabs" href="index.html">Home</a></li>
                <button class="resume-btn"><a class="resume" href="Vivian Ni.pdf" target="_blank">Resume</a></button>
            </ul>
        </nav>
        `
    }
}

customElements.define('my-header', MyHeader)