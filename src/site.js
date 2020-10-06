require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const config = require('./config.js');
const siteTrivialAuth = require('./siteTrivialAuth.js');
const siteBookmarkHandler = require('./siteBookmarkHandler.js');
const siteErrorHandler = require('./siteErrorHandler.js');

const site = express();
module.exports = site;

site.use(morgan((config.NODE_ENV === 'dev') ? 'common' : 'tiny'));
site.use(helmet());
site.use(cors());
site.use(siteTrivialAuth);
site.use('/bookmarks', siteBookmarkHandler);
site.use(siteErrorHandler);
