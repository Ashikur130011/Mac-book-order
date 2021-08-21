// Memory price increse decrese events
document.getElementById('memory-8GB').addEventListener('click', function() {
    memoryVariation(0);
})
document.getElementById('memory-16GB').addEventListener('click', function() {
    memoryVariation(180);
})

// Storage
document.getElementById('SSD-256GB').addEventListener('click', function() {
    storageVariation(0);
})
document.getElementById('SSD-512GB').addEventListener('click', function() {
    storageVariation(100);
})
document.getElementById('SSD-1TB').addEventListener('click', function() {
    storageVariation(180);
})

//Delivery
document.getElementById('delivery-free').addEventListener('click', function() {
    deliveryCharge(0);
})
document.getElementById('delivery-charge').addEventListener('click', function() {
    deliveryCharge(20);
})


function memoryVariation(memoryPrice){
    const bestPrice = document.getElementById('best-price');
    const bestPriceValue = parseInt(bestPrice.innerText);

    const totalPrice = document.getElementById('total-price');
    const extraMemoryCost = document.getElementById('memory-cost');
    extraMemoryCost.innerText = memoryPrice;

    totalPrice.innerText = bestPriceValue + parseInt(extraMemoryCost.innerText);

    document.getElementById('total-amount').innerText = bestPriceValue + parseInt(extraMemoryCost.innerText);

    const extraStorageCost = document.getElementById('storage-cost');

    if(extraStorageCost.innerText == 100) {
        const extraStorage = extraStorageCost.innerText;
        totalPrice.innerText = bestPriceValue + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText);

        // Total
        const total = document.getElementById('total-amount');
        total.innerText = bestPriceValue + parseInt(extraStorage) + parseInt(extraMemoryCost.innerText);

    }
    else if(extraStorageCost.innerText == 180) {
        const extraStorage = extraStorageCost.innerText;

        totalPrice.innerText = bestPriceValue + parseInt(extraStorage) + parseInt(extraMemoryCost.innerText);

        // Total
        const total = document.getElementById('total-amount');
        total.innerText = bestPriceValue + parseInt(extraStorage) + parseInt(extraMemoryCost.innerText); 
    }

}

function storageVariation(storagePrice) {
    const bestPrice = document.getElementById('best-price');
    const bestPriceValue = parseInt(bestPrice.innerText);

    const totalPrice = document.getElementById('total-price');

    const extraStorageCost = document.getElementById('storage-cost');
    extraStorageCost.innerText = storagePrice;
    document.getElementById('total-amount').innerText = bestPriceValue + parseInt(extraStorageCost.innerText);

    const extraMemoryCost = document.getElementById('memory-cost');

    if(extraMemoryCost.innerText == 180) {
        const extraMemory = extraMemoryCost.innerText;

        totalPrice.innerText = bestPriceValue + parseInt(extraMemory) + parseInt(extraMemoryCost.innerText);

        // Total
        const total = document.getElementById('total-amount');
        total.innerText = bestPriceValue + parseInt(extraMemory) + parseInt(extraMemoryCost.innerText);
    }
     if(extraStorageCost.innerText == 100){
        const extraMemory = extraMemoryCost.innerText;

        totalPrice.innerText = bestPriceValue + parseInt(extraStorageCost.innerText);

        // Total
        const total = document.getElementById('total-amount');
        total.innerText =bestPriceValue + parseInt(extraStorageCost.innerText);
    }
}

// Delivery Cost
function deliveryCharge(charge) {
    const deliveryCharge = document.getElementById('delivery-cost');
    deliveryCharge.innerText = charge;

    if(deliveryCharge.innerText ==charge) {
        const bestPrice = document.getElementById('best-price');
        const bestPriceValue = parseInt(bestPrice.innerText);
        const totalPrice = document.getElementById('total-price');

        const extraStorageCost = document.getElementById('storage-cost');
        const extraMemoryCost = document.getElementById('memory-cost');
    
     if(bestPrice.innerText == 1299) {
        totalPrice.innerText = parseInt(bestPrice.innerText) + charge;
    }
     if(extraMemoryCost.innerText == 180){
        const extraMemory = extraMemoryCost.innerText;
        const memoryValue = bestPriceValue + parseInt(extraMemory);
        totalPrice.innerText = memoryValue + charge;
        document.getElementById('total-amount').innerText = memoryValue + charge;

    }
     if(extraStorageCost.innerText == 100){
        const extraMemory = extraMemoryCost.innerText;
        const memoryValue = bestPriceValue + parseInt(extraMemory);
        totalPrice.innerText =  memoryValue  + parseInt(extraStorageCost.innerText) + charge;
        const total = document.getElementById('total-amount');
        total.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText)) + charge;
    }
     if(bestPrice.innerText == 1299 && extraMemoryCost.innerText == 180 && extraStorageCost.innerText == 100) {
        totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText)+charge;

        const total = document.getElementById('total-amount');
        total.innerText = bestPriceValue + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText) + charge;
    }
     if(bestPrice.innerText == 1299 && extraMemoryCost.innerText == 180 && extraStorageCost.innerText == 180) {
        totalPrice.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText)) + charge;

        const total = document.getElementById('total-amount');
        total.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText)) + charge;
    }

     // Promo code matcher

  /*   document.getElementById('apply-button').addEventListener('click', function(){
        getInputValue();
    })

    function getInputValue() {

        const codeMatcher = document.getElementById('promo-code');
        if(codeMatcher.value == 'stevekaku') {
            const totalPrice = document.getElementsById('total-price');
            const totalAmount = document.getElementById('total-amount');
            const totalValue = parseFloat(totalPrice.innerText);
            totalAmount.innerText = totalValue * .2;
        }
    } */
    
   /*  else{
        const bestPrice = document.addEventListener('best-price');
        const bestPriceValue = parseInt(bestPrice.innerText);
        const totalPrice = document.getElementById('total-price');

        const extraStorageCost = document.getElementById('storage-cost')
        const extraMemoryCost = document.getElementById('memory-cost')

        if(bestPrice.innerText == 1299) {
            totalPrice.innerText = parseInt(bestPrice.innerText);
        }
        if(extraMemoryCost.innerText == 180){
            const extraMemory = extraMemoryCost.innerText;
            const memoryValue = bestPriceValue + parseInt(extraMemory);
            totalPrice.innerText = memoryValue + charge;
            document.getElementById('total-amount') = memoryValue;
    
        }
        if(extraStorageCost.innerText == 100 || extraStorageCost.innerText == 180){
            totalPrice.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText));
            const total = document.getElementById('total-amount');
            total.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText)) + charge;
        }
        if(bestPrice.innerText == 1299 && extraMemoryCost.innerText == 180 && extraStorageCost.innerText == 100) {
            totalPrice.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText));
    
            const total = document.getElementById('total-amount');
            total.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText));
        }
        if(bestPrice.innerText == 1299 && extraMemoryCost.innerText == 180 && extraStorageCost.innerText == 180) {
            totalPrice.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText));
    
            const total = document.getElementById('total-amount');
            total.innerText = (bestPriceValue + parseInt(extraStorageCost.innerText) + parseInt(extraMemoryCost.innerText));
        }
    } */
}
}