/**
 * 和暦変換
 */
const JapaneseDate = {
  eraTypes: [
    {
      'name': '令和',
      'name_short': 'R',
      'timestamp': new Date(2019, 4, 1)
    },
    {
      'name': '平成',
      'name_short': 'H',
      'timestamp': new Date(1989, 0, 8)
    },
    {
      'name': '昭和',
      'name_short': 'S',
      'timestamp': new Date(1926, 11, 25)
    },
    {
      'name': '大正',
      'name_short': 'T',
      'timestamp': new Date(1912, 6, 30)
    },
    {
      'name': '明治',
      'name_short': 'M',
      'timestamp': new Date(1868, 0, 25)
    }
  ],
  dateToJpn: function(targetDate, formatKey) {
    for (let i = 0; i < this.eraTypes.length; i++) {
      let obj = this.eraTypes[i];
      if (targetDate.getTime() >= obj.timestamp.getTime()) {
        if (formatKey === 'b') return obj.name_short;
        if (formatKey === 'J') return obj.name;
        targetDate = new Date(
          targetDate.getUTCFullYear() - (obj.timestamp.getUTCFullYear() - 1),
          targetDate.getMonth(),
          targetDate.getDate()
        );
        if (formatKey === 'k' || formatKey === 'K') {
          let dispEra = targetDate.getUTCFullYear().toString().substr(-2);
          if (formatKey === 'k' && dispEra.toString() === '1') dispEra = '元';
          return dispEra;
        }
      }
    }
  },
  /**
   * 文字列をDateオブジェクトに変換
   * @param dateString
   * @returns {*}
   */
  parseStringToDate: function(dateString) {
    let regExp = null;
    // format: 20010203
    if (dateString.match(/^\d{4}\/?\d{1,2}\/?\d{1,2}/)) {
      let data = dateString.match(/^(\d{4})\/?(\d{1,2})\/?(\d{1,2})/);
      return new Date(
        parseInt(data[1], 10),
        parseInt(data[2], 10) - 1,
        parseInt(data[3], 10)
      );
    }
    // format: H210203
    regExp = new RegExp('^([' + this.getEraNameList(2).join('|') + ']+)(\\d{1,2})\\/?(\\d{1,2})\\/?(\\d{1,2})+$');
    if (dateString.match(regExp)) {
      let data = dateString.match(regExp);
      for (var i = 0; i < this.eraTypes.length; i++) {
        let obj = this.eraTypes[i];
        if (data[1] == obj.name_short) {
          let newYear = parseInt(data[2], 10) + (obj.timestamp.getUTCFullYear() - 1);
          return new Date(
            newYear,
            parseInt(data[3], 10) - 1,
            parseInt(data[4], 10)
          );
        }
      }
    }
    // format 2001年02月03日
    if (dateString.match(/^\d{4}[年]\d{1,2}[月]\d{1,2}[日]/)) {
      let data = dateString.match(/^(\d{4})[年](\d{1,2})[月](\d{1,2})[日]/);
      return new Date(
        parseInt(data[1], 10),
        parseInt(data[2], 10) - 1,
        parseInt(data[3], 10)
      );
    }
    // format: 平成21年2月3日
    regExp = new RegExp('^([' + this.getEraNameList(1).join('|') + ']+)(\\d{1,3})年(\\d{1,2})[月](\\d{1,2})[日]+$');
    if (dateString.match(regExp)) {
      let data = dateString.match(regExp);
      for (var i = 0; i < this.eraTypes.length; i++) {
        let obj = this.eraTypes[i];
        if (data[1] == obj.name) {
          let newYear = parseInt(data[2], 10) + (obj.timestamp.getUTCFullYear() - 1);
          return new Date(
            newYear,
            parseInt(data[3], 10) - 1,
            parseInt(data[4], 10)
          );
        }
      }
    }
    return false;
  },
  /**
   * 日付のフォーマット
   * @param date
   * @param format
   * @returns {*}
   */
  format: function(date, format) {
    if (!date) return '';
    if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
    format = format.replace(/YYYY/g, date.getUTCFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/J/g, this.dateToJpn(date, 'J'));
    format = format.replace(/b/g, this.dateToJpn(date, 'b'));
    format = format.replace(/k/g, this.dateToJpn(date, 'k'));
    format = format.replace(/K/g, this.dateToJpn(date, 'K'));
    return format;
  },
  getEraNameList: function(type) {
    let list = [];
    for (var i = 0; i < this.eraTypes.length; i++) {
      let obj = this.eraTypes[i];
      if (type === 1) list.push(obj.name);
      if (type === 2) list.push(obj.name_short);
    }
    return list;
  },
};
