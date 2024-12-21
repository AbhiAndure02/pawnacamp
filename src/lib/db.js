import mongoose from "mongoose";


export async function db(){
try{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>
    console.log('Connected to MongoDB'))
    .catch(err=>console.log('Error connecting to MongoDB'))

}
catch(error){
    console.error(error)
}

}