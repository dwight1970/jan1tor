import * as fs from "node:fs";
import csv from 'csv-parser';
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from 'path';
import * as https from "node:https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const importBlacklist = async () => {
    const results = [];
    const url = 'https://raw.githubusercontent.com/dwight1970/tracking-query-params-registry/refs/heads/master/_data/params.csv';

    https.get(url, (res) => {
        res.pipe(csv())
            .on('data', (row) => {
                results.push({
                    key: row.name,
                    source: row.platform ? row.platform.trim() : undefined,
                    value: undefined
                });
            })
            .on('end', () => {
                fs.writeFileSync(path.join(__dirname, '../data/blacklist.json'), JSON.stringify(results, null, 2), {flag: 'w'});
                console.log('CSV file successfully converted to JSON');
            });
    }).on('error', (err) => {
        console.error('Error fetching CSV:', err);
    });
}

await importBlacklist();
