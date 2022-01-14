
import Navigo from "navigo";
import HomePage from './vidu1/home';
import ChiTiet from './vidu1/chitiet';
import sigin from './dangnhap/signin';
import signup from './dangnhap/signup';
import news from './dangnhap/admin/news';
import edits from "./dangnhap/admin/edit";
import dasbos from "./dangnhap/admin/dasbos";
import add from "./dangnhap/admin/add";
// import  AboutPage from "./vidu1/home";
const router = new Navigo("/", {linksSelector :"a"});
const render = (HomePage) => {
  document.getElementById("main").innerHTML = HomePage;
};
router.on({
  "/": () => {
    render(HomePage.print());
  },
  "/chitiet/:id":({ data }) => {
    const {id} = data;
    render(ChiTiet.print(id));
  },
  "/dangky":() => { 
    render(signup.print());
   
  }, 
  "/hienthi" :() =>{
    render(sigin.print());
  },
  "/news" :() =>{
    render(news.print());
  },
  "/add":()=>{
    render(add.print());
  },
  "/edit/:id" :({data})=>{
    const {id} = data;
    render(edits.print(id));
  },
  "/dasbos" :()=>{
    render(dasbos.print() );
  }

});
router.resolve(); 
