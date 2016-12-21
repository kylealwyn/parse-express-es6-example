const port = 9000;

const config = {
  Port: port,

  Env: {
    Development: process.env.NODE_ENV === 'development',
    Production: process.env.node_ENV === 'production',
  },

  // TODO Configure with .env file
  ParseServerMount: '/parse',
  ParseWebhookMount: '/webhooks',
  ParseConfig: {
    databaseURI: 'mongodb://localhost:27017/emerald',
    cloud: `${__dirname}/cloud/main.js`,
    appId: 'emerald-cloud',
    masterKey: 'secret-master-key',
    serverURL: `http://localhost:9000/parse`,
  },
};

export default config;
