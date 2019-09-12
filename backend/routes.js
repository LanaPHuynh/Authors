const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/authors', controllers.displayAll)
    .get('/api/authors/:id', controllers.displayOneAuthor)
    .post('/api/authors', controllers.newAuthor)
    .put('/api/authors/:id', controllers.updateAuthor)
    .delete('/api/authors/:id', controllers.removeAuthor)
    .all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/ublic/index.html"))
    })
};
 