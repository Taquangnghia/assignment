import data from "./data";
const ChiTiet = {
   
    print(id){
        const prints = data.find((post) => post.id === id);
        return /* html */ `
        <h1>${prints.title}</h1>
        <img src="${prints.img}"/>
        <p>${prints.desc}</p>
       
        `;
    },
};

export default ChiTiet;