const Constants = {
  Port: 9000,

  Env: {
    Development: process.env.NODE_ENV === 'development',
    Production: process.env.node_ENV === 'production',
  },

  // TODO Configure with .env file
  ParseServerMount: '/api',
  ParseWebhookMount: '/webhooks',
  ParseConfig: {
    databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/emerald',
    cloud: process.env.CLOUD_CODE_PATH || `${__dirname}/cloud/main.js`,
    appId: process.env.APP_ID || 'parse-test',
    masterKey: process.env.MASTER_KEY || 'secret-master-key',
    serverURL: process.env.SERVER_URL || `http://localhost:9000/api`,
  },
};

export default Constants;
