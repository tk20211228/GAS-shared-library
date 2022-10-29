// カレンダーID
const HOLIDAY_CALENDAR_ID  = 'ja.japanese#holiday@group.v.calendar.google.com';

// 出力先シート名
const SHEET_NAME_HOLIDAY   = '祝日';

// リセットする範囲
const RANGE_HOLIDAY        = 'B5:C250';

// 5行目B列からデータを入れる
const ROW_HOLIDAY_START    = 5; // 5行
const COLUMN_HOLIDAY_START = 2; // B列


/**
 * 日本の祝日一覧を取得し、「祝日」シートに書き出し
 */
function getHolidays() {
  // 今年の1月1日から
  const fromDate = new Date();
  fromDate.setMonth(0, 1);
  fromDate.setHours(0, 0, 0, 0);

  // 翌々年の1月1日まで
  const toDate = new Date();
  toDate.setFullYear(toDate.getFullYear() + 2, 0, 1);
  toDate.setHours(0, 0, 0, 0);

  // 祝日カレンダーから対象期間のイベントを取得して2次元配列に格納
  const calendar = CalendarApp.getCalendarById(HOLIDAY_CALENDAR_ID);
  const holidays = calendar.getEvents(fromDate, toDate);
  let insertValues = [];
  for (let holiday of holidays) {
    insertValues.push([holiday.getStartTime(), holiday.getTitle()]);
  }
  if (insertValues.length === 0) return;

  // 「祝日」シートを取得
  const holidaySheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME_HOLIDAY);
  
  // 既存の祝日情報を一度削除
  holidaySheet.getRange(RANGE_HOLIDAY).clearContent();
  
  // 取得した祝日情報を「祝日」シートに出力
  holidaySheet.getRange(ROW_HOLIDAY_START, COLUMN_HOLIDAY_START, insertValues.length, insertValues[0].length).setValues(insertValues);
}

/**
 * 営業日かどうかを判定する
 * @param {'2022-08-01'} date 判定したい日付 YYYY-MM-DD
 * @customfunction
 */
function businessdayscheck(date) {
  const _d = new Date(date);
  const url = `https://api.kenall.jp/v1/businessdays/check?date=${_d.getFullYear()}-${_d.getMonth()+1}-${_d.getDate()}`
  const response = UrlFetchApp.fetch(url, {
    'headers': {
      'Authorization': 'Token xxxxxxxxxxx'
    }
  });
  const body = response.getContentText();  
  con
  return JSON.parse(body).result; 

  // const SSK = 'sasaki';
}






















