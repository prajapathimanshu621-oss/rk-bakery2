let cakes=[]
for(let i=1;i<=120;i++){
cakes.push({name:"Cake "+i,price:200+i})
}

let cart=[]

function displayCakes(){
let list=document.getElementById("cake-list")
cakes.forEach((cake,index)=>{
let div=document.createElement("div")
div.className="cake"

div.innerHTML=`
<h3>${cake.name}</h3>
<p>₹${cake.price}</p>
<button onclick="addToCart(${index})">Add to Cart</button>
`

list.appendChild(div)
})
}

function addToCart(index){
cart.push(cakes[index])
updateCart()
}

function removeFromCart(index){
cart.splice(index,1)
updateCart()
}

function updateCart(){
let cartDiv=document.getElementById("cart")
cartDiv.innerHTML=""

cart.forEach((item,i)=>{
let div=document.createElement("div")

div.innerHTML=`
${item.name} - ₹${item.price}
<button onclick="removeFromCart(${i})">Remove</button>
`

cartDiv.appendChild(div)
})
}

displayCakes()