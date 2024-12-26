
// const BLACK_PIXEL = [0x00, 0x00, 0x00, 0xFF]
// const WHITE_PIXEL = [0xFF, 0xFF, 0xFF, 0xFF]

type AllowedData = number | string | Buffer

export enum Encoding {
    NUMERIC = "NUMERIC",
    ALPHA_NUMERIC = "ALPHA_NUMERIC",
    KANJI = "KANJI",
    BINARY = "KANJI"
}

export enum ErrorCorrection {
    L = "L",
    M = "M",
    Q = "Q",
    H = "H"
}

const DEFAULT_VERSION: number = 5
const DEFAULT_ENCODING: Encoding = Encoding.ALPHA_NUMERIC
const DEFAULT_ERROR_CORRECTION: ErrorCorrection = ErrorCorrection.M


export class QR {
    static validateData(data: AllowedData) {
        return data
    }

    static validateVersion(version: any) {
        try { version as number } catch { throw Error('version must be integer between awdawdaw1 and 40 (inclusive)') }
        if (
            version % 1 !== 0
            || version < 1
            || version > 40
        ) throw Error('version must be integer between 1 and 40 (inclusive)')
        return version
    }

    static validateEncoding(encoding: any) {
        try { encoding as ErrorCorrection } catch { throw Error('encoding must be of type Encoding') }
        return encoding
    }

    static validateErrorCorrection(errorCorrection: any) {
        try { errorCorrection as ErrorCorrection } catch { throw Error('errorCorrection must be of type ErrorCorrection') }
        return errorCorrection
    }

    private data: AllowedData
    private encoding: Encoding
    private version: number
    private errorCorrection: ErrorCorrection

    /* valid options:
     * - version
     * - encoding
     * - errorCorrection
     */
    constructor(data: AllowedData, options: {} = {}) {
        this.data = this.validateData(data)
        this.version = 'version' in options ? QR.validateVersion(options.version) : DEFAULT_VERSION
        this.encoding = 'encoding' in options ? QR.validateEncoding(options.encoding) : DEFAULT_ENCODING
        this.errorCorrection = 'errorCorrection' in options ? QR.validateErrorCorrection(options.errorCorrection) : DEFAULT_ERROR_CORRECTION
    }

    private validateData(data: AllowedData) {
        if (!isNaN(Number(data))) return data
        if (data instanceof Buffer) return data
        throw Error('data is not of an allowable type')
    }

    public toString() {
        return {
            data: this.data,
            encoding: this.encoding,
            version: this.version,
            errorCorrection: this.errorCorrection
        }
    }
}