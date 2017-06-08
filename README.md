対応フォーマット  
例：date = new Date('1989-02-01');


文字   | フォーマット後
---- | -------
YYYY | 1989   
MM   | 02     
DD   | 01     
J    | 平成     
b    | H      
K    | 1      
k    | 元      

### 関数

#### フォーマット

JapaneseDate.format([Dateオブジェクト], [フォーマット文字列]);


#### 文字列をDateオブジェクトに変換

JapaneseDate.parseStringToDate([変換対象文字列]);

### 使い方 Dateオブジェクトを生成して、フォーマットするだけです




let date = new Date('2017-01-03');  
console.log(JapaneseDate.format(date, 'Jk年MM月DD日'));  
出力：平成29年01月03日


  文字列をDateオブジェクトに変換し、フォーマットして出力



let date = JapaneseDate.parseStringToDate('H29/01/02');  
console.log(JapaneseDate.format(date, 'Jk年MM月DD日'));  
出力：平成29年01月02日
