const express = require('express');
const bookmarks = require('./bookmarkStore.js');
const normalizeObject = require('./normalizeObject.js');

const handler = express.Router();
module.exports = handler;

handler.route('/')
  .get((req, res) => res.json(bookmarks))
  .post((req, res) => {
    const bookmark = normalizeObject({
      title: title => typeof(title) === 'string' && title.length > 0,
      url: url => typeof(url) === 'string' && url.startsWith('http'),
      description: desc => (desc === null) || (desc === undefined) || (typeof(desc) === 'string'),
      rating: rating => (rating === null) || (rating === undefined) || ((rating >= 0) && (rating <= 5))
    }, req.body);
    bookmark.id = bookmarks.nextId++;
    bookmarks.push(bookmark);
    res.status(201).json(bookmark);
  })
;

handler.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    const bookmark = bookmarks.find(item => item.id === id);
    return bookmark ? res.json(bookmark) : res.status(404).send();
  })
  .delete((req, res) => {
    const { id } = req.params;
    const index = bookmarks.findIndex(item => item.id === id);
    if(index >= 0)
      bookmarks.splice(index, 1);
    return res.status(204).send();
  })
;
