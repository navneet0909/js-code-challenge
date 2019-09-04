process.on('unhandledRejection', error => {
  console.warn('unhandledRejection');
  console.error(error);
  process.exit(1);
});

process.on('uncaughtException', error => {
  console.warn('uncaughtException');
  console.error(error);
  process.exit(1);
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

const app = require('./src/app')
const port = 8000;

const httpServer = app.listen(port, () => console.log(`🚀 Server started on port ${port}`));

function shutdown() {
  httpServer.close();
  console.log('\nApp shutdown');
  process.exit(0);
}