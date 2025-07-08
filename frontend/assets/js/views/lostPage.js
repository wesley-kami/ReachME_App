import AbstractView from "./clients/AbstractView.js"

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Not Found");
    }

    async getContent(){
        return ` 
        <div class="text-center flex flex-col items-center justify-center h-screen">
            <h1 class="text-7xl font-bold text-purple-500 mb-4">404</h1>
            <h2 class="text-2xl text-white mb-2">Oops! Page not found</h2>
            <p class="text-slate-300 mb-6">The page you are looking for doesn’t exist or has been moved.</p>
            <a href="/" class="inline-block px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Go Home</a>
        </div>`
    }
}