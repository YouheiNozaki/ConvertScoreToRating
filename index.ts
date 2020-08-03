function ConvertScoreToRating(score) {
  // SpreadSheet点数を取得
  const spreadsheet = SpreadsheetApp.getActiveSheet();
  Logger.log(spreadsheet.getName());

  // テストの点数が入力されている最終行を取得する定数
  const lastRow = spreadsheet.getLastRow();

  // 点数の値を順番に取得する
  for (let i = 2; i <= lastRow; i++) {
    const TestValue = spreadsheet.getRange(i, 3).getValues();
    if (TestValue >= 92) {
      spreadsheet.getRange(i, 4).setValue(10);
    } else if (TestValue >= 85) {
      spreadsheet.getRange(i, 4).setValue(9);
    } else if (TestValue >= 76) {
      spreadsheet.getRange(i, 4).setValue(8);
    } else if (TestValue >= 67) {
      spreadsheet.getRange(i, 4).setValue(7);
    } else if (TestValue >= 57) {
      spreadsheet.getRange(i, 4).setValue(6);
    } else if (TestValue >= 42) {
      spreadsheet.getRange(i, 4).setValue(5);
    } else if (TestValue >= 36) {
      spreadsheet.getRange(i, 4).setValue(4);
    } else if (TestValue >= 28) {
      spreadsheet.getRange(i, 4).setValue(3);
    } else if (TestValue >= 17) {
      spreadsheet.getRange(i, 4).setValue(2);
    } else {
      spreadsheet.getRange(i, 4).setValue(1);
    }
  }
}
