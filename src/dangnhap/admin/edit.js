import data from "../../vidu1/data";
import dasbos from "./dasbos";

const edits = {

    print(id) {
        const printss = data.find((post) => post.id === id);
        return /* html */ `
     ${dasbos.print()}
     <div>
     <div class="mt-5 md:mt-0 md:col-span-2">
       <form action="#" method="POST">
         <div class="shadow sm:rounded-md sm:overflow-hidden">
           <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
             <div class="grid grid-cols-3 gap-6">
               <div class="col-span-3 sm:col-span-2">
                 <label for="company-website" class="block text-2xl font-medium text-gray-700">
                   Thong tin 
                 </label>
                 <div class="mt-1 flex rounded-md shadow-sm">
                   <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="${printss.title}">
                   n
                 </div>
               </div>
             </div>
 
             <div>
               <label for="about" class="block text-2xl font-medium text-gray-700 ">
                 Bai viet
               </label>
               <div class="mt-1">
                 <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="${printss.desc}"></textarea>
               </div>
               
             </div>
             <div>
               <label class="block text-2xl font-medium text-gray-700">
                 Image
               </label>
               <img src="${printss.img}"/>
             </div>
           </div>
           <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
             <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               Save
             </button>
             <a href="#" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               Cancel
             </a>
           </div>
         </div>
       </form>
     </div>
   </div>
 </div>
     `;
    },
};
export default edits;