const { NODE_ENV, PORT } = require('./config.js');
const impl = require('./site.js');

const server = impl.listen(PORT, () => console.log(`${NODE_ENV} on port ${server.address().port}`));
