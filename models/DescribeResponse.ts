import { JobResponseEmbedsInner } from '../models/JobResponseEmbedsInner';

export class DescribeResponse {
    /**
    * Use returned jobid value to retrieve job status and results
    */
    'jobid': string;
    'verb': DescribeResponseVerbEnum;
    'status': DescribeResponseStatusEnum;
    'created': string;
    'updated': string;
    'describeUrl': string;
    'channel': string;
    'server': string;
    'maxJobs': number;
    'messageId': string;
    /**
    * Contains message generated by Midjourney reflecting current generation parameters and progress
    */
    'content': string;
    /**
    * Contains additional information
    */
    'embeds'?: Array<JobResponseEmbedsInner>;
    'timestamp': string;
    'code': DescribeResponseCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "jobid",
            "baseName": "jobid",
            "type": "string",
            "format": ""
        },
        {
            "name": "verb",
            "baseName": "verb",
            "type": "DescribeResponseVerbEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DescribeResponseStatusEnum",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string",
            "format": ""
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "string",
            "format": ""
        },
        {
            "name": "describeUrl",
            "baseName": "describeUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string",
            "format": ""
        },
        {
            "name": "server",
            "baseName": "server",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxJobs",
            "baseName": "maxJobs",
            "type": "number",
            "format": ""
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "embeds",
            "baseName": "embeds",
            "type": "Array<JobResponseEmbedsInner>",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "DescribeResponseCodeEnum",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return DescribeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DescribeResponseVerbEnum {
    Describe = 'describe'
}
export enum DescribeResponseStatusEnum {
    Started = 'started',
    Completed = 'completed'
}
export enum DescribeResponseCodeEnum {
    NUMBER_200 = 200
}

