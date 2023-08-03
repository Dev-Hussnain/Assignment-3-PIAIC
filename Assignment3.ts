//Task 02
let Name: string = "Hello Eric, would you like to learn python"; //we sres sentence in variable name which is a string
console.log(Name); //in this command we say that print th abve variable in consle
//================================================================================
//Task 03
let namE: string = "Hussnain";
let lowercase = namE.toLowerCase();
console.log(lowercase)
let uppercase = namE.toUpperCase()
console.log(uppercase)
function titleCase(val:string) {
     let value  = val.toLowerCase().split(' ')
    for (let i = 0; i < val.length; i++) {
        value[i] = val[i].charAt(0).toUpperCase() + val[i].slice(1)
    }
    return value.join(' ')    
}
let me = titleCase("i am a boy")
console.log(me)
//==================================================================================
//Task 04
let famous_qoute: string = 'As Albert Enistien once said,"A person who never made a mistake never tried anything"' // In this we had stored a qoute in variable which is string
console.log(famous_qoute)// In this line of code we told it to print the above variable in console
//===================================================================================
//Task 05
let famous_Person: string = "As Albert Enistien once said,"
let qoute: string = '"A person who never made a mistake never tried anything"'
let message = famous_Person + qoute;
console.log(message)
//====================================================================================
//Task06
let nAme: string = "\t\thussnain\n" 
console.log(nAme.trim())
//===================================================================================
//Task 07 and 08
let add = 5+3;
let subtract = 11-3;
let divide = 4*2;
let multiply = 16/2;

console.log(add)
console.log(subtract)
console.log(divide)
console.log(multiply)
//===================================================================================
//Task 09
let fav_Num: number = 7;
let Message = fav_Num;
console.log(Message)
//===================================================================================
//Task 10
// Comments are written in programming languages so that i sould not be a problem to find a specific program or code the deeloper has written
// comments can be wriiten as (//) this is used for single line and (/* hussnian */) this syntax is for multiple line
// commented programmes are task 2 and 4
//==================================================================================
//Task 11
let frinds = ["Hussnian","Bilal","Zain"]
for (let i = 0; i < frinds.length; i++) {
    console.log(frinds[i])
}
//===================================================================================
//Task 12
let greetings:string = "You Are Welcome";
for (let i = 0; i < frinds.length; i++) {
    console.log(`${frinds[i]},`+greetings)
}
//=====================================================================================
//Task 13
let ownArray = ["Honda", "Suzuki", "Land Cuiser"]
for (let i = 0; i < ownArray.length; i++) {
    console.log(`Latest Versin Of ${ownArray[i]} is the best car`)
}
//=========================================================================================
//Task 14
let invitePople:Array<string> = ["Hussain","Ibrahim","Bilal"]
console.log(invitePople[0]+", "+"Today night we are gooing to have a big dinner and you are invited.")
console.log(invitePople[1]+", "+"Today night we are gooing to have a big dinner and you are invited.")
console.log(invitePople[2]+", "+"Today night we are gooing to have a big dinner and you are invited.")
//=========================================================================================
//Task 15
let modifiedList = invitePople.splice(1,1,"Zain")
console.log(modifiedList)
console.log(invitePople)
console.log(invitePople[0]+", "+"Today night we are gooing to have a big dinner and you are invited.")
console.log(invitePople[1]+", "+"Today night we are gooing to have a big dinner and you are invited.")
console.log(invitePople[2]+", "+"Today night we are gooing to have a big dinner and you are invited.")
//=========================================================================================
//Task 16
for (const guests of invitePople) {
    console.log(`${guests} , we had found a biiger table for dinner so the party is going to be rocking because i am inviting more friends`)
}


let addBefor = invitePople.push("Abul Wahab")
let addInMid = invitePople.splice(0,0,"Amirb")
let addAfter = invitePople.splice(2,0,"Irtaza")

for (const people of invitePople) {
    console.log(`${people} , you are invitedto our rocking party tonmight`)
}
//=========================================================================================
//Task 17
for (const cancel of invitePople) {
    console.log(`${cancel}, we are sorry but we had just onne table on which two people can sit`)
}

let removingGuests = invitePople.splice(1,4)
console.log(invitePople)

for (const newGuests of invitePople) {
    console.log(`${newGuests}, you are still invited to our party`)
}

let removeAll = invitePople.splice(0,2)
console.log(invitePople)
//=========================================================================================
//Task 18
let placeToVisit = [
    "Arab",
    "US",
    "Dubai",
    "Bombay",
    "Japan"
]
console.log(placeToVisit)
console.log(placeToVisit.sort())
console.log(placeToVisit)
console.log(placeToVisit.sort().reverse())
console.log(placeToVisit)
console.log(placeToVisit.reverse())
console.log(placeToVisit)
console.log(placeToVisit.reverse())
console.log(placeToVisit)
console.log(placeToVisit.sort())
console.log(placeToVisit)
console.log(placeToVisit.sort())
//========================================================================================= 
//Task 19
let in_num = invitePople.length
function i_print() {
    console.log(`The ${in_num} are invited to party`)
}
//========================================================================================= 
//Task 20
let favLanguages = ["Javascript", "Python", "CSS"]
console.log(favLanguages)
//========================================================================================= 
//Task 21
let objPractice : { name:string , age:number , city:string } = {
    name : "Hussnain",
    age :15,
    city: "Islamabd"
}

