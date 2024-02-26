function isEnoughCapacity(products, containerSize) {
    let sum = 0;
    const arrProd = Object.values(products);
    for (const key in products) {
        if (products.hasOwnProperty(key)) {
            sum += products[key];
        }
    }
    if (sum > containerSize) {
    return false
    } else {
        return true
    }
}

isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
);
isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
);
isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
);
isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
);


// Хотів би отримати фід бек як можна було б спростити данну задачу, заздалегіть дякую!