const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/AuthorAPI';
mongoose.connect(connectString, {useNewUrlParser: true});

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Author\'s name cannot be blank.'],
        minlength: [3, 'Author\'s name must be at least 3 characters.']
    }
}, {timestamps: true});

module.exports = mongoose.model('Authors', AuthorSchema);