"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/japanese-date.ts
var japanese_date_exports = {};
__export(japanese_date_exports, {
  default: () => japanese_date_default
});
module.exports = __toCommonJS(japanese_date_exports);

// src/eraTypes.ts
var eraTypes = [
  {
    name: "\u4EE4\u548C",
    name_short: "R",
    timestamp: /* @__PURE__ */ new Date("2019-05-01T00:00:00")
  },
  {
    name: "\u5E73\u6210",
    name_short: "H",
    timestamp: /* @__PURE__ */ new Date("1989-01-08T00:00:00")
  },
  {
    name: "\u662D\u548C",
    name_short: "S",
    timestamp: /* @__PURE__ */ new Date("1926-12-25T00:00:00")
  },
  {
    name: "\u5927\u6B63",
    name_short: "T",
    timestamp: /* @__PURE__ */ new Date("1912-07-30T00:00:00")
  },
  {
    name: "\u660E\u6CBB",
    name_short: "M",
    timestamp: /* @__PURE__ */ new Date("1868-01-25T00:00:00")
  },
  {
    name: "\u6176\u5FDC",
    name_short: "Ke",
    timestamp: /* @__PURE__ */ new Date("1865-05-01T00:00:00")
  },
  {
    name: "\u5143\u6CBB",
    name_short: "Ge",
    timestamp: /* @__PURE__ */ new Date("1864-02-20T00:00:00")
  },
  {
    name: "\u6587\u4E45",
    name_short: "B",
    timestamp: /* @__PURE__ */ new Date("1861-02-19T00:00:00")
  },
  {
    name: "\u4E07\u5EF6",
    name_short: "Ma",
    timestamp: /* @__PURE__ */ new Date("1860-03-18T00:00:00")
  },
  {
    name: "\u5B89\u653F",
    name_short: "An",
    timestamp: /* @__PURE__ */ new Date("1854-11-27T00:00:00")
  },
  {
    name: "\u5609\u6C38",
    name_short: "Ka",
    timestamp: /* @__PURE__ */ new Date("1848-04-01T00:00:00")
  },
  {
    name: "\u5F18\u5316",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("1844-12-02T00:00:00")
  },
  {
    name: "\u5929\u4FDD",
    name_short: "Te",
    timestamp: /* @__PURE__ */ new Date("1830-12-10T00:00:00")
  },
  {
    name: "\u6587\u653F",
    name_short: "Bu",
    timestamp: /* @__PURE__ */ new Date("1818-05-26T00:00:00")
  },
  {
    name: "\u6587\u5316",
    name_short: "Bun",
    timestamp: /* @__PURE__ */ new Date("1804-02-11T00:00:00")
  },
  {
    name: "\u4EAB\u548C",
    name_short: "Kyo",
    timestamp: /* @__PURE__ */ new Date("1801-02-05T00:00:00")
  },
  {
    name: "\u5BDB\u653F",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("1789-01-25T00:00:00")
  },
  {
    name: "\u5929\u660E",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("1781-04-25T00:00:00")
  },
  {
    name: "\u5B89\u6C38",
    name_short: "An",
    timestamp: /* @__PURE__ */ new Date("1772-11-16T00:00:00")
  },
  {
    name: "\u660E\u548C",
    name_short: "Mei",
    timestamp: /* @__PURE__ */ new Date("1764-06-02T00:00:00")
  },
  {
    name: "\u5B9D\u66A6",
    name_short: "Ho",
    timestamp: /* @__PURE__ */ new Date("1751-10-27T00:00:00")
  },
  {
    name: "\u5BDB\u5EF6",
    name_short: "Ka",
    timestamp: /* @__PURE__ */ new Date("1748-07-12T00:00:00")
  },
  {
    name: "\u5EF6\u4EAB",
    name_short: "En",
    timestamp: /* @__PURE__ */ new Date("1744-02-21T00:00:00")
  },
  {
    name: "\u5BDB\u4FDD",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("1741-02-27T00:00:00")
  },
  {
    name: "\u5143\u6587",
    name_short: "Ge",
    timestamp: /* @__PURE__ */ new Date("1736-04-28T00:00:00")
  },
  {
    name: "\u4EAB\u4FDD",
    name_short: "Kyo",
    timestamp: /* @__PURE__ */ new Date("1716-06-22T00:00:00")
  },
  {
    name: "\u6B63\u5FB3",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1711-04-25T00:00:00")
  },
  {
    name: "\u5B9D\u6C38",
    name_short: "Ho",
    timestamp: /* @__PURE__ */ new Date("1704-03-13T00:00:00")
  },
  {
    name: "\u5143\u7984",
    name_short: "Ge",
    timestamp: /* @__PURE__ */ new Date("1688-09-30T00:00:00")
  },
  {
    name: "\u8C9E\u4EAB",
    name_short: "Jo",
    timestamp: /* @__PURE__ */ new Date("1684-09-05T00:00:00")
  },
  {
    name: "\u5929\u548C",
    name_short: "Te",
    timestamp: /* @__PURE__ */ new Date("1681-09-29T00:00:00")
  },
  {
    name: "\u5EF6\u5B9D",
    name_short: "En",
    timestamp: /* @__PURE__ */ new Date("1673-09-21T00:00:00")
  },
  {
    name: "\u5BDB\u6587",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("1661-04-25T00:00:00")
  },
  {
    name: "\u4E07\u6CBB",
    name_short: "Ma",
    timestamp: /* @__PURE__ */ new Date("1658-07-23T00:00:00")
  },
  {
    name: "\u660E\u66A6",
    name_short: "Mei",
    timestamp: /* @__PURE__ */ new Date("1655-04-13T00:00:00")
  },
  {
    name: "\u627F\u5FDC",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1652-09-18T00:00:00")
  },
  {
    name: "\u6176\u5B89",
    name_short: "Kei",
    timestamp: /* @__PURE__ */ new Date("1648-02-15T00:00:00")
  },
  {
    name: "\u6B63\u4FDD",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1644-12-16T00:00:00")
  },
  {
    name: "\u5BDB\u6C38",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("1624-04-17T00:00:00")
  },
  {
    name: "\u5143\u548C",
    name_short: "Gen",
    timestamp: /* @__PURE__ */ new Date("1615-07-13T00:00:00")
  },
  {
    name: "\u6176\u9577",
    name_short: "Kei",
    timestamp: /* @__PURE__ */ new Date("1596-10-27T00:00:00")
  },
  {
    name: "\u6587\u7984",
    name_short: "Bu",
    timestamp: /* @__PURE__ */ new Date("1592-12-08T00:00:00")
  },
  {
    name: "\u5929\u6B63",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("1573-08-25T00:00:00")
  },
  {
    name: "\u5143\u4E80",
    name_short: "Gen",
    timestamp: /* @__PURE__ */ new Date("1570-04-23T00:00:00")
  },
  {
    name: "\u6C38\u7984",
    name_short: "Eiroku",
    timestamp: /* @__PURE__ */ new Date("1558-02-28T00:00:00")
  },
  {
    name: "\u5F18\u6CBB",
    name_short: "Koji",
    timestamp: /* @__PURE__ */ new Date("1555-10-23T00:00:00")
  },
  {
    name: "\u5929\u6587",
    name_short: "Tenbun",
    timestamp: /* @__PURE__ */ new Date("1532-07-29T00:00:00")
  },
  {
    name: "\u4EAB\u7984",
    name_short: "Kyoroku",
    timestamp: /* @__PURE__ */ new Date("1528-08-20T00:00:00")
  },
  {
    name: "\u5927\u6C38",
    name_short: "D",
    timestamp: /* @__PURE__ */ new Date("1521-08-23T00:00:00")
  },
  {
    name: "\u6C38\u6B63",
    name_short: "Eisho",
    timestamp: /* @__PURE__ */ new Date("1504-02-29T00:00:00")
  },
  {
    name: "\u6587\u660E",
    name_short: "Bunmei",
    timestamp: /* @__PURE__ */ new Date("1469-04-28T00:00:00")
  },
  {
    name: "\u5FDC\u4EC1",
    name_short: "Onin",
    timestamp: /* @__PURE__ */ new Date("1467-02-01T00:00:00")
  },
  {
    name: "\u5EB7\u6B63",
    name_short: "Kosho",
    timestamp: /* @__PURE__ */ new Date("1455-07-25T00:00:00")
  },
  {
    name: "\u9577\u7984",
    name_short: "Choroku",
    timestamp: /* @__PURE__ */ new Date("1457-09-06T00:00:00")
  },
  {
    name: "\u4EAB\u5FB3",
    name_short: "Kyotoku",
    timestamp: /* @__PURE__ */ new Date("1451-08-29T00:00:00")
  },
  {
    name: "\u6587\u5B89",
    name_short: "Bunan",
    timestamp: /* @__PURE__ */ new Date("1444-02-05T00:00:00")
  },
  {
    name: "\u5609\u5409",
    name_short: "Kakitsu",
    timestamp: /* @__PURE__ */ new Date("1441-02-20T00:00:00")
  },
  {
    name: "\u6C38\u4EAB",
    name_short: "Eikyo",
    timestamp: /* @__PURE__ */ new Date("1429-09-06T00:00:00")
  },
  {
    name: "\u5FDC\u6C38",
    name_short: "Oei",
    timestamp: /* @__PURE__ */ new Date("1394-07-05T00:00:00")
  },
  {
    name: "\u660E\u5FB3",
    name_short: "Meitoku",
    timestamp: /* @__PURE__ */ new Date("1392-03-19T00:00:00")
  },
  {
    name: "\u5143\u4E2D",
    name_short: "Genchu",
    timestamp: /* @__PURE__ */ new Date("1384-04-28T00:00:00")
  },
  {
    name: "\u5F18\u548C",
    name_short: "Kowa",
    timestamp: /* @__PURE__ */ new Date("1381-02-09T00:00:00")
  },
  {
    name: "\u5929\u6388",
    name_short: "Tensho",
    timestamp: /* @__PURE__ */ new Date("1375-06-26T00:00:00")
  },
  {
    name: "\u8C9E\u6CBB",
    name_short: "Jiju",
    timestamp: /* @__PURE__ */ new Date("1362-09-18T00:00:00")
  },
  {
    name: "\u89B3\u5FDC",
    name_short: "Kanno",
    timestamp: /* @__PURE__ */ new Date("1350-02-28T00:00:00")
  },
  {
    name: "\u6B63\u5E73",
    name_short: "Shohei",
    timestamp: /* @__PURE__ */ new Date("1346-02-22T00:00:00")
  },
  {
    name: "\u5EF6\u6587",
    name_short: "Enbun",
    timestamp: /* @__PURE__ */ new Date("1356-03-26T00:00:00")
  },
  {
    name: "\u8208\u56FD",
    name_short: "Koko",
    timestamp: /* @__PURE__ */ new Date("1340-08-26T00:00:00")
  },
  {
    name: "\u5EFA\u6B66",
    name_short: "Kenmu",
    timestamp: /* @__PURE__ */ new Date("1333-08-12T00:00:00")
  },
  {
    name: "\u5143\u5F18",
    name_short: "Genko",
    timestamp: /* @__PURE__ */ new Date("1331-02-28T00:00:00")
  },
  {
    name: "\u6B63\u548C",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1312-06-27T00:00:00")
  },
  {
    name: "\u5FB3\u6CBB",
    name_short: "To",
    timestamp: /* @__PURE__ */ new Date("1306-11-11T00:00:00")
  },
  {
    name: "\u5609\u5143",
    name_short: "Ka",
    timestamp: /* @__PURE__ */ new Date("1303-09-16T00:00:00")
  },
  {
    name: "\u5F18\u5B89",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("1278-04-25T00:00:00")
  },
  {
    name: "\u6B63\u5609",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1257-03-21T00:00:00")
  },
  {
    name: "\u5B9D\u6CBB",
    name_short: "Ho",
    timestamp: /* @__PURE__ */ new Date("1247-07-16T00:00:00")
  },
  {
    name: "\u5BDB\u5143",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("1243-02-26T00:00:00")
  },
  {
    name: "\u4EC1\u6CBB",
    name_short: "Ni",
    timestamp: /* @__PURE__ */ new Date("1240-02-01T00:00:00")
  },
  {
    name: "\u5EF6\u5FDC",
    name_short: "En",
    timestamp: /* @__PURE__ */ new Date("1239-02-08T00:00:00")
  },
  {
    name: "\u5609\u7984",
    name_short: "Ka",
    timestamp: /* @__PURE__ */ new Date("1225-05-28T00:00:00")
  },
  {
    name: "\u5B89\u8C9E",
    name_short: "An",
    timestamp: /* @__PURE__ */ new Date("1227-07-15T00:00:00")
  },
  {
    name: "\u5143\u4EC1",
    name_short: "Gen",
    timestamp: /* @__PURE__ */ new Date("1224-05-02T00:00:00")
  },
  {
    name: "\u8C9E\u5FDC",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1222-04-27T00:00:00")
  },
  {
    name: "\u5EFA\u4E45",
    name_short: "Ke",
    timestamp: /* @__PURE__ */ new Date("1190-04-12T00:00:00")
  },
  {
    name: "\u6587\u6CBB",
    name_short: "Bun",
    timestamp: /* @__PURE__ */ new Date("1185-09-09T00:00:00")
  },
  {
    name: "\u5BFF\u6C38",
    name_short: "Jo",
    timestamp: /* @__PURE__ */ new Date("1182-04-27T00:00:00")
  },
  {
    name: "\u990A\u548C",
    name_short: "Yo",
    timestamp: /* @__PURE__ */ new Date("1181-03-09T00:00:00")
  },
  {
    name: "\u6CBB\u627F",
    name_short: "Ji",
    timestamp: /* @__PURE__ */ new Date("1177-08-04T00:00:00")
  },
  {
    name: "\u5B89\u5143",
    name_short: "An",
    timestamp: /* @__PURE__ */ new Date("1175-08-16T00:00:00")
  },
  {
    name: "\u5609\u5FDC",
    name_short: "Ka",
    timestamp: /* @__PURE__ */ new Date("1169-04-08T00:00:00")
  },
  {
    name: "\u627F\u5B89",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1171-07-28T00:00:00")
  },
  {
    name: "\u9577\u5BDB",
    name_short: "Cho",
    timestamp: /* @__PURE__ */ new Date("1163-09-25T00:00:00")
  },
  {
    name: "\u6C38\u4E07",
    name_short: "Ei",
    timestamp: /* @__PURE__ */ new Date("1160-03-09T00:00:00")
  },
  {
    name: "\u4FDD\u5143",
    name_short: "Ho",
    timestamp: /* @__PURE__ */ new Date("1156-05-27T00:00:00")
  },
  {
    name: "\u4EC1\u5E73",
    name_short: "Ni",
    timestamp: /* @__PURE__ */ new Date("1151-03-19T00:00:00")
  },
  {
    name: "\u4E45\u5B89",
    name_short: "Kyu",
    timestamp: /* @__PURE__ */ new Date("1145-04-25T00:00:00")
  },
  {
    name: "\u5929\u990A",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("1144-04-03T00:00:00")
  },
  {
    name: "\u5EB7\u6CBB",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("1142-06-01T00:00:00")
  },
  {
    name: "\u4FDD\u5EF6",
    name_short: "Ho",
    timestamp: /* @__PURE__ */ new Date("1135-01-23T00:00:00")
  },
  {
    name: "\u9577\u627F",
    name_short: "Cho",
    timestamp: /* @__PURE__ */ new Date("1132-03-14T00:00:00")
  },
  {
    name: "\u5927\u6CBB",
    name_short: "Da",
    timestamp: /* @__PURE__ */ new Date("1126-02-24T00:00:00")
  },
  {
    name: "\u5929\u627F",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("1131-02-21T00:00:00")
  },
  {
    name: "\u6C38\u4E45",
    name_short: "Ei",
    timestamp: /* @__PURE__ */ new Date("1113-07-13T00:00:00")
  },
  {
    name: "\u5929\u6C38",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("1110-07-29T00:00:00")
  },
  {
    name: "\u9577\u6CBB",
    name_short: "Cho",
    timestamp: /* @__PURE__ */ new Date("1104-08-29T00:00:00")
  },
  {
    name: "\u5609\u627F",
    name_short: "Ka",
    timestamp: /* @__PURE__ */ new Date("1108-02-09T00:00:00")
  },
  {
    name: "\u5EB7\u548C",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("1099-08-28T00:00:00")
  },
  {
    name: "\u627F\u5FB3",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1097-01-03T00:00:00")
  },
  {
    name: "\u5609\u4FDD",
    name_short: "Ka",
    timestamp: /* @__PURE__ */ new Date("1094-08-26T00:00:00")
  },
  {
    name: "\u6C38\u9577",
    name_short: "Ei",
    timestamp: /* @__PURE__ */ new Date("1096-03-12T00:00:00")
  },
  {
    name: "\u5EB7\u4FDD",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("1092-12-15T00:00:00")
  },
  {
    name: "\u5BDB\u6CBB",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("1087-11-16T00:00:00")
  },
  {
    name: "\u5FDC\u5FB3",
    name_short: "O",
    timestamp: /* @__PURE__ */ new Date("1084-02-07T00:00:00")
  },
  {
    name: "\u6C38\u4FDD",
    name_short: "Ei",
    timestamp: /* @__PURE__ */ new Date("1081-02-07T00:00:00")
  },
  {
    name: "\u627F\u4FDD",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("1074-08-23T00:00:00")
  },
  {
    name: "\u5EB7\u5E73",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("1068-09-01T00:00:00")
  },
  {
    name: "\u6CBB\u66A6",
    name_short: "Ji",
    timestamp: /* @__PURE__ */ new Date("1065-08-11T00:00:00")
  },
  {
    name: "\u5EF6\u4E45",
    name_short: "En",
    timestamp: /* @__PURE__ */ new Date("1060-07-13T00:00:00")
  },
  {
    name: "\u5EB7\u5E73",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("1058-08-29T00:00:00")
  },
  {
    name: "\u5929\u559C",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("1053-08-24T00:00:00")
  },
  {
    name: "\u6C38\u627F",
    name_short: "Ei",
    timestamp: /* @__PURE__ */ new Date("1046-05-14T00:00:00")
  },
  {
    name: "\u5BDB\u5FB3",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("1044-07-22T00:00:00")
  },
  {
    name: "\u9577\u5143",
    name_short: "Cho",
    timestamp: /* @__PURE__ */ new Date("1028-05-17T00:00:00")
  },
  {
    name: "\u4E07\u5BFF",
    name_short: "Man",
    timestamp: /* @__PURE__ */ new Date("1024-07-13T00:00:00")
  },
  {
    name: "\u9577\u548C",
    name_short: "Cho",
    timestamp: /* @__PURE__ */ new Date("1012-08-08T00:00:00")
  },
  {
    name: "\u9577\u5FB3",
    name_short: "Cho",
    timestamp: /* @__PURE__ */ new Date("995-02-22T00:00:00")
  },
  {
    name: "\u6C38\u5EF6",
    name_short: "Ei",
    timestamp: /* @__PURE__ */ new Date("987-08-27T00:00:00")
  },
  {
    name: "\u5BDB\u548C",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("985-04-27T00:00:00")
  },
  {
    name: "\u5929\u5143",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("978-12-17T00:00:00")
  },
  {
    name: "\u5BDB\u5F18",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("1004-08-08T00:00:00")
  },
  {
    name: "\u6B63\u66A6",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("990-08-08T00:00:00")
  },
  {
    name: "\u5929\u5FB3",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("947-04-22T00:00:00")
  },
  {
    name: "\u5FDC\u548C",
    name_short: "O",
    timestamp: /* @__PURE__ */ new Date("961-08-16T00:00:00")
  },
  {
    name: "\u5EB7\u548C",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("964-08-08T00:00:00")
  },
  {
    name: "\u9577\u4FDD",
    name_short: "Cho",
    timestamp: /* @__PURE__ */ new Date("998-12-07T00:00:00")
  },
  {
    name: "\u9577\u5BDB",
    name_short: "Cho",
    timestamp: /* @__PURE__ */ new Date("1111-02-09T00:00:00")
  },
  {
    name: "\u5929\u66A6",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("947-11-21T00:00:00")
  },
  {
    name: "\u5929\u6176",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("938-05-22T00:00:00")
  },
  {
    name: "\u5EF6\u9577",
    name_short: "En",
    timestamp: /* @__PURE__ */ new Date("923-04-11T00:00:00")
  },
  {
    name: "\u627F\u5E73",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("931-04-26T00:00:00")
  },
  {
    name: "\u5EF6\u559C",
    name_short: "En",
    timestamp: /* @__PURE__ */ new Date("901-07-15T00:00:00")
  },
  {
    name: "\u660C\u6CF0",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("898-04-26T00:00:00")
  },
  {
    name: "\u5BDB\u5E73",
    name_short: "Kan",
    timestamp: /* @__PURE__ */ new Date("889-04-27T00:00:00")
  },
  {
    name: "\u5143\u6176",
    name_short: "Gen",
    timestamp: /* @__PURE__ */ new Date("877-04-16T00:00:00")
  },
  {
    name: "\u4EC1\u5BFF",
    name_short: "Ni",
    timestamp: /* @__PURE__ */ new Date("851-07-16T00:00:00")
  },
  {
    name: "\u5609\u7965",
    name_short: "Ka",
    timestamp: /* @__PURE__ */ new Date("848-06-13T00:00:00")
  },
  {
    name: "\u627F\u548C",
    name_short: "Sho",
    timestamp: /* @__PURE__ */ new Date("834-01-03T00:00:00")
  },
  {
    name: "\u5929\u9577",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("824-02-08T00:00:00")
  },
  {
    name: "\u5F18\u4EC1",
    name_short: "Ko",
    timestamp: /* @__PURE__ */ new Date("810-10-20T00:00:00")
  },
  {
    name: "\u5927\u540C",
    name_short: "Da",
    timestamp: /* @__PURE__ */ new Date("806-05-18T00:00:00")
  },
  {
    name: "\u5EF6\u66A6",
    name_short: "En",
    timestamp: /* @__PURE__ */ new Date("782-08-19T00:00:00")
  },
  {
    name: "\u5929\u5FDC",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("781-01-01T00:00:00")
  },
  {
    name: "\u5B9D\u4E80",
    name_short: "Ho",
    timestamp: /* @__PURE__ */ new Date("770-10-01T00:00:00")
  },
  {
    name: "\u795E\u8B77\u666F\u96F2",
    name_short: "Shin",
    timestamp: /* @__PURE__ */ new Date("767-08-16T00:00:00")
  },
  {
    name: "\u5929\u5E73\u795E\u8B77",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("765-01-07T00:00:00")
  },
  {
    name: "\u5929\u5E73\u5B9D\u5B57",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("757-08-18T00:00:00")
  },
  {
    name: "\u5929\u5E73\u52DD\u5B9D",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("749-07-02T00:00:00")
  },
  {
    name: "\u5929\u5E73\u611F\u5B9D",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("749-04-14T00:00:00")
  },
  {
    name: "\u5929\u5E73",
    name_short: "Ten",
    timestamp: /* @__PURE__ */ new Date("729-08-05T00:00:00")
  },
  {
    name: "\u795E\u4E80",
    name_short: "Shin",
    timestamp: /* @__PURE__ */ new Date("724-02-04T00:00:00")
  },
  {
    name: "\u990A\u8001",
    name_short: "Yo",
    timestamp: /* @__PURE__ */ new Date("717-11-17T00:00:00")
  },
  {
    name: "\u970A\u4E80",
    name_short: "Rei",
    timestamp: /* @__PURE__ */ new Date("715-09-03T00:00:00")
  },
  {
    name: "\u548C\u9285",
    name_short: "Wa",
    timestamp: /* @__PURE__ */ new Date("708-01-11T00:00:00")
  },
  {
    name: "\u6176\u96F2",
    name_short: "Kei",
    timestamp: /* @__PURE__ */ new Date("704-05-10T00:00:00")
  },
  {
    name: "\u5927\u5B9D",
    name_short: "Tai",
    timestamp: /* @__PURE__ */ new Date("701-03-21T00:00:00")
  },
  {
    name: "\u6731\u9CE5",
    name_short: "Su",
    timestamp: /* @__PURE__ */ new Date("686-08-14T00:00:00")
  },
  {
    name: "\u767D\u96C9",
    name_short: "Haku",
    timestamp: /* @__PURE__ */ new Date("650-03-22T00:00:00")
  },
  {
    name: "\u5927\u5316",
    name_short: "Tai",
    timestamp: /* @__PURE__ */ new Date("645-06-19T00:00:00")
  }
];

