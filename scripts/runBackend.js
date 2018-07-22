const shell = require('shelljs');

shell.exec(`cd node_modules/@plone/plone-react/api && ./bin/instance fg`, (code) => {
  console.log("Exited with code ", code)
});
