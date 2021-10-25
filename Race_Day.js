let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let age = 17;

if(early && age > 18){
  raceNumber += 1000
}

if(early && age > 18){
  console.log(`Race will begin at 9:30 and your race number is: ${raceNumber}.`);
} 
else if(!early && age > 18) {
console.log(`Race will begin at 11:00am and your race number is: ${raceNumber}.`)
}
else if(age < 18){
  console.log(`Race will begin at 12:30pm and your race number is: ${raceNumber}.`)
}
else{
  console.log("Please report to the registration desk for assistance.")
}