// src/japanese-date.ts
var JapaneseDate = {
  dateToJpn: function(targetDate, formatKey) {
    for (let i = 0; i < eraTypes.length; i++) {
      const obj = eraTypes[i];
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
            displayEra = "\u5143";
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
  parseStringToDate: function(dateString) {
    let regExp;
    if (dateString.match(/^\d{4}\/?\d{1,2}\/?\d{1,2}/)) {
      const data = dateString.match(
        /^(\d{4})\/?(\d{1,2})\/?(\d{1,2})/
      );
      return new Date(
        parseInt(data[1], 10),
        parseInt(data[2], 10) - 1,
        parseInt(data[3], 10),
        0,
        0,
        0,
        0
      );
    }
    regExp = new RegExp(
      "^([" + this.getEraNameList(2).join("|") + "]+)(\\d{1,2})\\/?(\\d{1,2})\\/?(\\d{1,2})+$"
    );
    if (dateString.match(regExp)) {
      const data = dateString.match(regExp);
      for (let i = 0; i < eraTypes.length; i++) {
        const obj = eraTypes[i];
        if (data[1] == obj.name_short) {
          const newYear = parseInt(data[2], 10) + (obj.timestamp.getUTCFullYear() - 1);
          return new Date(
            newYear,
            parseInt(data[3], 10) - 1,
            parseInt(data[4], 10),
            0,
            0,
            0,
            0
          );
        }
      }
    }
    if (dateString.match(/^\d{4}[年]\d{1,2}[月]\d{1,2}[日]/)) {
      const data = dateString.match(
        /^(\d{4})[年](\d{1,2})[月](\d{1,2})[日]/
      );
      return new Date(
        parseInt(data[1], 10),
        parseInt(data[2], 10) - 1,
        parseInt(data[3], 10),
        0,
        0,
        0,
        0
      );
    }
    regExp = new RegExp(
      "^([" + this.getEraNameList(1).join("|") + "]+)(\\d{1,3})\u5E74(\\d{1,2})[\u6708](\\d{1,2})[\u65E5]+$"
    );
    if (dateString.match(regExp)) {
      const data = dateString.match(regExp);
      for (let i = 0; i < eraTypes.length; i++) {
        const obj = eraTypes[i];
        if (data[1] == obj.name) {
          const newYear = parseInt(data[2], 10) + (obj.timestamp.getUTCFullYear() - 1);
          return new Date(
            newYear,
            parseInt(data[3], 10) - 1,
            parseInt(data[4], 10),
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
  format: function(date, format) {
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
  getEraNameList: function(type) {
    const list = [];
    for (let i = 0; i < eraTypes.length; i++) {
      const obj = eraTypes[i];
      if (type === 1) list.push(obj.name);
      if (type === 2) list.push(obj.name_short);
    }
    return list;
  }
};
var japanese_date_default = JapaneseDate;
