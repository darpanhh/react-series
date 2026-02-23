// console.log("Hello world");
// setTimeout(()=>{
//     console.log("Inside timeout");
// },3000)
// console.log("Thank you");


// function fetchData(callback){
//     setTimeout(()=>{
//         console.log("Data fetched")
//         callback()
//     },2000)
// }

// function processData(){
//     console.log("Processing data");
// }

// fetchData(processData);

// const myPromise = new Promise((resolve,reject)=>{
//     console.log(resolve);
//     console.log(reject);
//     let success = true;
//     if(success){
//         resolve("Operation succeded");
//     }
//     else{
//         reject('Operation failed');
//     }
// })

// function fetchUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({name:"Darpan",age:20});
//         },2000);
//     })
// }

// async function test(){
//   try {
//   const result = await fetchUser();
//   console.log(result);
//   } catch (error) {
//     console.log("Error:",error)
//   }
  
// }

// test()

// fetchUser()
// .then((user)=>{
//     console.log("User:",user)
// })
// .catch((err)=>{
//     console.log("Error:",err)
// })
// function delay() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Done");
//     }, 2000);
//   });
// }
// async function example() {
//   console.log("A");

//   await delay();

//   console.log("B");
//   console.log("C");
// }
// example()

async function getUsers() {
  try {
    const response =  await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    // console.log(response.json());
  } catch (error) {
    console.log("Something went wrong:",error);
  }
  
}
getUsers()

// function test() {
//   return new Promise((resolve) => {
//     resolve("Hello World");
//   });
// }

// async function run() {
//   const value = await test();
//   console.log(value);
// }

// run();