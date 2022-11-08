var pt = { x: 123, y: 321 };
var thomas = {
    id: 0,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: function () {
        return "Hello!";
    }
};
thomas.first = "human";
var shoes = {
    name: "blue",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(.4));
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "doggie",
    bark: function () {
        return "woof WOOF!";
    }
};
var chewy = {
    name: "chuck",
    age: 5,
    breed: "hero",
    bark: function () {
        return "greatest";
    },
    job: "guide"
};
var pierre = {
    name: "Pierre",
    id: 2254,
    email: "pierre@hotmail.ca",
    level: "beginer",
    languages: ["js", "python"]
};
