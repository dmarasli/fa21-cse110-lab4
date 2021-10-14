function discountPrices(prices, discount){
    let discounted = [];
    let finalPrice = 0;

    for (let i = 0; i < prices.length; i++){

        let discountedPrice = prices[i] * (1 - discount);
        // console.log(discountedPrice * 100);
        // console.log(Math.round(discountedPrice * 100));
        // console.log(Math.round(discountedPrice * 100) / 100);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log(discounted[0],discounted[1], discounted[2] );

    return discounted;

}

discountPrices([100, 200, 300], 0.5);