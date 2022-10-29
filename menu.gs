// onOpenは、編集する権限を持つユーザーが、スプレッドシート、ドキュメント、プレゼンテーション、
// またはフォームを開いたときに実行される
function onOpen() {
  // ドキュメントでメニューを作成したい場合は、以下を使用する
  // const ui = DocumentApp.getUi();
  const ui = SpreadsheetApp.getUi();
    ui
        .createMenu('進捗入力アイテム')
        .addItem('test', 'testFunctionA_1')
        .addItem('A-2', 'DumFunc')
        .addItem('A-3', 'DumFunc')
        .addSeparator() // addSeparator()で、区切り線を追加できる
        .addItem('A-4', 'DumFunc')
        .addToUi();
    ui
        .createMenu('Bメニュー')
        .addItem('B-1', 'DumFunc')
        .addItem('B-2', 'DumFunc')
        .addSeparator()
        .addSubMenu(ui.createMenu('B-Sub')//　addSubMenu()で、サブメニューを追加できる
            .addItem('B-Sub-1', 'DumFunc')
            .addItem('B-Sub-2', 'DumFunc')
            .addSeparator()
            .addItem('B-Sub-3', 'DumFunc')
            .addItem('B-Sub-4', 'DumFunc'))
        .addSeparator()
        .addItem('B-3', 'DumFunc')
        .addToUi();
    ui
        .createMenu('Cメニュー')
        .addItem('C-1', 'DumFunc')
        .addSubMenu(ui.createMenu('C-Sub1')
            .addItem('B-Sub1-1', 'DumFunc')
            .addSubMenu(ui.createMenu('C-Sub1-Sub1')
                .addItem('C-Sub1-Sub1-1', 'DumFunc')
                .addItem('C-Sub1-Sub1-2', 'DumFunc'))
            .addSubMenu(ui.createMenu('C-Sub1-Sub2')
                .addItem('C-Sub1-Sub2-1', 'DumFunc')
                .addItem('C-Sub1-Sub2-2', 'DumFunc')
                .addSubMenu(ui.createMenu('C-Sub1-Sub2-Sub1')
                    .addItem('C-Sub1-Sub2-Sub1-1', 'DumFunc')
                    .addItem('C-Sub1-Sub2-Sub1-2', 'DumFunc')
                    .addSubMenu(ui.createMenu('C-Sub1-Sub2-Sub1-Sub1')
                       .addItem('C-Sub1-Sub2-Sub1-Sub1-1', 'DumFunc')
                       .addItem('C-Sub1-Sub2-Sub1-Sub1-2', 'testFunctionC_Sub1_Sub2_Sub1_Sub1_2')
                     )
                 )
             )
         )
        .addToUi();
}

function testFunctionA_1(){
  // ドキュメントの場合、以下使用
  // const ui = DocumentApp.getUi();
  const ui = SpreadsheetApp.getUi();
  const body = "<body>A-1</body>";
  const htmlOutput = HtmlService
      .createHtmlOutput(body) // 変数bodyで作成した<body>要素を設定
      .setWidth(500) // 幅サイズを設定
      .setHeight(50); // 高さサイズを設定
  ui.showModalDialog(htmlOutput, 'TEST');
}

function testFunctionC_Sub1_Sub2_Sub1_Sub1_2(){
  const ui = SpreadsheetApp.getUi();
  const body = "<body>C-Sub1-Sub2-Sub1-Sub1-2</body>";
  const htmlOutput = HtmlService
      .createHtmlOutput(body)
      .setWidth(500) 
      .setHeight(50); 
  ui.showModalDialog(htmlOutput, 'TEST');
}