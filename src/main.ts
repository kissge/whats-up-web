import { listFeatures } from './listFeatures';
import { loadCaniuseData } from './loadCaniuseData';
import { tweet } from './tweet';

const [, , oldPath, newPath] = process.argv;

const oldData = loadCaniuseData(oldPath);
const newData = loadCaniuseData(newPath);

for (const feature of listFeatures(oldData, newData)) {
  tweet(feature).then((tw) => console.log(tw));
}
