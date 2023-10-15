export class ResponseError {
    'error': string;
    'code': ResponseErrorCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "ResponseErrorCodeEnum",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return ResponseError.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ResponseErrorCodeEnum {
    NUMBER_400 = 400,
    NUMBER_401 = 401,
    NUMBER_404 = 404,
    NUMBER_412 = 412,
    NUMBER_413 = 413
}

