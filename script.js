const users = [
    { profilepic:"https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainpic:"https://images.unsplash.com/photo-1634955657864-46b625d1e5e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName:"shubham",
    intreasts:[
        {icon:`<i class="ri-video-on-line"></i>`, hobbie:"Video creation"},
        {icon:`<i class="ri-edit-line"></i>`, hobbie:"Video Editing"} 
    ],
    age:19,
    location:"Bihar, Gaya",
    pendingMessage:"34",
    bio:"Meet Shubham, He is Youtuber with 10k subscribers | clash of clans creator | he is also a web developer",
    isFriend:null},

    { profilepic:"https://images.unsplash.com/photo-1625585865983-6481ff6470f5?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainpic:"https://images.unsplash.com/photo-1710598586974-a2acd673c04e?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName:"shivam",
    intreasts:[
        {icon:`<i class="ri-music-fill"></i>`,
         hobbie:"Music"},
        {icon:`<i class="ri-edit-line"></i>`,
         hobbie:"Editing"} 
    ],
    age:21,
    location:"Maharashtra, Mumbai",
    pendingMessage:"8",
    bio:"Meet with shivam, a ball of sunshine with a heart as big as his grin! Whether he's splashing in puddles or cuddled up with a favorite book, he's always spreading joy.",
    isFriend:null},

    { profilepic:"https://images.unsplash.com/photo-1603005901058-02e1cfc65270?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainpic:"https://images.unsplash.com/photo-1637498646931-7b60b7694ae7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName:"Ankush",
    intreasts:[
        {icon:`<i class="ri-mic-2-fill"></i>`,
         hobbie:"singing"},
        {icon:`<i class="ri-music-fill"></i>`,
         hobbie:"music"} 
    ],
    age:28,
    location:"New Delhi, Rohini",
    pendingMessage:"6",
    bio:"Introducing Ankush, a budding scientist with a twinkle in his eye! From examining bugs in the backyard to building towering block skyscrapers, he's a natural explorer.",
    isFriend:null},
    
    { profilepic:"https://images.unsplash.com/photo-1644165867798-a15fc639b5fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainpic:"https://images.unsplash.com/photo-1633336426069-ed9dd6c1b1e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName:"Ranvijay",
    intreasts:[
        {icon:`<i class="ri-video-on-line"></i>`,
         hobbie:"Video creation"},
        {icon:`<i class="ri-edit-line"></i>`,
         hobbie:"Video Editing"} 
    ],
    age:23,
    location:"Patna, kankarbagh",
    pendingMessage:"18",
    bio:"Meet Ranvijay, a fearless explorer with a love for the great outdoors! Whether he's climbing trees or searching for hidden treasures, he's always on a quest for excitement.",
    isFriend:null},
]


let  curr = 0;
let isAnimating = false;
let cross = select(".cross")
let like = select(".like")

function select(elem){
  return  document.querySelector(elem)
}



function setData(index){
  
  select(".profile img").src = users[index].profilepic
  select(".location h5").textContent = users[index].location
  select(".name h2").textContent = users[index].userName
  select(".name h3").textContent = users[index].age
  select(".bio .description").textContent = users[index].bio
  select(".message h5").textContent = users[index].pendingMessage
  clutter = "";
  users[index].intreasts.forEach(function(elem) {
    clutter += `<p class="bg-white bg-opacity-60 rounded-full px-4 py-1 text-[.8rem]">${elem.icon} ${elem.hobbie} </p>`
    select(".tags").innerHTML = clutter;
  });
}

function setThings(){
    select(".front img").src = users[curr].mainpic
    select(".incoming img").src = users[curr + 1]?.mainpic
    setData(curr)
    curr = 2

 };
 setThings()

function animation(){
  if(!isAnimating){
    isAnimating = true
    let tl = gsap.timeline({
     onComplete:function(){
       isAnimating = false
       let front = select(".front")
       let incoming = select(".incoming")
   
       incoming.classList.remove("z-[1]")
       incoming.classList.add("z-[2]")
       incoming.classList.remove("incoming")
   
       front.classList.remove("z-[2]")
       front.classList.add("z-[1]")
       
       
       gsap.to(front,{
         scale:1,
         opacity:1,
       })
       
       if(curr === users.length) curr = 0;
       select(".front img").src = users[curr].mainpic
       curr++
       front.classList.remove("front")
       front.classList.add("incoming")
       incoming.classList.add("front")
     }
    })
    tl.to(".front",{
      scale:1.1,
      opacity:0,
      ease: Circ,
      duration:.9
    },"a").from(".incoming",{
     scale:.9,
     opacity:0,
     ease: Circ,
     duration:1.1
    },"a")
  }
}

function createDiv(){
  document.querySelectorAll(".element").forEach(function(elem){
    let div = document.createElement("div")
        div.classList.add(`${elem.classList[0]}container`, 'overflow-hidden')
        div.appendChild(elem)
        select(".bottomcontainer").appendChild(div)
  })
}
  createDiv()
  
  var store = ""
function storeData(index){
 if(curr==1){
  index = 3
 } 
 const existingDiv = select(`.data-${index}`)
 if(existingDiv){
  alert('You Already follow');
 }else{
  store+= `<div class=" data-${index} items w-full h-32 bg-red-500 z-[5] rounded-xl flex items-center justify-start gap-2 pl-3 relative">
  <div class="store-profile w-[30%] h-[55%] bg-white z-[4] rounded-[50%] overflow-hidden">
      <img class="w-full h-full object-cover" src="${users[index].profilepic}" alt="">
  </div>
  <div class="store-name">
      <h2 class="text-white font-bold text-xl">${users[index].userName}</h2>
  </div>
  <div class="unfollow absolute bottom-2 right-3">
      <h1 class="bg-green-300 text-lg/2 rounded-full pt-1 pb-1 pl-2 pr-2">Unfollow</h1>
  </div>
</div>`
select('.store').innerHTML = store
}

}

select(".store").addEventListener("click", function(event) {
  const unfollowButton = event.target.closest(".unfollow h1");
  if (unfollowButton) {
      const itemToRemove = unfollowButton.closest(".items");
      if (itemToRemove) {
          itemToRemove.remove();
          // Update the store content after removing the item
          store = select(".store").innerHTML;
      }
  }
});



cross.addEventListener('click',function(){
  animation()
  setData(curr-1)
  gsap.from(".bottomcontainer .element",{
    x:'100%',
    opacity:0,
    stagger:.1,
    ease:Circ,
    duration:1
  })
})

like.addEventListener('click',function(){
  console.log("current = ", curr)
  storeData(curr-2)
  animation()
  setData(curr-1)
  gsap.from(".bottomcontainer .element",{
    x:'100%',
    opacity:0,
    stagger:.1,
    ease:Circ,
    duration:1
  })
})

function storeAnimation(){
  gsap.from('.store',{
    x:"100%",
    opacity:1,
    ease:Circ,
    duration:0.4
  })
}
function minusAniation(){
  gsap.to('.minus',{
    rotate:180,
    opacity:1,
    ease:Circ,
    duration:0.4
  })
}
select('.chat i').addEventListener('click',function(){
  storeAnimation()
  minusAniation()
  select('.background').style.display = 'block'
  select('.minus').style.display = 'block'  
  select('.store').style.right = '0'
})
select('.minus').addEventListener('click',function(){
  select('.background').style.display = 'none'
  select('.store').style.right = '-100%'
  gsap.to('.minus',{
    rotate:-180,
    opacity:0,
    duration:.4
  })
})



 
