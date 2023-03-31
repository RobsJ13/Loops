console.log("Hello World")

//let i =10;
//console.log(i)

// for(let i=1; i<=10; i++)
// {
//     console.log(i);
// }

let sum=0
for(let i=1; i<=10; i++){
    sum+=i;
}
console.log(sum);
// while
let i=0;
while(i<=10)
{
    console.log(i);
    i++;
}

// do while
let j=0;
do{
    console.log(j);
    j++;
}while(j<10);


//for of loop
let a=[1,2,3,4,50];
for (let i of a){
    console.log(i);
}

// using backtick for formating
let my_name="Robin"
console.log(`Hello ${my_name}`);