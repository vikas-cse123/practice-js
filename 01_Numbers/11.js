let n = 1000
for(let i =1;i<=n;i++){
    if(i %2 === 0 && Number.isInteger(Math.sqrt(i)) ){
        console.log(i);
    }

}