const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/travel';
const client = new MongoClient(url)

const db_name="batch_1"
/*
await client.connect()
const db = client.db(db_name);

async function user_data(collec_name,document){
    const collection = db.collection(collec_name);

    
    let a = await collection.insertOne(document)
    console.log(a)
}
data={
    "Name":"Akhil Rjapl",
    "batch":"MCA"
}
user_data('Student_Details',data)
*/
//console.log(client)

async function Connection(){

    await client.connect()
    const db = client.db(db_name);
    const collection = db.collection('Student_Details');

    //Insert Document
   let documents=[{
        "Name":"Anjali Rjapl",
        "batch":"MCA"
    },{
        "Name":"Sakshi kHurana",
        "batch":"BCA"
    }]
   // let a = await collection.insertOne(document)
   // let a = await collection.insertMany(documents)
    //console.log(a)

    // Find

    //const findResult = await collection.find({'Student Roll No': '56'}).toArray();
    //console.log(findResult)

    //Update

   // const update_query= await collection.updateOne({ 'Student Roll No': '56' }, { $set: { Std_name: 'Abhay' } })
    //console.log(update_query)

    //Delete

    await collection.deleteMany({'Student Roll No': '56'})
    const findResult = await collection.find({'Student Roll No': '56'}).toArray();
    console.log(findResult)
    
return "done"
}
Connection()
.finally(() => client.close());
