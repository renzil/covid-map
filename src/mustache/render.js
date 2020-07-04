const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");
const util = require("util");
const config = require("./config");

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function getTemplates(templateDir) {
  let templates = {};
  let promises = [];
  let files = await readdir(templateDir);
  
  files.forEach(file => {
    let p = new Promise(async (resolve) => {
      const name = path.basename(file, path.extname(file));
      const template = await readFile(path.resolve(templateDir, file), "utf8");
      templates[name] = template;
      resolve();
    });
    promises.push(p);
  });

  await Promise.all(promises);

  return templates;
}

async function renderPages() {
  let promises = [];
  const partials = await getTemplates("src/mustache/templates/partials");
  const pages = await getTemplates("src/mustache/templates/pages");
  Object.keys(pages).forEach(async pageName => {
    let p = new Promise(async (resolve) => {
      const pageView = Object.assign({}, config, JSON.parse(await readFile(`src/mustache/views/${pageName}.json`, "utf8")));
      await writeFile(`dist/${pageName}.html`, Mustache.render(pages[pageName], pageView, partials));
      resolve();
    });
    promises.push(p);
  });
  await Promise.all(promises);
}

renderPages();