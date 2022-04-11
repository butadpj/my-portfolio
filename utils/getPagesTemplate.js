const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pagesName = fs
  .readdirSync('./pages', { withFileTypes: true })
  .filter(
    (item) => !item.isDirectory() && path.parse(item.name).ext === '.html',
  )
  .map(({ name }) => path.parse(name).name);

const scriptFolderDirectories = fs
  .readdirSync('./script', { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

const matchPageScripts = scriptFolderDirectories.filter(
  (directory, index) => directory === pagesName[index],
);

const pagesTemplateWithoutChunk = pagesName
  .filter((pageName, index) => pageName !== matchPageScripts[index])
  .map((pageName) => ({ name: `${pageName}.html` }));

const pagesTemplateWithChunk = matchPageScripts.map((pageName) => ({
  name: `${pageName}.html`,
  chunk: pageName,
}));

const pagesTemplate = [...pagesTemplateWithoutChunk, ...pagesTemplateWithChunk];

const getPagesTemplate = pagesTemplate.map(
  (page) =>
    new HtmlWebpackPlugin({
      filename: page.name,
      template: `./pages/${page.name}`,
      chunks: [page.chunk],
    }),
);

module.exports = {
  pagesTemplateWithChunk,
  getPagesTemplate,
};
