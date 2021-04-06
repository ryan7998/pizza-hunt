const router = require('express').Router();
//Import all of the Api routes from /api/index:
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

//add prefix to '/api' to all of the api routes imported from the 'api' directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
