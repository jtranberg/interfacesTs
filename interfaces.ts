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

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "doggie",
    bark() {
        return "woof WOOF!";
    },
};

interface ServiceDog extends Dog {                    //extend interface or multiple interface
    job: "drug sniffer" | "guide" | "bomb";
}

const chewy: ServiceDog = {
    name: "chuck",
    age: 5,
    breed: "hero",
    bark() {
        return "greatest";
          },
        job: "guide"
  }
  interface Human {
    name: string
  }

  interface Emplyee {
    readonly id: number,
    email: string,

  }

  interface Engineer extends Human, Emplyee {
    level: string,
    languages: string []
  }

  const pierre: Engineer = {
    name: "Pierre",
    id: 2254,
    email: "pierre@hotmail.ca",
    level: "beginer",
    languages: ["js", "python"],

   }  

  
