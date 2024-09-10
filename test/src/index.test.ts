import JapaneseDate from "../../src";

test("ConvertJapaneseDate", () => {
  expect(JapaneseDate.format(new Date("2024-09-09"), "Jk年MM月DD日")).toBe(
    "令和06年09月09日"
  );
  expect(
    JapaneseDate.format(
      new Date("2024-09-09 20:55:32"),
      "Jk年MM月DD日 hh:mm:ss"
    )
  ).toBe("令和06年09月09日 20:55:32");
  expect(JapaneseDate.format(new Date("1989-10-10"), "bK年MM月DD日")).toBe(
    "H01年10月10日"
  );
  expect(JapaneseDate.format(new Date("1989-10-10"), "Jk年MM月DD日")).toBe(
    "平成元年10月10日"
  );
  expect(JapaneseDate.format(new Date("600-10-10"), "Jk年MM月DD日")).toBe(
    "年10月10日"
  );
  expect(JapaneseDate.format(new Date("1985-04-01T12:31:15"), null)).toBe(
    "1985-04-01 12:31:15"
  );
});

test("DateToJpn", () => {
  const date1 = JapaneseDate.parseStringToDate("令和1年12月31日");
  const expected1 = date1 instanceof Date ? date1.toTimeString() : "";
  expect(expected1).toBe(new Date("2019-12-31T00:00:00").toTimeString());

  const date2 = JapaneseDate.parseStringToDate("20010203");
  const expected2 = date2 instanceof Date ? date2.toTimeString() : "";
  expect(expected2).toBe(new Date("2001-02-03T00:00:00").toTimeString());

  const date3 = JapaneseDate.parseStringToDate("H210203");
  const expected3 = date3 instanceof Date ? date3.toTimeString() : "";
  expect(expected3).toBe(new Date("2009-02-03T00:00:00").toTimeString());

  const date4 = JapaneseDate.parseStringToDate("2001年02月03日");
  const expected4 = date4 instanceof Date ? date4.toTimeString() : "";
  expect(expected4).toBe(new Date("2001-02-03T00:00:00").toTimeString());

  const date5 = JapaneseDate.parseStringToDate("abcde");
  const expected5 = date5 instanceof Date ? date5.toTimeString() : "";
  expect(expected5).toBe("");
});
