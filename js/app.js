let cards=document.querySelector(".cards")
let cards2=document.querySelector(".cards2")
function showcards(){
trendingGames.map(item=>{
cards.innerHTML+=`
<div class="">
<img src="${item.image}" class="rounded-4xl " />
<div class="my-[13px] flex  justify-between  mx-[30px] ">
<div>
<p>${item.category}</p>
<h5>${item.title}</h5>
</div>

<i class="fa-solid fa-bag-shopping  items-center"></i>
</div>

</div>

`

}
)
}
showcards()