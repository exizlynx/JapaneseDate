# JapaneseDate

![CI](https://github.com/exizlynx/JapaneseDate/actions/workflows/ci.yml/badge.svg)
[![npm version](https://badge.fury.io/js/japanese-date-format.svg)](https://badge.fury.io/js/japanese-date-format)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

<img src="docs/icon.svg" width="64" alt="JapaneseDate Icon" />

## Overview

`JapaneseDate` is a library for converting JavaScript Date objects into Japanese era notation and other formats.

## Installation

```bash
npm install japanese-date-format
# or
yarn add japanese-date-format
```

## Usage

```javascript
import JapaneseDate from "japanese-date-format";

const date = new Date();
console.log(JapaneseDate.format(date, "Jk年MM月DD日"));
```

### 対応フォーマット

| 文字 | フォーマット後 |
| ---- | -------------- |
| YYYY | 1989           |
| MM   | 02             |
| DD   | 01             |
| J    | 平成           |
| b    | H              |
| K    | 1              |
| k    | 元             |

### 関数

#### フォーマット

```javascript
import JapaneseDate from "japanese-date-format";
JapaneseDate.format([Dateオブジェクト], [フォーマット文字列]);
```

#### 文字列をDateオブジェクトに変換

```javascript
import JapaneseDate from "japanese-date-format";
JapaneseDate.parseStringToDate([変換対象文字列]);
```

### 使い方 Dateオブジェクトを生成して、フォーマットするだけです

```javascript
let date = new Date("2017-01-03");
console.log(JapaneseDate.format(date, "Jk年MM月DD日"));
```

出力：平成29年01月03日

#### 文字列をDateオブジェクトに変換し、フォーマットして出力

```javascript
let date = JapaneseDate.parseStringToDate("H29/01/02");
console.log(JapaneseDate.format(date, "Jk年MM月DD日"));
```

出力：平成29年01月02日
