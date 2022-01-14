import data from "./data";
import Header from "./header";
import menu from "./menu";
import Footer from "./footer";
const ChiTiet = {
   
    print(id){
        const prints = data.find((post) => post.id === id);
        return /* html */ `
        <div class="container mx-auto">
        <div class="h-22 bg-blue-600">
        ${Header.print()}
        </div>
        ${menu.print()}
        <h1>${prints.title}</h1>
        <img src="${prints.img}"/>
        <p>${prints.desc}</p>
      
       <div class="bg-blue-600 ">${Footer.print()}</div>
       </div>
        `;
    },
};

export default ChiTiet;