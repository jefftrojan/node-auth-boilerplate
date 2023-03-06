const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log('Mongo DB is connected successfully'))
.catch((err) => console.log(`MongoDb connection error: ${err}`));


