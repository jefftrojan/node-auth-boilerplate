const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/db')
.then(() => console.log('Mongo DB is connected successfully'))
.catch((err) => console.log(`MongoDb connection error: ${err}`));


