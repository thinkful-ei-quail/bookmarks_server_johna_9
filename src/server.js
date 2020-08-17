const config = require('./config.js');
const impl = require('./site.js');

const { NODE_ENV, PORT } = config;

const server = impl.listen(PORT, () => console.log(`${NODE_ENV} on port ${server.address().port}`));
