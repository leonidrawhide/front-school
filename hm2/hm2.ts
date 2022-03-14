/**
 * 1 Задание - создаем Map и ключами от 0 до 100 и значениями null
 */

const mapOfNumbers = new Map<number, null>()
for (let i = 0; i <= 100; i++) mapOfNumbers.set(i, null)

console.log(mapOfNumbers)

/**
 * 2 Задание - проверяем соответствие ключей Map'ы условиям: 
 * делится на 3, на 5 и на оба числа
 */

mapOfNumbers.forEach((val, key) => {
	if (key != 0 && (key % 3 == 0 || key % 5 == 0)) {
		console.log(key % 3 != 0 ? `${key} делится на 5` : 
					key % 5 != 0 ? `${key} делится на 3` : 
					`${key} делится как на 3, так и на 5`)
	}
})

/**
 * 3 Задание - проверям список домов на соответствие условиям
 */

const listOfHouses: string[][] = [
	["36", "не приватизирован", "4 собственника", "Парковая"],
	["45", "приватизирован", "3 собственника", "Луговая"],
	["56", "не приватизирован", "1 собственник", "Луговая"],
	["56", "приватизирован", "5 собственников", "Ленина"],
	["25", "не приватизирован", "2 собственника", "Ленина"]
]

listOfHouses.forEach((house) => {
	const [area, street] = [+house[0], house[3]]
	console.log(checkHouse(area, street))
})

function checkHouse(area: number, street: string): boolean {
	return(area < 56 && area > 40 ? false : 
		area >= 56 || street == `Ленина` ? true : false)
}

// // =====party1======/
// const mapFor = new Map()

// for(let i = 0; i <= 100; i++){
//     mapFor.set(i, null)
// }

// //========party2=======//

// mapFor.forEach((value, key)=>{
//     console.log(value)
//     if(key % 3 === 0){
//         console.log(`${key} divaded the 3`)
//     }
//     if(key % 5 === 0){
//         console.log(`${key} oops here is 5`)
//     }else if(key % 3 === 0 && key % 5 === 0){
//         console.log(`${key} i can beelive that`);
//     }
// })

// //===========party3=========//

// const arr = [["36", "не приватизирован", "4 собственника", "Парковая"],
// ["45", "приватизирован", "3 собственника", "Луговая"],
// ["56", "не приватизирован", "1 собственник", "Луговая"],
// ["56", "приватизирован", "5 собственников", "Ленина"],
// ["25", "не приватизирован", "2 собственника", "Ленина"]]

// arr.forEach((item) => {
//     let numHome = Number(item[0])
//     let streetHome = item[3]
//     console.log(getHome(streetHome, numHome ))
// })

// function getHome(streetHome: string, numHome: number){
//     if ((numHome <= 40 && streetHome === "Ленина") || (numHome >= 56)) {
//         return true
//     }else{
//         return false
//     }
// }