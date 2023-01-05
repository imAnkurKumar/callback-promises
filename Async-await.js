console.log('persone1 : shows ticket');
console.log('persone2 : shows ticket');

const preMovie = async() =>{

const promiseWifeBringingTicket = new Promise((resolve, reject) =>{
 setTimeout(()=>{
  // resolve('ticket')
  reject('ticket');

 },3000);
}) ;

const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
const addButter = new Promise ((resolve, reject) => resolve(`butter`)); 
const getColdDrink = new Promise((resolve, reject) => resolve(`cold Drink`));

let ticket
try{
 ticket = await promiseWifeBringingTicket;
}catch(e){
 ticket = 'sad face';
}

// let [Popcorn,Butter, ColdDrink] = await Promise.all([getPopcorn, addButter, getColdDrink]);

// console.log(`${Popcorn}, ${Butter}, ${ColdDrink}`);

// console.log(`wife: i've the ${ticket}`);
// console.log('we should go inside');
// console.log("wife : no i'm hungry");

// let popcorn = await getPopcorn;

// console.log(`husband i got some ${popcorn}`);
// console.log('husband: we should go inside');
// console.log('wife: i need some butter on my popcorn');

// let butter = await addButter;

// console.log(`husband: i got some ${butter} on popcorn`);
// console.log(`husband: anything else darling?`);
// console.log(`wife: I also need some colddrink`);

// let coldDrink = await getColdDrink;

// console.log(`husband i got some ${coldDrink}`);
// console.log(`Anything else`);
// console.log(`wife: no, lets go inside we are getting late`);
// console.log(`thank you`);


return ticket;

}
preMovie().then((m) => console.log(`person3 : shows ${m}`));
console.log('persone4 : shows ticket');
console.log('persone5 : shows ticket');


