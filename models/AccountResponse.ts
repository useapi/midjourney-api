export class AccountResponse {
    'email': string;
    'created': string;
    'name': string;
    'verified': string;
    'sub': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "string",
            "format": ""
        },
        {
            "name": "sub",
            "baseName": "sub",
            "type": "string",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return AccountResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

