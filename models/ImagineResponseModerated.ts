export class ImagineResponseModerated {
    'error': string;
    'jobid': string;
    'status': ImagineResponseModeratedStatusEnum;
    'code': ImagineResponseModeratedCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "jobid",
            "baseName": "jobid",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ImagineResponseModeratedStatusEnum",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "ImagineResponseModeratedCodeEnum",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return ImagineResponseModerated.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ImagineResponseModeratedStatusEnum {
    Moderated = 'moderated'
}
export enum ImagineResponseModeratedCodeEnum {
    NUMBER_422 = 422
}

