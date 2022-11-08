interface Point {
    x: number;
    y: number;
}

const pt: Point = {x:123, y:321};

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string      //optional
   // sayHi: () => string;
   sayHi(): string
}


const thomas: Person = {
    id:0, 
    first: "Thomas", 
    last: "Hardy", 
    nickname: "Tom",
    sayHi: () => {
        return "Hello!";
    },
};

thomas.first = "human"
//thomas.id = 616516      //read only

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "blue",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};

console.log(shoes.applyDiscount(.4));


