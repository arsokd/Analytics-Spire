import axios from 'axios';
import Papa from 'papaparse';

// MICRO-LEVEL GUIDE FOR GOOGLE SHEETS SETUP:
// 1. Open Google Sheets (https://sheets.google.com)
// 2. Create a new sheet named "Analytics Spire Database"
// 3. Create tabs named "Services", "Users", "Events", "Videos"
// 4. Fill in the columns as defined in the constants.ts file
// 5. Go to File > Share > Publish to the web
// 6. Select "Entire Document" and "Comma-separated values (.csv)"
// 7. Copy the link and paste it below in GOOGLE_SHEET_CSV_URL

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1h6QysYNFFQFINXIr4rhM_IswYs050FmpPp9ErhUDgQM/export?format=csv';

export const fetchSheetData = async (tabName: string) => {
  try {
    // If no URL is provided, return null to use local constants
    if (!GOOGLE_SHEET_CSV_URL) {
      return null;
    }

    // Google Sheets CSV export URL for a specific tab
    // We need to append the gid for specific tabs, but for simplicity, 
    // we'll assume the user publishes the specific tab or we use the main one.
    const response = await axios.get(GOOGLE_SHEET_CSV_URL);
    
    return new Promise((resolve, reject) => {
      Papa.parse(response.data, {
        header: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error(`Error fetching Google Sheet data for ${tabName}:`, error);
    return null;
  }
};
