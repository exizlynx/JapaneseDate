import { eraTypes } from "./eraTypes";
import { EraType } from "./types/eraType";

const JapaneseDate = {
  dateToJpn: function (targetDate: Date, formatKey: string): string {
    for (let i = 0; i < eraTypes.length; i++) {
      const obj: EraType = eraTypes[i];
      if (targetDate.getTime() >= obj.timestamp.getTime()) {
        if (formatKey === "b") return obj.name_short;
        if (formatKey === "J") return obj.name;
        targetDate = new Date(
          targetDate.getUTCFullYear() - (obj.timestamp.getUTCFullYear() - 1),
          targetDate.getMonth(),
          targetDate.getDate()
        );
        if (formatKey === "k" || formatKey === "K") {
          let displayEra = targetDate.getUTCFullYear().toString().slice(-2);
          if (formatKey === "k" && displayEra.toString() === "01") {
            displayEra = "元";
          }
          return displayEra;
        }
      }
    }
    return "";
  },
  /**
   * 文字列をDateオブジェクトに変換
   * @param string dateString
   * @returns {*}
   */
  parseStringToDate: function (dateString: string): Date | boolean {
    let regExp: RegExp;
    // format: 20010203
    if (dateString.match(/^\d{4}\/?\d{1,2}\/?\d{1,2}/)) {
      const data: RegExpMatchArray | null = dateString.match(
        /^(\d{4})\/?(\d{1,2})\/?(\d{1,2})/
      );
      return new Date(
        parseInt(data![1], 10),
        parseInt(data![2], 10) - 1,
        parseInt(data![3], 10),
        0,
        0,
        0,
        0
      );
    }
    // format: H210203
    regExp = new RegExp(
      "^([" +
        this.getEraNameList(2).join("|") +
        "]+)(\\d{1,2})\\/?(\\d{1,2})\\/?(\\d{1,2})+$"
    );
    if (dateString.match(regExp)) {
      const data: RegExpMatchArray | null = dateString.match(regExp);
      for (let i = 0; i < eraTypes.length; i++) {
        const obj: EraType = eraTypes[i];
        if (data![1] == obj.name_short) {
          const newYear =
            parseInt(data![2], 10) + (obj.timestamp.getUTCFullYear() - 1);
          return new Date(
            newYear,
            parseInt(data![3], 10) - 1,
            parseInt(data![4], 10),
            0,
            0,
            0,
            0
          );
        }
      }
    }
    // format 2001年02月03日
    if (dateString.match(/^\d{4}[年]\d{1,2}[月]\d{1,2}[日]/)) {
      const data: RegExpMatchArray | null = dateString.match(
        /^(\d{4})[年](\d{1,2})[月](\d{1,2})[日]/
      );
      return new Date(
        parseInt(data![1], 10),
        parseInt(data![2], 10) - 1,
        parseInt(data![3], 10),
        0,
        0,
        0,
        0
      );
    }
    // format: 平成21年2月3日
    regExp = new RegExp(
      "^([" +
        this.getEraNameList(1).join("|") +
        "]+)(\\d{1,3})年(\\d{1,2})[月](\\d{1,2})[日]+$"
    );
    if (dateString.match(regExp)) {
      const data: RegExpMatchArray | null = dateString.match(regExp);
      for (let i = 0; i < eraTypes.length; i++) {
        const obj: EraType = eraTypes[i];
        if (data![1] == obj.name) {
          const newYear =
            parseInt(data![2], 10) + (obj.timestamp.getUTCFullYear() - 1);
          return new Date(
            newYear,
            parseInt(data![3], 10) - 1,
            parseInt(data![4], 10),
            0,
            0,
            0,
            0
          );
        }
      }
    }

    return false;
  },

  /**
   * 日付のフォーマット
   * @param Date date
   * @param string|null format
   * @returns string
   */
  format: function (date: Date, format: string | null): string {
    if (!format) format = "YYYY-MM-DD hh:mm:ss";
    format = format.replace(/YYYY/g, String(date.getUTCFullYear()));
    format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
    format = format.replace(/J/g, this.dateToJpn(date, "J"));
    format = format.replace(/b/g, this.dateToJpn(date, "b"));
    format = format.replace(/k/g, this.dateToJpn(date, "k"));
    format = format.replace(/K/g, this.dateToJpn(date, "K"));

    return format;
  },

  /**
   * 元号の取得
   * @param type
   * @returns string[]
   */
  getEraNameList: function (type: number): string[] {
    const list: string[] = [];
    for (let i = 0; i < eraTypes.length; i++) {
      const obj: EraType = eraTypes[i];
      if (type === 1) list.push(obj.name);
      if (type === 2) list.push(obj.name_short);
    }

    return list;
  },
};

export default JapaneseDate;
