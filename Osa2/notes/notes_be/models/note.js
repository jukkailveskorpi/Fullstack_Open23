require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

//console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB: ', error.message);
  });

/*mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
  .catch((error) => {
    console.log('error connecting to MongoDB: ', error.message)
  })*/

  //console.log('connecting to', url);
  //console.log('PORT', PORT);


const noteSchema = new mongoose.Schema({
  content: {
     type: String,
     minlength: 5,
     required: true
  },
     important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)