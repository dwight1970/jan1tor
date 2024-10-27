import { promises as fs } from 'fs';
import { join } from 'path';

const readJSON = async <T>(filePath: string): Promise<T> => {
  const path = join(__dirname, filePath);
  const data = await fs.readFile(path, 'utf-8');
  return JSON.parse(data) as T;
}

export default readJSON;