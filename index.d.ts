interface bloboptions {
    type
}

interface blobutilstatic {
    createBlob(parts: Array<any>, options: bloboptions);
    createObjectURL(blob: Blob);
    revokeObjectURL(url: string);
    blobToBinaryString(blob: Blob): PromiseLike<string>;
    base64StringToBlob(base64: string, type?: string): PromiseLike<Blob>;
    binaryStringToBlob(binary: string, type?: string): PromiseLike<Blob>;
    blobToBase64String(blob: Blob): PromiseLike<string>;
    dataURLToBlob(dataURL: string): PromiseLike<Blob>;
    imgSrcToDataURL(src: string, type?: string, crossOrigin?: string, quality?: number): PromiseLike<string>;
    canvasToBlob(canvas: string, type?: string, quality?: number): PromiseLike<Blob>;
    imgSrcToBlob(src: string, type?: string, crossOrigin?: string, quality?: number): PromiseLike<Blob>;
    arrayBufferToBlob(buffer: ArrayBuffer, type?: string): PromiseLike<Blob>;
    blobToArrayBuffer(blob: Blob): PromiseLike<ArrayBuffer>;
}

declare var blobutil: blobutilstatic;

export = blobutil;
