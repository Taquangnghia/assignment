const menu ={
    print(){
        return /*html*/ `
        <nav class=" bg-orange-600">
        <ul class=" flex  text-white">
          <li class="px-5  hover:bg-cyan-600"><a href="/" class="leading-10 ">Trang chủ</a></li>
          <li class="px-5  hover:bg-cyan-600"><a href="/chitiet" class="leading-10">Tuyển sinh</a></li>
          <li class="px-5  hover:bg-cyan-600" ><a href="/product" class="leading-10">Chương trình đào tạo</a></li>
          <li class="px-5  hover:bg-cyan-600"><a href="/hienthi" class="leading-10">Signin</a></li>
          <li class="px-5  hover:bg-cyan-600 mr-20"><a href="/dangky" class="leading-10">Signup</a></li> 
          <div  class=" pl-20" >
           <input type="text" class="ml-20 mt-2">
           <button class="ml-3 ml-20 bg-slate-900 pr-3 pl-2">Tim kiem </button> 
          </div>
        </ul>
      </nav>
        `
    },
};
export default menu;