
import {connect,connection} from 'mongoose'

//const URI_MONGO = process.env.URI_MONGO
export async function conectardb () {
const db = await connect (process.env.URI_MONGO)
console.log(db.connections[0].readyState)
}
connection.on("connected", () =>{
    console.log ("connected 👋")
})
connection.on("error", (err) =>{
    console.log ("err")
})


/*async() => {
    try {
        await mongoose.connect(URI_MONGO,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    })
console.log('mongodb conectado 👍' )
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}*/

