/// <reference path="./caniuse.d.ts" />

import * as fs from 'fs';

export function loadCaniuseData(path: string): CaniuseData {
  console.log('Loading', path);
  return JSON.parse(fs.readFileSync(path, 'utf8')) as CaniuseData;
}
