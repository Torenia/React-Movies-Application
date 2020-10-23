const app = require('./app');
const Loadable= require('react-loadable');

const port = process.env.PORT || 8000;

Loadable.preloadAll().then(() => app.listen(port, () => {
  console.info(`Express listening on port ${port}`);
}));
