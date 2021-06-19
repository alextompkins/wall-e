import { GoogleSpreadsheet } from 'google-spreadsheet';
import { GOOGLE_PRIVATE_KEY, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SHEET_ID } from '../Constants';

export class SheetsManager {
  doc: GoogleSpreadsheet;

  constructor() {
    // Initialize the sheet - doc ID is the long id in the sheets URL
    this.doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);
  }

  async test(): Promise<void> {
    await this.doc.useServiceAccountAuth({
      client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY,
    });

    await this.doc.loadInfo(); // loads this.document properties and worksheets
    console.log(this.doc.title);
    await this.doc.updateProperties({ title: 'renamed this.doc' });

    const sheet = this.doc.sheetsByIndex[0]; // or use this.doc.sheetsById[id] or this.doc.sheetsByTitle[title]
    console.log(sheet.title);
    console.log(sheet.rowCount);

    // adding / removing sheets
    const newSheet = await this.doc.addSheet({ title: 'hot new sheet!' });
    await delay(5000);
    await newSheet.delete();
  }
}

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve, ms);
  });
}
