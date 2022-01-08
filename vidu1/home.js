import banner from "./conner/banner";
import New from "./conner/new";
import New1 from "./new1";
const HomePage ={
    print(){
       return /* html */ `
       <div id="banner">
          ${banner.print()}
    </div>  
       <div class="news">
       <h2 class="mt-3 font-bold">Tin tuc Học tập </h2>
       <div class="grid grid-cols-3 gap-10 ">
        <div class="border-2  mt-5">
        ${New.print()}

        </div>
      </div>
      <h2 class="mt-3 font-bold">Hoat dong sinh vien</h2>
      <div class="grid grid-cols-3 gap-10">
        <div class="border-2  mt-5">
         ${New1.print()}
        </div>
     </div>
      
     
     </div>
     
       `;   
    },
};  
export default HomePage;