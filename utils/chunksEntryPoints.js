const { pagesTemplateWithChunk } = require('./getPagesTemplate');

const chunksEntryPoints = pagesTemplateWithChunk.reduce((entryPoints, item) => {
  return { ...entryPoints, [item.chunk]: `./script/${item.chunk}/main.js` };
}, {});

module.exports = {
  chunksEntryPoints,
};
