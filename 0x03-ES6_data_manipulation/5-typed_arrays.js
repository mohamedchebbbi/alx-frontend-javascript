/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const dv = new DataView(buffer);
    // eslint-disable-next-line indent
    if (position >= length) throw new Error('Position outside range');
    dv.setInt8(position, value);
    // eslint-disable-next-line indent
    // eslint-disable-next-line indent
    return dv;
  }