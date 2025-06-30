class Animal{
    #name
    
    static Count = 0;
    constructor(name,age){
        this.#name = name;
        this.age = age;
        Animal.Count ++;
    }

    static getName(ob){ return ob.#name;}

    eating(){
        console.log('Eating is done & Energy up!')
    }
}

class Cat extends Animal{
    constructor(name,age){
        super(name,age)
        this.vaccinated= true;
    }

    moewing(){
        console.log('I am Happy Sound .....!')
    }
    eating(){
        console.log('Cat is drinking Milk...')
    }

}

class Dog extends Animal{
    parking(){
        console.log('I am Happy Sound .....!')
    }

}



let pusy = new Cat('pusy',10);
console.log(Animal.Count);
console.log(Animal.getName(pusy));
console.log(pusy.age);
console.log(pusy.vaccinated);
pusy.eating()
pusy.moewing()
let doggy = new Dog('Doggy');
console.log(Animal.Count);
console.log(Animal.getName(doggy));
doggy.eating()
doggy.parking();

let x = new Animal();
console.log(Animal.Count);

console.log(x.Count)