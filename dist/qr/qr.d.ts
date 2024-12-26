type AllowedData = number | string | Buffer;
export declare enum Encoding {
    NUMERIC = "NUMERIC",
    ALPHA_NUMERIC = "ALPHA_NUMERIC",
    KANJI = "KANJI",
    BINARY = "KANJI"
}
export declare enum ErrorCorrection {
    L = "L",
    M = "M",
    Q = "Q",
    H = "H"
}
export declare class QR {
    static validateData(data: AllowedData): AllowedData;
    static validateVersion(version: any): any;
    static validateEncoding(encoding: any): any;
    static validateErrorCorrection(errorCorrection: any): any;
    static getDefaultEncodingFromData(data: AllowedData): Encoding.NUMERIC | Encoding.ALPHA_NUMERIC;
    private data;
    private encoding;
    private version;
    private errorCorrection;
    constructor(data: AllowedData, options?: {});
    toString(): {
        data: AllowedData;
        encoding: Encoding;
        version: number;
        errorCorrection: ErrorCorrection;
    };
}
export {};
