let cards = document.querySelector(".cards")
let cards2 = document.querySelector(".cards2")
let basket = document.querySelector(".basket")
let basketcart = document.querySelector(".basketcart")
let cardsforbasket = document.querySelector(".cardsforbasket")
function showcards() {
    trendingGames.map(item => {
        cards.innerHTML += `
<div class="">
<div  class="relative">
<img src="${item.image}" class=" rounded-4xl " />
      <button  class="absolute flex flex-col right-[20px] top-[40px] md:right-5 md:top-5 text-white bg-[#008af8] text-lg py-1 px-4 rounded-xl font-semibold">${ item.oldPrice
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
function openbasket(){
basketcart.style.right='0'
showbasket()
}
function showbasket(){
    trendingGames.map(item=>{
  cardsforbasket.innerHTML+=`
          <div class="sm:col-span-2 flex sm:items-center max-sm:flex-col gap-6">
                            <div class="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                <img src='https://readymadeui.com/images/watch5.webp' class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 class="text-[15px] font-semibold text-slate-900">Smart Watch Timex</h4>
                                <h6 class="text-xs font-medium text-red-500 cursor-pointer mt-1">Remove</h6>
                           
                                    <div class="flex items-center text-black  gap-2 mt-1 border border-gray-300 px-2 py-1 rounded-md w-max">
    <button class="text-lg ">-</button>
    <span class="px-2">1</span>
    <button class="text-lg ">+</button>
  </div>
                        </div>
                        </div>
                        <div class="sm:ml-auto">
                            <h4 class="text-[15px] font-semibold text-slate-900">$120.00</h4>
                        </div>
    `
    })
  
}
function closebasket(){
basketcart.style.right='-100%';

}