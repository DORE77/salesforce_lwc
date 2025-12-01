//do{
  //  console.log('happy')
//}while(1===2) 

//myarr = {
    //fname : "d",
   // lname : "r"
//}
//for(let [nhuij,i] of Object.entries(myarr)){
   // console.log(nhuij,i)
//}
//initiating values in map at the time of declaration 
//let m = new Map([
  //[1,50],["ds",50]
//])
//for(let a of m){
 // console.log(a)
//}

//let seto = new Set( [1,"olololol",45677 , 1])
//console.log(seto)

const game = {
  team1 : 'india',
  team2 : 'Australia',
  players : [
  [
    'dhoni',
    'sharma',
    'kohli',
    'rahul',
    'jadeja',
    'pandey',
    'ashwin',
    'chahal',
    'khan',
    'bhumra',
    'shami'
  ],
  [
    'wade',
    'cummins',
    'green',
    'maxwell',
    'finch',
    'hazelwood',
    'marsh',
    'stoinis',
    'richardson',
    'starc',
    'warner'
  ],
],
century : ['kohli','sharma','warner','maxwell'],
odds : {
  team1 : 1.33,
  x : 3.25,
  team2 : 6.5
}
}

//mini project

const p = []
for(let [a,m] of Object.entries(game)){
    p.push(m)
}
p.shift()
p.shift()
p.pop()
p.pop()
//console.log(p)

const players1 = []
const players2 = []
for(let [c,f] of p){
  players1.push(c)
  players2.push(f)
}
// ANS1
console.log("players 2",players2)
console.log("players 1 ",players1)

//ANS2
let fieldplayers = [...players1[0]]
let fieldplayers2 = [...players2[0]]
let Ind = fieldplayers.shift()
console.log(Ind)
console.log(fieldplayers)

//ANS3
const allplayers = [...players1[0],...fieldplayers2]
console.log(allplayers)

//ANS 4
let pl1more = []
pl1more = [...fieldplayers,...["sandeep"],...["john"],...["sunil"]]
console.log(pl1more)

//ANS 5
let q = game["odds"]
console.log(q)
//let i = 0
//for(let r of Object.keys(q)){
 
//ANS 6
let arr = new Map()
for(let [r,name] of Object.entries(q)){
  arr.set(r,name)
}
console.log(arr)
let g = arr.values()

console.log(Math.min(...g))

//ANS 7
const u = game["century"]
console.log(u)
let va=0;
for(i in u){
  console.log("century "+ (va+1)+" :"+u[i])
  va++
}

//ANS 8
console.log(game.odds)
let duru = []
for(i of Object.values(game.odds)){
  duru.push(i)
}
console.log(duru)
let e = 0
for(i of duru){
  e = e + i
}
console.log(e/3)