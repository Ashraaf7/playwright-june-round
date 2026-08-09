import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export class CsvReader {
    private data: any[] = [];

    /**
     * Load CSV file and parse data
     * @param filePath - Path to the CSV file
     */
    async loadFile(filePath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const absolutePath = path.resolve(__dirname, filePath);

            fs.createReadStream(absolutePath)
                .pipe(csv({ delimiter: '\t' }))
                .on('data', (row) => {
                    // Handle both tab-delimited and comma-delimited formats
                    let processedRow = row;

                    // If we got a single column with tabs in it, split it manually
                    const keys = Object.keys(row);
                    if (keys.length === 1 && keys[0].includes('\t')) {
                        const headers = keys[0].split('\t').map(h => h.trim());
                        const values = row[keys[0]].split('\t').map((v: string) => v.trim());
                        processedRow = {};
                        headers.forEach((header, index) => {
                            processedRow[header] = values[index] || '';
                        });
                    } else {
                        // Normal case: trim column names and values
                        processedRow = Object.keys(row).reduce((acc: any, key) => {
                            const trimmedKey = key.trim();
                            const trimmedValue = typeof row[key] === 'string' ? row[key].trim() : row[key];
                            acc[trimmedKey] = trimmedValue;
                            return acc;
                        }, {});
                    }
                    this.data.push(processedRow);
                })
                .on('end', () => {
                    console.log('CSV file loaded successfully');
                    if (this.data.length > 0) {
                        console.log('Available columns:', Object.keys(this.data[0]));
                        console.log('First row data:', this.data[0]);
                    }
                    resolve();
                })
                .on('error', (error) => {
                    console.error('Error reading CSV file:', error);
                    reject(error);
                });
        });
    }

    /**
     * Get data by row number and column name
     * @param rowNumber - Row index (0-based)
     * @param columnName - Column name header
     * @returns Data value or undefined if not found
     */
    getDataByRowAndColumn(rowNumber: number, columnName: string): string | undefined {
        if (rowNumber < 0 || rowNumber >= this.data.length) {
            console.warn(`Row ${rowNumber} not found`);
            return undefined;
        }

        const row = this.data[rowNumber];

        if (!(columnName in row)) {
            console.warn(`Column '${columnName}' not found in row ${rowNumber}`);
            return undefined;
        }

        return row[columnName];
    }

    /**
     * Get all data
     * @returns Array of all parsed CSV data
     */
    getAllData(): any[] {
        return this.data;
    }

    /**
     * Get specific row data
     * @param rowNumber - Row index (0-based)
     * @returns Row data object or undefined
     */
    getRow(rowNumber: number): any {
        if (rowNumber < 0 || rowNumber >= this.data.length) {
            console.warn(`Row ${rowNumber} not found`);
            return undefined;
        }
        return this.data[rowNumber];
    }
}
