//1.
// const player = {
//   name: 'Kyle',
//   club: 'None',
//   address: {
//     city: 'La'
//   }
// }
// console.log(player.address.city)

// const { name, club, address: {city}} = player
// console.log(name, club, city) //destructuring

// console.log(`${name} lives in ${city}!`) //template listeral

//challenge

// const student = {
//   name: 'Kyle',
//   age: 24,
//   projects: {
//     diceGame: 'Two player dice game using Javascript.'
//   }
// }

// const {name, age, projects:{diceGame}} = student
// console.log(`${name}은 ${age}살이고 다이스게임(${diceGame})을 만들고 있습니다.`)

// let [firstName, middleName, LastName] = ['Dylan', 'Coding God', 'Isreal']
// LastName = "Clements"
// console.log(LastName)

//2.
// function addressMaker(city, state) {
//   const newAddress = {city: city, state: state}
//   console.log(newAddress)
// }
// addressMaker("Austin", "Texas")

// //challenge

// function addressMaker2(address) {
//   const {city, state} = address
//   const newAddress2 = {
//     city,
//     state,
//     country: 'United States'
//   }
//   console.log(newAddress2.city, newAddress2.state, newAddress2.country)
// }
// addressMaker2({city: 'Austin', state: 'Texas'})

//3.
// let imcomes = [3500, 3700, 4000]
// let total = 0

// for (const imcome of imcomes) {
//   console.log(imcome)
//   total += imcome
// }
// console.log(total)

// let fullName = 'Dylan Coding God Isreal'
// for (const char of fullName) {
//   console.log(char)
// }

// //challenge

// const student = [
//   {name: 'John', city: 'New York' },
//   {name: 'Peter', city: 'Paris' },
//   {name: 'Kate', city: 'Sidney'}
// ]
// //Tom lives in Lisbon
// for (const a of student) {
//   console.log(`${a.name} live in ${a.city}`)
// }

// let contacts = ["Mary", "Joel", "Danny"]
// let personalFriends = ["David", ...contacts,"Lily"]
// console.log(personalFriends)

// contacts.push("Jhon")
// console.log(personalFriends)

// let person = {
//   name: 'Adam',
//   age: 25,
//   city: 'Manchester'
// }

// let employee = {
//   ...person,
//   salary: 50000,
//   position: "SoftWare Developer"
// }

// console.log(employee)

// //challenge
// const shoppingList = ['eggs', 'milk', 'butter']
// const actualList = ['cigarrete', 'Liquor', 'beer', ...shoppingList]

//5. multiple arguments
// function fnc(nums, num2) {
//   console.log(nums, num2)
// }
// fnc(4, 5)

// function fnc2(...nums) {
//   console.log(nums)
// }
// fnc2(4, 5, 6, 7)

// function fnc3(nums) {
//   console.log(arguments)
// }
// fnc3(4, 5, 6, 7, 8)

// //anonymous function
// const lunchMenu = function() {
//   return "I'm going to eat pizza for lunch"
// }
// //arrow function
// const dinnerMenu = () => {
//   return "I'm going to eat pizza for dinner"
// }
// console.log(dinnerMenu() )

// const dinnerMenu2 = () => "I'm going to eat pizza for dinner"
// console.log(dinnerMenu2())

// const dinnerMenu3 = (food) => `I'm going to eat ${food} for dinner`
// console.log(dinnerMenu3('chicken'))

// const dinnerMenu4 = food => `T'm going to eat a ${food} for dinner`
// console.log(dinnerMenu4('raw tuna'))

// const dinnerMenu5 = (food = 'burger') => `I'm going to eat a ${food} for dinner`
// console.log(dinnerMenu5())

//challenge
//arrow funtion으로 만들기 함수
//패러미트와 초기값이 있는 함수

// const morning = (food = 'milk') => `I'm going to eat a ${food} for morning`
// console.log(morning())

//6. include
let numArray = [1, 2, 3, 4, 5];
console.log(numArray.includes(7));

//7. var vs let vs const
if (false) {
  var example = 5;
  let example2 = 6;
}
console.log(example);

const example3 = 5;
// example3 = 7
console.log(example3);

const example4 = [];
example4.push(3);
console.log(example4);

const example5 = [];
example5.firstName = "Dylan";
console.log(example5);
