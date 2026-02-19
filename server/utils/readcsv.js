import csv from "csv-parser"
import fs from "fs"

const results = []
export default function readCSV(filepath) {
  return new Promise((resolve, reject) => {
    fs
      .createReadStream(filepath)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("error", (error) => reject(results))
      .on("end", () => {
        resolve(results);
      });
  });
}

