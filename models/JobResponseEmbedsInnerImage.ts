export class JobResponseEmbedsInnerImage {
    'url'?: string;
    'proxyUrl'?: string;
    'width'?: number;
    'height'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "proxyUrl",
            "baseName": "proxy_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return JobResponseEmbedsInnerImage.attributeTypeMap;
    }

    public constructor() {
    }
}

