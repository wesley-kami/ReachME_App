// import navigateTo from "../../../index.js";
import AbstractView from "../AbstractView.js";
// import home from "./home/home.js";

export default class extends AbstractView{
    constructor(){
        super();
        // this.setTitle('dashboard');
    }

    async getContent(){
        return `<header class="flex fixed w-full justify-between bg-black/20 px-2">
           <div class="flex w-[300px] justify-around items-center">
             <div class="w-7 h-7 rounded bg-purple-400 flex text-white items-center justify-center font-bold text-sm">R</div>
             <div class="bg-white/30 px-2 h-8 flex rounded-full justify-center items-center w-150">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" className="size-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                   </svg>  
                <input type="text" class="p-1 mx-0.5 text-white bg-transparent outline-0 text-md" placeholder="Research on REACHME">
             </div>
           </div>

           <div class="flex justify-around w-4/12">
                <a href="" class='nav hover:bg-white/10 transition ease-in-out duration-200 m-1 rounded-md w-[100px] text-center p-2 h-fit no-underline'>
                    <svg class="mx-auto w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>

                </a>
                <a href="" class='nav hover:bg-white/10 transition ease-in-out duration-200 m-1 rounded-md w-[100px] text-center p-2 h-fit no-underline'>
                    <svg class="mx-auto w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                        <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                    </svg>

                </a>
              <a href="" class='nav hover:bg-white/10 transition ease-in-out duration-200 m-1 rounded-md w-[100px] text-center p-2 h-fit no-underline'>
                <svg class="mx-auto w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                    <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                </svg>

              </a>
         </div>

           <div class="flex w-1/12 gap-5 justify-around items-center">
                <a href="" class='p-2 rounded-full h-fit no-underline bg-black/30 hover:bg-black/40 duration-200 transition ease-in-out'>
                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                      <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                    </svg>

                </a>
            <img class="pdp w-10 h-10 bg-white/50 hover:bg-white/70 transition ease-in-out duration-200 cursor-pointer p-2 rounded-full" src="" alt="">
           </div>
        </header>
        <div class="fixed top-14 h-screen flex">
            <aside id="sideBar" class="fixed h-screen bg-black/40 w-3/12">
            <ul class="p-2 flex flex-col gap-5">
                <li class="flex hover:bg-white/20 transition duration-200 ease-in-out p-2 rounded-md">
                    <a href="" class="flex items-center gap-5 w-full">  
                         <img class="pdp w-10 h-10 bg-white/50 hover:bg-white/70 transition ease-in-out duration-200 cursor-pointer p-2 rounded-full" src="" alt="">
                         <p class="userName text-white text-sm"></p>
                    </a>
                </li>
                <li class="flex hover:bg-white/20 transition duration-200 ease-in-out p-2 rounded-md">
                    <a href="" class="flex items-center gap-5 w-full">  
                        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                           <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
                        </svg>
                        <p class="text-white text-sm">Chat</p>
                    </a>
                </li>
                <li class="flex hover:bg-white/20 transition duration-200 ease-in-out p-2 rounded-md">
                    <a href="" class="flex items-center gap-5 w-full">  
                        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                            <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
                        </svg>
                        <p class="text-white text-sm">Birthdays</p>
                    </a>
                </li>
                <li class="flex hover:bg-white/20 transition duration-200 ease-in-out p-2 rounded-md">
                    <a href="" class="flex items-center gap-5 w-full">  
                        <svg width="36px" height="36px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="white"><path d="M12 6L12 12L18 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.8883 10.5C21.1645 5.68874 17.013 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16H21.4C21.7314 16 22 16.2686 22 16.6V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p class="text-white text-sm">Memories</p>
                    </a>
                </li>
            </ul>
        </aside>
        <main id="main" class="p-5 w-9/12 h-screen fixed right-0 overflow-y-scroll">
            
        </main>
        </div>`
    }

    async scriptLink(){
        /* Represent the div that ill contain all the page (The SPA representative itself) */
        const intro = document.getElementById('intro').innerHTML = await this.getContent();
        // const main = document.getElementById('main');
        // console.log(main)
        // main.innerHTML = hom.getContent();
        // await hom.scriptLink();
                
        // console.log(userInfo);
     }
}