import { data } from "./exmaple";
import { add } from "./add";
import { Animal, Cat } from "./Animal";
let updatedData = data;
updatedData.push(5);
console.log(updatedData);

//challenge
console.log(add(1, 1));

const Dog = new Animal("Dog", 4);
const cat = new Cat("Cat", 4);

Dog.makeNoise();
cat.makeNoise();

console.log(Animal.return10());
console.log(Dog.metaData);
console.log(cat.metaData);
