import { JobResponseEmbedsInnerImage } from '../models/JobResponseEmbedsInnerImage';

export class JobResponseEmbedsInner {
    'type'?: string;
    'description'?: string;
    'image'?: JobResponseEmbedsInnerImage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "JobResponseEmbedsInnerImage",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return JobResponseEmbedsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

