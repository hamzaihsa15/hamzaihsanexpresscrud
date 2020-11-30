const mongoose = require('mongoose');

const URI='mongodb+srv://hamza131:hamza12345@hamza.o1qkf.mongodb.net/hamza?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;