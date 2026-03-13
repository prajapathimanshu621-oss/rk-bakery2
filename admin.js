let cakes=JSON.parse(localStorage.getItem("cakes")) || []

function addCake(){

let name=document.getElementById("cakeName").value
let price=document.getElementById("cakePrice").value
let image=document.getElementById("cakeImage").value

cakes.push({name,price,image})

localStorage.setItem("cakes",JSON.stringify(cakes))

displayCakes()

}

function deleteCake(index){

cakes.splice(index,1)

localStorage.setItem("cakes",JSON.stringify(cakes))

displayCakes()

}

function displayCakes(){

let div=document.getElementById("adminCakes")

div.innerHTML=""

cakes.forEach((cake,i)=>{

div.innerHTML+=`

<div>

${cake.name} - ₹${cake.price}

<button onclick="deleteCake(${i})">
Delete
</button>

</div>

`

})

}

displayCakes()