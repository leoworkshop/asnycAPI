const Router = require('hermesjs/lib/router');
const router = new Router();
const helloHandler = require('../handlers/hello');
module.exports = router;

router.use('hello', async (message, next) => {
  try {
    await helloHandler.({message});
    next();
  } catch (e) {
    next(e);
  }
});
