(function() {
	
document.getElementById("cart-info").addEventListener("click", function() {
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
  console.log(cart);
});

})();

(function(){

const addItemTOCartBtn=document.querySelectorAll(".store-item-icon");
//console.log(addItemTOCartBtn);

addItemTOCartBtn.forEach(function(btn){
 
 btn.addEventListener('click',function(event){

 	//console.log(event.target);
 	if(event.target.parentElement.classList.contains("store-item-icon"))
 	{
 		let fullPath=event.target.parentElement.previousElementSibling.src;
 		let pos=fullPath.indexOf("img")+3;
 		//console.log(pos);
 		let partPath=fullPath.slice(pos);
 		//console.log(partPath);
 	    const item={};
 	    item.img=`img-cart${partPath}`;
 	    //console.log(item.img);

 	    let name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
 	    //console.log(name);
 	    item.name=name;
 	    let price=event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
 	    //console.log(price);
 	    price=price.replace("Rs. ","");
 	    //console.log(price);
 	    item.price=price;

 	    createCart=document.createElement("div");
 	    createCart.classList.add("cart-item", "d-flex", "justify-content-around", "text-capitalize", "my-3");
 	    createCart.innerHTML=`<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
              <p class="font-weight-bold mb-0 py-1" id="cart-item-title">${item.name}</p>
            
              <span>Rs.</span>
              <span class="cart-item-price" id="cart-item-price">${item.price}</span>
            </div>
              <a href="#" class="cart-item-delete" id="cart-item-delete">
                <i class="fa fa-trash"></i>
              </a></div>`;

        const cart=document.getElementById("cart");
        const cartTotal=document.querySelector(".cart-total-container");
        cart.insertBefore(createCart,cartTotal);
        alert("The item has been added in the cart");
        showTotal();



 	}
 });

});

function showTotal(){

	const total=[];
	const items=document.querySelectorAll(".cart-item-price");

	items.forEach(function(item){
		total.push(parseFloat(item.textContent));

	});
	//console.log(total);
	const totalMoney=total.reduce(function(total,item){

			total+=item;
			return total;

	},0);

	const finalMoney=totalMoney.toFixed(2);
	document.getElementById("cart-total").textContent=finalMoney;
	document.getElementById("item-total").textContent=finalMoney;
	document.getElementById("item-count").textContent=total.length;
	clearCart=document.getElementById("clear-cart")
	clearCart.style.display="block";
	checkOut=document.getElementById("check-out")
	checkOut.style.display="block";






	//console.log(totalMoney);

}

})();