console.log(objPractice)
//========================================================================================= 
//Task 22
/* I had recived many error while running mine codes like i am a Javascript developer and i learned this by myself so it was easy because mine concepts was clear but yes first i donot know tha while assinging variables in typescript we have to also write its type and many other things.*/
//=========================================================================================
//Task 23
let car  = "subaru"

console.log("Is subaru == subaru? | I pridict True")
console.log(car == "subaru")
console.log("Is subaru === Subaru? | I pridict False")
console.log(car === "Subaru")
console.log("Is subaru >= 6? | I pridict True")
console.log(car.length >= 6)
console.log("Is subaru < 6? | I pridict False")
console.log(car.length < 6)
console.log("Is subaru != honda? | I pridict True")
console.log(car != "honda")
console.log("Is subaru == honda? | I pridict False")
console.log(car == "honda")
console.log("Is subaru != suzuki? | I pridict True")
console.log(car != "suzuki")
console.log("Is subaru == suzuki? | I pridict False")
console.log(car == "suzuki")
console.log("Is subaru > 5? | I pridict True")
console.log(car.length > 5)
console.log("Is subaru !< 5? | I pridict False")
console.log(car.length !< 5)
//=========================================================================================
//Task 24
//first
let nameOf = String

//(first way)

if (nameOf == String) {
    console.log("This is a String")
} else {
    console.log("This is not a String")
}

//second way

console.log(nameOf == String)

//second
let test2 = "Hussnian"

console.log(test2 === "hussnian")

//third
let num = 10;

console.log(num > 5)
console.log(num < 5)
console.log(num >= 5)
console.log(num <= 5)

//fourth

let andTest = 10

if (andTest<9 && andTest>11) {
    console.log("Both are true")
} else {
    console.log("Only one statement is true or both are false")
}

if (andTest<9 || andTest<11) {
    console.log("One of given satement or Both are true")
} else {
    console.log("Incorrect input")
}


let Arraytest = ["Apple","Banana","Orange","Pinaple"]

if (Arraytest.includes("banana")) {
    console.log("We have this item")
} else {
    console.log("We are very sorry this item is out of stock")
}
//=========================================================================================
//Task 25
let alienColor = "green"

if (alienColor == "blue") {
    console.log("The player just earned 5 points.")
}
//=========================================================================================
//Task 26
let alienColor2 = "green"

if (alienColor2 === "green") {
    console.log("The player just earned 5 points for shooting the alien.")
} else {
    console.log("The Alien is not dead")
}
//=========================================================================================
//Task 27
let alienColor3 = "red"

if (alienColor3 === "green") {
    console.log("The player just earned 5 points for shooting the alien.")
} else {
    console.log("The player just earned 10 points.")
}


let alienColor4 = "yellow"

if (alienColor4 === "green") {
    console.log("The player just earned 5 points for shooting the alien.")
} else if (alienColor4 === "red") {
    console.log("The player earned 15 points.")
} else {
    console.log("The player earned 10 points.")
}

let alienColor5 = "red"

if (alienColor5 === "green") {
    console.log("The player just earned 5 points for shooting the alien.")
} else if (alienColor5 === "red") {
    console.log("The player earned 15 points.")
} else {
    console.log("The player earned 10 points.")
}

let alienColor6 = "green"

if (alienColor6 === "green") {
    console.log("The player just earned 5 points for shooting the alien.")
} else if (alienColor6 === "red") {
    console.log("The player earned 15 points.")
} else {
    console.log("The player earned 10 points.")
}
//=========================================================================================
//Task 28
let age = 67

if (age < 2) {
    console.log("The person is a baby.")
} else if ( age < 4) {
    console.log("The person is a toddler.")
} else if (age < 13) {
    console.log("The person is kid.")
} else if (age < 20) {
    console.log("The person is a teennager.")
} else if (age < 65) {
    console.log("The person is an adult")
} else {
    console.log("The person is an elder.")
}
//=========================================================================================
//Task 29
let favourite_fruits = ["banana","apple","orange"]

if (favourite_fruits[0] == "banana") {
    console.log("You really like banana")
}
if (favourite_fruits[1] == "apple") {
    console.log("You really like apple")
}
if (favourite_fruits[2] == "orange") {
    console.log("You really like orange")
}
if (favourite_fruits[0] != "Banana") {
    console.log("Do You really not like banana")
}
if (favourite_fruits[1] != "Apple") {
    console.log("Do You really not like apple")
}
//=========================================================================================
//Task 30
let usernames = ["Admin","Hussnain","Bilal","Zain","Abdul Wahab"]

