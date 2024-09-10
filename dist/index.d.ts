declare const JapaneseDate: {
    dateToJpn: (targetDate: Date, formatKey: string) => string;
    /**
     * 文字列をDateオブジェクトに変換
     * @param string dateString
     * @returns {*}
     */
    parseStringToDate: (dateString: string) => Date | boolean;
    /**
     * 日付のフォーマット
     * @param Date date
     * @param string|null format
     * @returns string
     */
    format: (date: Date, format: string | null) => string;
    /**
     * 元号の取得
     * @param type
     * @returns string[]
     */
    getEraNameList: (type: number) => string[];
};

export { JapaneseDate as default };
