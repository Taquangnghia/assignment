import banner from "./conner/banner";
import New from "./conner/new";

const HomePage ={
    print(){
       return /* html */ `
       <div id="banner">
          ${banner.print()}
    </div>  
  <div class="content">
  ${New.print()}
  </div>
       `;   
    },
};  
export default HomePage;