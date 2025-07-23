import AbstractView from "../../AbstractView.js";
import dashboard from "../dashboard.js";
import navigateTo from "../../../../index.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('home');
    }

     getContent(){
        return `
            <div id='postNester'>
                <div class="mx-auto rounded-md bg-black/40 p-3 w-7/12">
                    <div class="flex gap-5 mx-auto gap ">
                        <a class="" href=""><img class="pdp w-11 h-11 bg-white p-1 rounded-full" src="" alt=""></a>
                        <input type="submit" id='publication' class="bg-white/30 transition ease-in-out duration-200 hover:bg-white/20 hover:cursor-pointer space-2 text-white px-4 rounded-full w-10/12 text-left" value="">
                    </div>
                    <hr class="my-4">
                    <label for='postImage' id='post' class='flex items-center bg-black/50 hover:bg-black/60 cursor-pointer transition duration-200 ease-in-out p-1 rounded-md justify-center gap-5'>
                            <svg width="36px" height="36px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="purple"><path d="M21 7.6V20.4C21 20.7314 20.7314 21 20.4 21H7.6C7.26863 21 7 20.7314 7 20.4V7.6C7 7.26863 7.26863 7 7.6 7H20.4C20.7314 7 21 7.26863 21 7.6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4H4.6C4.26863 4 4 4.26863 4 4.6V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 16.8L12.4444 15L21 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 13C15.6716 13 15 12.3284 15 11.5C15 10.6716 15.6716 10 16.5 10C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <p class='text-white'> Photo </p>
                    </label>
                </div>
                <form method='POST' enctype='multipart/form-data' id="postPop" class='mx-auto hidden fixed top-[10%] right-[20%] backdrop-blur my-2 w-[580px] bg-black/40 rounded-md h-fit'>
                    <div class="flex border-b-2 border-black/30 p-3 items-center">
                    <p class="text-xl w-full text-center font-semibold text-white">Create a publication</p>
                    <div id='closePost' class='bg-white/50 cursor-pointer hover:bg-white/20 transition ease-in-out duration-200 rounded-full p-1'>
                        <svg class='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    </div>
                </div>
                <div class='flex p-5 items-center gap-5'>
                    <img class="pdp p-1 w-10 h-10 bg-white rounded-full" src=''>
                    <p class='userName text-white'></p>
                </div>
                <div class="w-full max-h-80 overflow-y-scroll px-5">
                    <textarea id='autoResize' name='content' class="text-white rounded-md bg-gray-800 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400 p-3 resize-none w-full" placeholder="" name="" id="" style='max-height:250px'></textarea>
                    <div id='previewContainer' class="hidden w-full rounded-sm relative my-2 h-60 bg-white/10 overflow-hidden">
                        <div id='removeImage' class='bg-white/50 absolute right-2 top-2 cursor-pointer hover:bg-white/20 transition ease-in-out duration-200 rounded-full p-1'>
                        <svg class='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <img id='preview' src=''class='w-full h-full object-contain p-1' alt=''>
                    </div>
                </div>
                <div class="w-11/12 mx-auto">
                    <label for='postImage' class="flex justify-center gap-5 py-2 rounded-md hover:bg-black/40 cursor-pointer transition duration-200 ease-in-out items-center my-1 bg-black/30 mx-auto ">
                    <svg class="w-6 h-6" width="36px" height="36px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="white"><path d="M21 7.6V20.4C21 20.7314 20.7314 21 20.4 21H7.6C7.26863 21 7 20.7314 7 20.4V7.6C7 7.26863 7.26863 7 7.6 7H20.4C20.7314 7 21 7.26863 21 7.6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4H4.6C4.26863 4 4 4.26863 4 4.6V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 16.8L12.4444 15L21 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 13C15.6716 13 15 12.3284 15 11.5C15 10.6716 15.6716 10 16.5 10C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p class="text-white text-sm">Add photo/Video</p>
                     <input type='file' name='image' id="postImage" class='hidden'>
                    </label>
                    <input type="submit" disabled id='publish' value='Publish post' class="disabled:text-white/50 disabled:bg-fuchsia-600/60 disabled:cursor-default disabled:hover:bg-fuchsia-600/60  bg-fuchsia-600 hover:bg-fuchsia-700 transition duration-200 ease-in-out text-white rounded-md w-full cursor-pointer bg my-2 py-2">
                </div>
            </form>
            
            </div>
        `
    }

    async scriptLink(){

        /* Initialising dashboard variable */
        const dash = new dashboard();

        /* Loading dashboard script */
        await dash.scriptLink();

        const overlay = document.getElementById('overlay');

        const nav = document.querySelectorAll('.nav');

        // nav[0].classList.add('border-b-white/50','border-b-2');

        const main = document.getElementById('main');

        main.innerHTML = await this.getContent();
        /*  */ 
        const publication = document.getElementById('publication') ;

        /* The closing tag for publication */
        const closePost =document.getElementById('closePost');

        /* the publication pop-up element */
        const postPop = document.getElementById('postPop');

        const previewContainer= document.getElementById('previewContainer');

        const removeImage = document.getElementById('removeImage');

        const post = document.getElementById('post');

        const postImage =document.getElementById('postImage'); 

        const preview = document.getElementById('preview');

        const publish = document.getElementById('publish');

        /* Fields containning the user's name */
        const userName= document.querySelectorAll('.userName');

       
        /* The spots where the user's profile are dusplayed */
        const profiles = document.querySelectorAll('.pdp');

        const textarea = document.getElementById("autoResize");

        textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
        });

            const user = await fetch('http://localhost:8080/api/clients/userInfo.php',{
            credentials : 'include'
        });
        const userInfo = await user.json();
        if(userInfo.success){

            userName.forEach(user =>{
                user.innerText=`${userInfo.data.first_name} ${userInfo.data.last_name}`;
            })
            textarea.setAttribute('placeholder',`What's up, ${userInfo.data.first_name} ?`);
            publication.value=`What's up, ${userInfo.data.first_name} ?`;
            // userInfo.data.profile_image ?? './assets/images/public/avatar.png';
            userInfo.data.profile_image ? profiles.forEach(profile => profile.setAttribute('src',userInfo.data.profile_image)) : profiles.forEach(profile => profile.setAttribute('src',"./assets/images/public/avatar.png"))

            post.addEventListener('click',async () =>{
                postPop.classList.remove('hidden');
                intro.backgroundColor= 'black';
                overlay.classList.remove('hidden');
                overlay.appendChild(postPop);
                
            });
            postImage.addEventListener('change', ()=>{
                const file = postImage.files[0];
                if(file){
                    const url = URL.createObjectURL(file);
                    preview.src=url;
                    previewContainer.classList.remove('hidden')
                }
                publish.disabled = false
                removeImage.addEventListener('click',()=>{
                    preview.src='';
                    postImage.value='';
                    // URL.revokeObjectURL(url);
                    previewContainer.classList.add('hidden');
                    autoResize.value === '' ? publish.disabled = true : publish.disabled = false
                }) 
                
            });
            autoResize.addEventListener('input',()=>{
                autoResize.value === '' ? publish.disabled = true : publish.disabled = false
            });
            publication.addEventListener('click', ()=>{
            postPop.classList.remove('hidden');
            overlay.classList.remove('hidden');
            overlay.appendChild(postPop);
            // postPop.classList.add('z-100');
            // overlay.classList.add('z-[1]');
            // intro.style.backgroundColor ='blue';
            // console.log(intro.style.backgroundColor);
            // intro.classList.add("blur-sm", "pointer-events-none", "select-none")
            });

            closePost.addEventListener('click',()=>{
                postPop.classList.add('hidden');
                overlay.classList.add('hidden');
            });

            postPop.addEventListener('submit', async (e)=>{
                e.preventDefault();
                const data = new FormData(postPop);
                const sendPost = await fetch('http://localhost:8080/api/clients/post.php',{
                    credentials : 'include',
                    method : 'POST',
                    body : data
                });
                const sendpostRes = await sendPost.json();
                
                if(sendpostRes.success){
                    postPop.classList.add('hidden');
                    overlay.classList.add('hidden');
                    navigateTo('/home');
                }else{

                }
                console.log(postRes);
            });
            // console.log(userInfo.data)

            const posts = await fetch('http://localhost:8080/api/clients/getPost.php',{ credentials : 'include' })
            const postRes = await posts.json();

            console.log(postRes);
            const postNester = document.getElementById('postNester');

            postRes.data.forEach(post => {
                // Example: If you have user info in post.user (adjust as needed)
                const view = document.createElement('div');
                view.className = "mx-auto rounded-md bg-black/40 p-4 my-4 w-7/12 shadow-lg";

                view.innerHTML = `
    <div class="flex gap-4 items-center mb-2">
        <img class="w-12 h-12 rounded-full bg-white p-1" src="${post.profile_image || './assets/images/public/avatar.png'}" alt="profile">
        <div>
            <p class="text-white font-semibold text-lg">${post.first_name || 'Unknown'} ${post.last_name || ''}</p>
            <p class="text-xs text-purple-300">${new Date(post.created_at).toLocaleString()}</p>
        </div>
    </div>
    <div class="text-white mb-3 text-base">${post.content || ''}</div>
    ${post.image ? `
        <div class="w-full rounded-md overflow-hidden bg-black/30 mb-2">
            <img src="assets/images/${post.image}" alt="post image" class="w-full max-h-96 object-contain mx-auto rounded-md" />
        </div>
    ` : ''}
`;

                postNester.appendChild(view);
            });
            

        }else{
            navigateTo('/');
        }

    }

}
