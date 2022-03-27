/// <reference path="./caniuse.d.ts" />

import { constants } from './constants';

export function* listFeatures(oldData: CaniuseData, newData: CaniuseData) {
  for (const [id, newFeature] of Object.entries(newData.data)) {
    console.log('Feature:', id);
    const oldFeature = oldData.data[id];

    if (newFeature.usage_perc_y > constants.usageThreshold) {
      if (!oldFeature || oldFeature.usage_perc_y <= constants.usageThreshold) {
        yield { id, ...newFeature };
      }
    }
  }
}