for (let i = 0; i < usernames.length; i++) {
   if (usernames[i] === "Admin") {
     console.log(`Hello ${usernames[i]}!,would you like to see a status report?`)
   } else {
     console.log(`Hello ${usernames[i]}!, thank you for logging in again.`)
   }
}
//=========================================================================================
//Task 31
let removeUser= usernames.splice(0,5)
if (usernames = []) {
    console.log("We need to find some users!")
}
//=========================================================================================
//Task 32
let current_users: string[] = ["Admin", "Hussnain", "Bilal", "Zain", "Abdul Wahab"];
let new_users: string[] = ["Hussnain", "John", "Jane", "Ahmed", "Ali"];

for (let i = 0; i < new_users.length; i++) {
    let usernameExists = false;

    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true
            break;
        }
    }

    if (usernameExists) {
        console.log("You will need to enter a new username.")
    } else {
        console.log("Congratulations! Username is available.")
    }
}
//=========================================================================================
//Task 33
let ordinal_Numbers = [1,2,3,4,5,6,7,8,9]
for (const number of ordinal_Numbers) {
    let ordinalEnding :string;
    if (number === 1 ) {
        ordinalEnding = "st"
    } else if (number === 2 ) {
        ordinalEnding = "nd"
    } else if (number === 3 ) {
        ordinalEnding = "rd"
    } else {
        ordinalEnding = "th"
    }

    console.log(`${number}${ordinalEnding}`)
}
//=========================================================================================
//Task 34
const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (const pizza of favoritePizzas) {
    console.log(`The ${pizza} is my favourite pizza`)
}
console.log("I like pizzas very much")
//=========================================================================================
//Task 35
let animals = ["Loin","Leopard","Cat"]
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}
for (let i = 0; i < animals.length; i++) {
    console.log(`Wild ${animals[i]}, are so dangerous.`)
}
console.log(`These all animals ${animals} are common in shape`)
//=========================================================================================
//Task 36
function make_shirt(size:number,message:string): void {
    console.log(`Size: ${size} , Message : ${message}`)
}

make_shirt(23,"Hello World")
//=========================================================================================
//Task 37
function make_shirt2(size:string =  "45", message :string = "I Love Typescript") {
    console.log(`Size: ${size} , Message : ${message}`)
}
make_shirt2()
make_shirt2("L","I Love typescript")
make_shirt2("M","I Love typescript")
make_shirt2("S","I Love Coding")
//=========================================================================================
//Task 38
function describe_cities(city:string = "Karachi", country:string = "Pakistan"): void {
    console.log(`${city} is in ${country}`)
}
describe_cities()
describe_cities("New York","United States of America")
describe_cities("New Dehli","India")
describe_cities("Madina","Saudia Arabia")
//=========================================================================================
//Task 39
function city_country(city:string = "Islamabad", country:string = "Pakistan") {
    console.log(`${city}, ${country}`)
}
city_country()
city_country("New York","United States of America")
city_country("New Dehli","India")
city_country("Madina","Saudia Arabia")
//=========================================================================================
//Task 40
function make_album(song:string = "Jaanam Fida-E-Haideri", artist:string = "Sadiq Hussain", noOfTract:number = 12) {
    console.log(`The Kawali ${song} is singed by ${artist} and has ${noOfTract} No of Tracts`)
}
make_album()
make_album("Shah-e-Mardan Ali","Nusrat Fateh Ali Khan",14)
//=========================================================================================
//Task 41
let magicians = ["Harry Houdini","David Copperfield","Penn & Teller"]
function show_magician() {
    for (const magician of magicians) {
        console.log(`${magician}`)
    }
}
show_magician()
//=========================================================================================
//Task 42
function make_great() {
    for (const magician of magicians) {
        console.log(`The Great Magician ${magician}`)
    }
}
make_great()
//=========================================================================================
//Task 43
function make_great2() {
    for (const magician of magicians) {
        console.log(`The Great Magician ${magician}, ${magician}`)
    }
}
make_great2()
//=========================================================================================
//Task 44
function make_sandwich(...items : string[]):void {
    console.log("----------")
    console.log("Bread")
    for (const item of items) {
          console.log(item)
    }
    console.log("Bread")
    console.log("----------")
}
make_sandwich("Cheese", "Tomato", "Lettuce");
make_sandwich("Ham", "Mustard");
make_sandwich("Turkey", "Cucumber", "Mayonnaise", "Onion");
//=========================================================================================
//Task 45
function manufacture_Car(manufacturer:string = "", model :string = "", color :string = ""):void {
    console.log(manufacturer)
    console.log(model)
    console.log(color)
    console.log("------------------")
}
manufacture_Car("Honda","AKJ575u123", "red")
manufacture_Car("Honda","AKJ575u123")