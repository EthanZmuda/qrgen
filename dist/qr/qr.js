"use strict";
// const BLACK_PIXEL = [0x00, 0x00, 0x00, 0xFF]
// const WHITE_PIXEL = [0xFF, 0xFF, 0xFF, 0xFF]
Object.defineProperty(exports, "__esModule", { value: true });
exports.QR = exports.ErrorCorrection = exports.Encoding = void 0;
var Encoding;
(function (Encoding) {
    Encoding["NUMERIC"] = "NUMERIC";
    Encoding["ALPHA_NUMERIC"] = "ALPHA_NUMERIC";
    Encoding["KANJI"] = "KANJI";
    Encoding["BINARY"] = "KANJI";
})(Encoding || (exports.Encoding = Encoding = {}));
var ErrorCorrection;
(function (ErrorCorrection) {
    ErrorCorrection["L"] = "L";
    ErrorCorrection["M"] = "M";
    ErrorCorrection["Q"] = "Q";
    ErrorCorrection["H"] = "H";
})(ErrorCorrection || (exports.ErrorCorrection = ErrorCorrection = {}));
const DEFAULT_VERSION = 5;
const DEFAULT_ERROR_CORRECTION = ErrorCorrection.M;
class QR {
    static validateData(data) {
        return data;
    }
    static validateVersion(version) {
        try {
            version;
        }
        catch (_a) {
            throw Error('version must be integer between awdawdaw1 and 40 (inclusive)');
        }
        if (version % 1 !== 0
            || version < 1
            || version > 40)
            throw Error('version must be integer between 1 and 40 (inclusive)');
        return version;
    }
    static validateEncoding(encoding) {
        try {
            encoding;
        }
        catch (_a) {
            throw Error('encoding must be of type Encoding');
        }
        return encoding;
    }
    static validateErrorCorrection(errorCorrection) {
        try {
            errorCorrection;
        }
        catch (_a) {
            throw Error('errorCorrection must be of type ErrorCorrection');
        }
        return errorCorrection;
    }
    static getDefaultEncodingFromData(data) {
        if (data)
            return Encoding.ALPHA_NUMERIC;
        return Encoding.NUMERIC;
    }
    constructor(data, options = {}) {
        this.data = QR.validateData(data);
        this.version = 'version' in options ? QR.validateVersion(options.version) : DEFAULT_VERSION;
        this.encoding = 'encoding' in options ? QR.validateEncoding(options.encoding) : QR.getDefaultEncodingFromData(data);
        this.errorCorrection = 'errorCorrection' in options ? QR.validateErrorCorrection(options.errorCorrection) : DEFAULT_ERROR_CORRECTION;
    }
    toString() {
        return {
            data: this.data,
            encoding: this.encoding,
            version: this.version,
            errorCorrection: this.errorCorrection
        };
    }
}
exports.QR = QR;
//# sourceMappingURL=qr.js.map