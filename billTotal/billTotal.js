function billTotal(subtotal) {
  
  return subtotal * (1+0.15+0.095)
}

billTotal(10.00); // => 12.45