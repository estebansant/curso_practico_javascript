// const originalPrice = 100;
// const discount = 15;

const calculatePriceWithDiscount = (price, discount) => price - (price * (discount/100));

function calculateDiscountPrice(){
    const price = document.getElementById("originalPrice");
    const priceValue = price.value;
    const discount = document.getElementById("discount");
    const discountValue = discount.value;

    const totalPrice = calculatePriceWithDiscount(priceValue, discountValue);
    const write = document.getElementById("result");
    result.innerHTML = `The price of the product with the discount is ${totalPrice}$`;
}