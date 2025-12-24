let cards = document.querySelector(".cards")
let cards2 = document.querySelector(".cards2")
let basket = document.querySelector(".basket")
let basketcart = document.querySelector(".basketcart")
function showcards() {
    trendingGames.map(item => {
        cards.innerHTML += `
<div class="">
<div  class="relative">
<img src="${item.image}" class=" rounded-4xl " />
      <button  class="absolute flex flex-col right-[20px] top-[40px] md:right-5 md:top-5 text-white bg-[#008af8] text-lg py-1 px-4 rounded-xl font-semibold">${item.oldPrice
                ? `<span class="line-through text-sm">$  ${item.oldPrice}</span>
         <span>$ ${item.price}</span>`
                : `<span> $ ${item.price}</span>`
            }</button>
</div>
<div class="my-[13px] flex  justify-between  flex-col mx-[30px] ">
<p class="text-[#7a7a7a] ">${item.category}</p>
<div class="flex justify-between hover:text-[#008af8]">
<h5 class="font-semibold  text-lg  " >${item.title}</h5>
<i class="fa-solid fa-bag-shopping flex bg-[#ee626b] py-[10px] px-[13px]  text-white rounded-full  hover:bg-[#008af8] -mt-[10px]  items-center"></i>
</div>

</div>
</div>

`
    }
    )
}
showcards()
function showcards2() {
    mostPlayedGames.map(item => {
        cards2.innerHTML += `
<div class=" ">
<img src="${item.image}" class="rounded-4xl " />
<div class="my-[13px]  text-center    mx-[30px] ">
<p class="text-[#7a7a7a] mb-[10px]">${item.category}</p>
<div class=" hover:text-[#008af8]">
<h5 class="font-semibold  text-lg  mb-[10px] " >${item.title}</h5>
 <button class="bg-[#ee626b] md:px-[20px] md:py-[7px]  p-[10px]  text-white rounded-4xl  hover:bg-[#008af8]">Explore</button>
</div>
</div>
</div>
`
    }
    )
}
showcards2()
function openbasket() {
    basketcart.style.right = '0'
    showbasket()
}
let basketarray=[]
function showbasket() {
   let totalprice=basketarray.reduce((sum,item)=> sum+=item.price,0)
   basketcart.innerHTML = ""
basketcart.innerHTML += `
   <div class="h-full flex flex-col justify-between">
            <div> <i onclick="closebasket()" class="fa-solid fa-xmark text-2xl cursor-pointer p-2 text-black  block text-right"></i>
            </div>
                <div class="p-4 flex  flex-col gap-4">
                    ${basketarray.length > 0
            ? basketarray.map(item => `
                            <div class="flex items-center mb-3 border-b pb-2">
                                <img src="${item.image}" alt="${item.title}" class="w-[140px] h-[200px] object-contain">
                                    <div class="px-2 flex flex-col gap-4">
                                         <p class="text-sm font-semibold ">${item.title}</p>
                                          <p class="text-gray-500">$${(item.price ).toFixed(2)}</p>
                                    <div class="flex items-center gap-2">
                                         <button onclick="" class="border px-2 rounded">-</button>
                                            <span></span>
                                         <button onclick="" class="border px-2 rounded">+</button>
                                         <p onclick="" class="text-red-500 ml-2">Remove</p>
                                    </div>
                            </div>
             </div>
                        `).join('')
            : '<p class="text-gray-500 text-center mt-10 text-2xl">Səbət boşdur</p>'}
                </div>
                <div class="flex flex-col justify-end " >
                     <div class="flex justify-between items-center text-black mx-9">
                    <p class="text-xl">Total</p>
                    <h2 class="font-bold text-xl flex items-start">$ ${totalprice.toFixed(2)}</h2>
                </div>
                <button class="bg-[#ee626b] w-[80%] my-5 mx-auto flex gap-3 items-center justify-center text-white px-4 py-2 rounded">
                    Complete your order
                </button>
                </div>
             
            </div>
    `
}
function closebasket() {
    basketcart.style.right = '-100%';

}