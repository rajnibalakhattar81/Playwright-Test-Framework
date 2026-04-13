import fs from 'fs';
import { LOGIN_LOCATORS_PATH } from '../constants/constants.js';


console.log(`Loading login locators from: ${LOGIN_LOCATORS_PATH}`);


const loginLocatorsPath = LOGIN_LOCATORS_PATH;

// Utility to load and parse JSON once
function loadTestData(): any {
  if (!fs.existsSync(loginLocatorsPath)) {
    throw new Error(`Test data file not found: ${loginLocatorsPath}`);
  }

  const rawData = fs.readFileSync(loginLocatorsPath, "utf-8");
  return JSON.parse(rawData);
}

// Method to get JSON value by key
export function getTestData(key: string): string {
  if (!fs.existsSync(loginLocatorsPath)) {
    throw new Error(`Test data file not found: ${loginLocatorsPath}`);
  }

  const rawData = fs.readFileSync(loginLocatorsPath, 'utf-8');
  const testData = JSON.parse(rawData);


  if (!(key in testData)) {
    throw new Error(`Key "${key}" not found in test data`);
  }
  return testData[key];
}


