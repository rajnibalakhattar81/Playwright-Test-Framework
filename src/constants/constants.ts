//import path from 'path';

import { fileURLToPath } from 'url';
//import path from 'path';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//export const TEST_DATA_PATH = path.join(__dirname,'../resources/testdata.json');
//export const LOGIN_LOCATORS_PATH = path.join(__dirname,'../resources/loginLocator.json');

import path from 'path';

console.log('CWD^^^^^^^^^^^^^^:', process.cwd());

export const TEST_DATA_PATH = path.join(
  process.cwd(),
  'src',
  'resources',
  'testData.json'
);

export const LOGIN_LOCATORS_PATH = path.join(
  process.cwd(),
  'src',
  'resources',
  'loginLocator.json'
);
