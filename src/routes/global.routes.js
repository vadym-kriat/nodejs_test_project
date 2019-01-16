
const initGlobalRoutes = (app) => {
  app.get('/', home);

  app.use((req, res, next) => res.status(404).send({ message: `Route${req.url} Not found.` }));
};

function home(req, res) {
  res.render('index', { title: 'Express' });
}

module.exports = {
  initGlobalRoutes
};
