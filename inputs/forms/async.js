const func = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise got resolved")
    },10000)
})

async function handlePromises() {
    console.log("Hello java script");
    const program = await func
    console.log("Namaste world");
   console.log(program);
   
}