export class ButtonResponseErrorUpscaled {
    'error': string;
    'button': ButtonResponseErrorUpscaledButtonEnum;
    'jobid': string;
    'code': ButtonResponseErrorUpscaledCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "button",
            "baseName": "button",
            "type": "ButtonResponseErrorUpscaledButtonEnum",
            "format": ""
        },
        {
            "name": "jobid",
            "baseName": "jobid",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "ButtonResponseErrorUpscaledCodeEnum",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return ButtonResponseErrorUpscaled.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ButtonResponseErrorUpscaledButtonEnum {
    U1 = 'U1',
    U2 = 'U2',
    U3 = 'U3',
    U4 = 'U4'
}
export enum ButtonResponseErrorUpscaledCodeEnum {
    NUMBER_409 = 409
}

