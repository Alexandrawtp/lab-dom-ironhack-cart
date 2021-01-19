// ITERATION 1

function updateSubtotal(product) {
  let unitPrice = product.querySelector('.price span').innerText;
  console.log(unitPrice);
  let quantity = product.querySelector('.quantity input');
  console.log(quantity.value);
  let subtotal = product.querySelector('.subtotal span');
  console.log(subtotal);
  console.log('Calculating subtotal, yey!');

  let tot = unitPrice * quantity.value;
  subtotal.innerHTML = tot;
  console.log(tot);
  return tot;
}

function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  console.log(products);
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products.item(i));
  }
  // ITERATION 3
  let result = document.querySelector('#total-value span');
  console.log(result);
  result.innerHTML = total
  return total;
}

// ITERATION 4
function removeProduct(event) {
  console.log("remove was called!");
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let product = document.querySelector('.product')
  updateSubtotal(product)

  let buttons = document.getElementsByClassName('btn-remove')
  for (let i=0; i<buttons.length; i++) {
    console.log(buttons, "hello");
    buttons.item(i).addEventListener('click', removeProduct(buttons.item(i)));
  }

});
