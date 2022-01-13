
import Navigo from "navigo";
import HomePage from './vidu1/home';
import Header from './vidu1/header';
import Footer from './vidu1/footer';
import ChiTiet from './vidu1/chitiet';
import sigin from './dangnhap/signin';
import signup from './dangnhap/signup';
import news from './dangnhap/admin/news';
import add from "../dangnhap/admin/add";
import edits from "./dangnhap/admin/edit";
import data from "./vidu1/data";
import dasbos from "./dangnhap/admin/dasbos";
// import  AboutPage from "./vidu1/home";
const router = new Navigo("/");
const render = (HomePage) => {
  document.getElementById("header").innerHTML = Header.print();
  document.getElementById("main").innerHTML = HomePage;
  document.getElementById("footer").innerHTML =Footer.print();
 

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
    render(dasbos.print());
  }

});
router.resolve(); 
