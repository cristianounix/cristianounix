var Metalsmith = require('metalsmith'); 

console.info(__dirname);

Metalsmith(__dirname)
  .use(drafts())
  .use(markdown())
  .use(permalinks('posts/:title'))
  .use(templates('handlebars'))
  .build(function(err) {
    if (err) throw err;
  });