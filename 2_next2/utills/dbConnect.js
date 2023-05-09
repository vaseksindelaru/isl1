
import {connect,connection} from 'mongoose'

//const URI_MONGO = process.env.URI_MONGO


const conn = {
    isConnected: false
}

export async function conectardb () {

if (conn.isConnected) return;


const db = await connect (process.env.URI_MONGO)
conn.isConnected = db.connections[0].readyState
console.log(db.connection.db.databaseName)
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

