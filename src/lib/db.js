import mongoose from "mongoose";


export async function db(){
try{
    await mongoose.connect("mongodb+srv://abhiandure123:abhi@pawnacamp.jrp2q.mongodb.net/?retryWrites=true&w=majority&appName=pawnacamp"
    )
    .then(()=>
    console.log('Connected to MongoDB'))
    .catch(err=>console.log('Error connecting to MongoDB'))

}
catch(error){
    console.error(error)
}

}