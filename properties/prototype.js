let fruits = ['mangoes','lemons','avocados'];

Array.prototype.toUCase = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i][0].toUpperCase() + this[i].slice(1);
    }
};

//we execute the operation on our array
fruits.toUCase();

console.log(fruits);