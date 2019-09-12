const Author = require('./models');

module.exports = {

  displayAll: (req, res) => {
    Author.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  displayOneAuthor: (req, res) => {
    const id = req.params.id;
    Author.find({_id:id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createAuthor: (req, res) => {
    const DATA = req.body;
    Author.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  newAuthor: (req, res) => {
    const { name } = req.body;
    const author = new Author({ 
      name: name
    });
    author.save()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateAuthor: (req, res) => {
    const id = req.params.id;
    const DATA = req.body;
    Author.findOneAndUpdate({_id:id}, DATA, {runValidators:true, new:true})
      .then(results => res.json(results))
      .catch(errors => res.json(errors));
  },

  removeAuthor: (req, res) => {
    const id = req.params.id;
    Author.remove({_id:id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

};