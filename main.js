import './style.css'
import Navigo from "navigo";
import HomePage from './vidu1/home';
import Header from './vidu1/header';
import Footer from './vidu1/footer';
// import  AboutPage from "./vidu1/home";


const router = new Navigo("/");
const render = (header,content,footer) => {
  document.getElementById("main").innerHTML = content.print();
  document.getElementById("header").innerHTML = header.print();
  document.getElementById("footer").innerHTML =footer.print();

};
router.on({
  "/": () => {
    render(Header,HomePage,Footer);
    
  },
  "/about":() => {
    render("<h1> about Page </h1>");
  },

});
router.resolve(); 