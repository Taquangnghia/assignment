import data from "../data";
const New ={
    print(){
        return /*html*/`
        <h1 class="font-bold font-sans uppercase text-[#393c45] py-4 text-xl mt-3">Tin tức học tập</h1>
        <div class="grid grid-cols-3 gap-4">
        ${data.map((post) => /*html*/`
        <div class="border-[1px] ">
            <a href="/chitiet/${post.id}">
            <img class="mx-auto mt-5" src="${post.img}" alt="">
            <h3 class="py-2 font-medium font-sans hover:text-[#282f53] mx-auto mt-3 ml-3">${post.title}</h3>
            <p class="pb-3 pt-1 pl-10 text-xs pr-2  mt-3 ml-3">${post.desc}</p>
            </a>
        </div>
        `).join("")}
        </div>

        <h1 class="font-bold font-sans uppercase text-[#393c45] py-4 text-xl mt-3">Thong tin</h1>
        <div class="grid grid-cols-3 gap-4">
        ${data.map((post) => /*html*/`
        <div class="border-[1px] ">
            <a href="#">
            <img class="mx-auto mt-5" src="${post.img}" alt="">
            <h3 class="py-2 font-medium font-sans hover:text-[#282f53] mx-auto pl-10 text-red-600 mt-3 ml-3">${post.title}</h3>
            <p class="pb-3 pt-1 pl-10 text-xs pr-2 mt-3 ml-3">${post.desc}</p>
            </a>
        </div>
        `).join("")}
        </div>
        `
    },

};
export default New;