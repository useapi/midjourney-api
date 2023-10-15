export class JobResponseAttachmentsInner {
    'proxyUrl'?: string;
    'size'?: number;
    'url'?: string;
    'width'?: number;
    'contentType'?: string;
    'filename'?: string;
    'height'?: number;
    'id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "proxyUrl",
            "baseName": "proxy_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
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
            "name": "contentType",
            "baseName": "content_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return JobResponseAttachmentsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

