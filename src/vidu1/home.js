import banner from "./conner/banner";
import New from "./conner/new";
import Footer from "./footer";
import Header from "./header";
import menu from "./menu";

const HomePage = {
    print() {
        return /* html */ `
       <div class="container mx-auto">
       <div class="h-22 bg-blue-600">
       ${Header.print()}
       </div>
       ${menu.print()}
       <div id="banner">
          ${banner.print()}
    </div>  
  <div class="content">
  ${New.print()}
  </div>
  ${Footer.print()}
</div>

       `;
    },
};
export default HomePage;