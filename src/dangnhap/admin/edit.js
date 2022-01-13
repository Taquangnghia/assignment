import data from "../../vidu1/data";

const edits = {

 print(id){
     const printss = data.find((post) => post.id === id);
     return /*html*/ `
     <h1>${printss.title}</h1>
     <img src="${printss.img}"/>
     <p>${printss.desc}</p>
     `
 },
};
export default edits;