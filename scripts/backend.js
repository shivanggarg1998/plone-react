const shell = require('shelljs');

shell.exec(`cd node_modules/@plone/plone-react/api && ./bootstrap.sh`, (code) => {
  console.log("Exited with code ", code)
});
