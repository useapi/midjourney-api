export class ResponseMaxJobs {
    'error': string;
    'executingJobs': Array<string>;
    'code': ResponseMaxJobsCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "executingJobs",
            "baseName": "executingJobs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "ResponseMaxJobsCodeEnum",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return ResponseMaxJobs.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ResponseMaxJobsCodeEnum {
    NUMBER_429 = 429
}

