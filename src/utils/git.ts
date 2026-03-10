import { execSync } from 'node:child_process';
import path from 'node:path';

export function getPostDate(postId: string): Date {
  try {
    const filePath = path.join('src/content/posts', postId);
    // Get the last commit date for the file
    const output = execSync(`git log -1 --format=%ai -- "${filePath}"`, {
      encoding: 'utf-8',
    }).trim();

    if (output) {
      return new Date(output);
    }
  } catch (e) {
    console.warn(`Could not get git date for ${postId}:`, e);
  }

  // Fallback to current date if git fails (e.g. new file not yet committed)
  return new Date();
}
