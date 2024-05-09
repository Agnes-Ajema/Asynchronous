//q1
async function delayTime(message,time){
  await new Promise(resolve => setTimeout(resolve, delayTime));
  console.log(message);
}
delayTime("I have faith",5000)

//q2
const Userid=[2,3,5,6,7]
async function getUserId(){
 for(const id of Userid){
    try{
        const userData = await Userid(id)
        console.log(Userid);
    }catch(error){
        console.log(`The user is not found${id}: ${error}`);
    }
 }
}
getUserId(2,3)

//q3
const task = true;
const ourPromise = new Promise((resolve,reject)=>{
    if(task){
        resolve("task completed successfully")
    }
    else{
        reject("error in performing task")
    }
})
ourPromise.then(()=>{
    console.log("task will be completed");
}).catch(()=>console.log("task succesfully completed"))
.finally(()=>{
    console.log("error");
});
console.log({ourPromise});