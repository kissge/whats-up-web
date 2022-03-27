import * as https from 'https';
import { EUploadMimeType, TwitterApi } from 'twitter-api-v2';
import { constants } from './constants';

const twitterClient = new TwitterApi(constants.twitterAPIConfig);

export async function tweet(feature: { id: string; title: string; categories: string[]; usage_perc_y: number }) {
  const hashtags = [feature.id, 'caniuse', ...feature.categories].map((t) => ` #${t.replace(/[- ]/g, '_')}`).join('');
  const status = `🎉 ${feature.title} is now supported in browsers used by ${feature.usage_perc_y} % of users global!${hashtags} https://caniuse.com/${feature.id}`;
  const image = await downloadImage(`https://caniuse.bitsofco.de/image/${feature.id}.png`);
  const media_ids = await twitterClient.v1.uploadMedia(image, { mimeType: EUploadMimeType.Png, chunkLength: 25000 });
  return twitterClient.v1.tweet(status, { media_ids });
}

function downloadImage(url: string) {
  return new Promise<Buffer>((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode == 302) {
          return downloadImage(response.headers.location!).then(resolve, reject);
        }

        const chunks: Buffer[] = [];
        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', () => resolve(Buffer.concat(chunks)));
      })
      .on('error', reject);
  });
}
