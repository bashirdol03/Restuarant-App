
import { menuArray } from './data.js';

const mainEl = document.getElementById('main')
const orderSectionEl = document.getElementById('order-section')
const orderDetailsEl = document.getElementById('order-details')
const orderTotalEl = document.getElementById('order-total')
const checkoutFormEl = document.getElementById('checkout-form')



checkoutFormEl.addEventListener('submit',function(e){
    e.preventDefault()
    checkoutFormEl.classList.add('hide-form')

    const paymentFormData = new FormData(checkoutFormEl)
    const customerName = paymentFormData.get('name')
    orderSectionEl.innerHTML = `<div class="thanks-section">
    <p>Thank you ${customerName}, your order is on the way</p>
</div>`
})

document.addEventListener("click",function(e){
    if(e.target.dataset.pizza){
        
        orderSectionEl.classList.remove('hide')
        console.log(e.target.dataset.pizza)
        getOrder(e.target.dataset.pizza)
        
    } 
    else if(e.target.dataset.hamburger){
        
        orderSectionEl.classList.remove('hide')
         console.log(e.target.dataset.hamburger)
         getOrder(e.target.dataset.hamburger)
        
    } 
    else if(e.target.dataset.beer){
        
        orderSectionEl.classList.remove('hide')
        console.log(e.target.dataset.beer)
        getOrder(e.target.dataset.beer)
        
    }
    else if(e.target.id === "remove-btn"){
            console.log(e.target.className)
            removeAnOrder(e.target.className) 
        
    }
    else if(e.target.id === "complete-btn"){
        console.log(e.target.id)
        checkoutFormEl.classList.remove('hide-form')
    }
    else if(e.target.id === "close-form-btn"){
        console.log(e.target.id)
        checkoutFormEl.classList.add('hide-form')
         

    
    
}
})


let arrayOfOrders = []




function getOrder(orderId) {
    let foodItem = (menuArray[orderId])
    console.log(foodItem.price)
    console.log(orderId)

    
    arrayOfOrders.push(foodItem)
    console.log(arrayOfOrders) 

    
    renderOrderDetailsSection()
    return foodItem

}


function removeAnOrder(foodId){


    console.log('removing an order')
    const updatedArray = arrayOfOrders.filter(function(foodItem){
         return foodItem.name !== foodId
    })
    
      /* HAVENT FIGURED OUT HOW TO REMOVE AN INDIVIDUAL ITEM,
            I DONT WANT TO WASTE TOO MUCH TIME ON THIS I WILL FIGURE THIS OUT ONE DAY
            AND COME BACK AND FIX THIS
         */

    arrayOfOrders = updatedArray

    console.log(arrayOfOrders)
    console.log(updatedArray)

    renderOrderDetailsSection()



}


function renderOrderDetailsSection(){
    
    

    let feedHtml = ` `
    arrayOfOrders.forEach(function(foodItem){

    feedHtml +=  `

    
        
    <p>${foodItem.name} <button id="remove-btn" class="${foodItem.name}">remove all ${foodItem.name}'s</button> <span class="shift-right">$${foodItem.price}</span> </p>
    
    `
         /* HAVENT FIGURED OUT HOW TO REMOVE AN INDIVIDUAL ITEM,
            I DONT WANT TO WASTE TOO MUCH TIME ON THIS I WILL FIGURE THIS OUT ONE DAY
            AND COME BACK AND FIX THIS
         */
    })

   orderDetailsEl.innerHTML = feedHtml
   renderOrderTotalSection()
   


}


function renderOrderTotalSection(){
    
    

    let Total = 0
    arrayOfOrders.forEach(function(foodItem){

    Total +=  foodItem.price
    

                


    })
    

   orderTotalEl.innerHTML = `    
   <p class="grey-line">Total price: <span class="shift-right">$${Total}</span></span></p>
   
   `

   


}



function render() {

        let feedHtml = ` `
        menuArray.forEach(function(food){

        feedHtml += `
        <div class="container">
        <div class="food-icon">${food.emoji}</div>
        <div class="item-details">
            <h4>${food.name}</h4>
            <p class="grey">${food.ingredients}</p>
            <p>$${food.price}</p>
        </div>
        <div class="item-btn"><button id="${food.name}-btn" data-${food.name}="${food.id}">➕</button></div>
        </div>  

                    ` 


        })


        mainEl.innerHTML = feedHtml
        

}

render()
