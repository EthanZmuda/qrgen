"use strict";
// import * as fs from 'fs'
// import { Jimp, JimpInstance } from 'jimp'
Object.defineProperty(exports, "__esModule", { value: true });
exports.qrgen = qrgen;
const tslib_1 = require("tslib");
const qr_1 = require("./qr");
// async function jimpToPng(jimp: JimpInstance) {
//     return await jimp.formats[4].encode(jimp.bitmap)
// }
function qrgen() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // const size = 21;
        // const blankJimp = new Jimp({width: size, height: size, color: 0xffffffff })
        // jimpToPng(blankJimp)
        // const unformattedData = new Uint8Array(blankJimp.bitmap.data)
        // const data: number[][][] = []
        // for (let i = 0; i < size; i++) {
        //     const row: number[][] = []
        //     for (let j = 0; j < size; j++) {
        //         const pixel: number[] = []
        //         for (let k = 0; k < 4; k++) {
        //             pixel[k] = unformattedData[(i*size + j)*4 + k]
        //         }
        //         row[j] = pixel
        //     }
        //     data[i] = row
        // }
        // console.log(data)
        const qr = new qr_1.QR("Hello world!", { encoding: "ajwdhawjkdakhw" });
        console.log(qr);
    });
}
qrgen();
//# sourceMappingURL=qrgen.js.map