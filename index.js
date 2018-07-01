#!/usr/bin/env node

'use strict';

const install = require('npm-install-package');
const packageJson = require('./package.json');

const args = process.argv.slice(2);

// can't use promisify to npm-install-package
function installPackage(packageName, opts = {}) {
  return new Promise((resolve, reject) => {
    install(packageName, opts, (err) => {
      if (err) reject(err);
      else resolve();
    });
  })
}

(async () => {
  if (args.length === 2 && (args[0] === 'install' || args[0] === 'i') && args[1] !== undefined) {
    const packageName = args[1];

    try {
      console.log(`Install ${packageName} as dependencies...`);
      await installPackage(packageName);
      console.log(`Install @types/${packageName} as devDependencies...`);
      await installPackage(`@types/${packageName}`, { saveDev: true, cache: true });
    } catch(e) {
      console.error(e);
      process.exit(1);
    }
  } else if (args[0] === 'help' || args[0] === '--help') {
    console.log('Usage: <ts-install | ti> <install | i> <packageName>');
  } else if (args[0] === 'version' || args[0] === '--version') {
    console.log(packageJson.version);
  }
})();
