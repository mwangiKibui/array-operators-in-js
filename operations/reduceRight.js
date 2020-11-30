let fruits = ['mangoes','lemons','bananas'];

let reduced_right = fruits.reduceRight((fruit_a,fruit_b) => fruit_a + fruit_b,'');

console.log(reduced_right);