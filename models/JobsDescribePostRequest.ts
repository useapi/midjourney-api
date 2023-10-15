export class JobsDescribePostRequest {
    /**
    * Must contain valid URL image link
    */
    'describeUrl': string;
    /**
    * Discord token
    */
    'discord': string;
    /**
    * Discord server id
    */
    'server': string;
    /**
    * Discord channel id
    */
    'channel': string;
    /**
    * Optional Maximum Concurrent Jobs for current Midjourney subscription
    */
    'maxJobs'?: number;
    /**
    * Optional callback URL, API will call the provided replyUrl once generation completed
    */
    'replyUrl'?: string;
    /**
    * Optional reference id which will be stored and returned along with this job response / result
    */
    'replyRef'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "describeUrl",
            "baseName": "describeUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "discord",
            "baseName": "discord",
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
            "name": "channel",
            "baseName": "channel",
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
            "name": "replyUrl",
            "baseName": "replyUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "replyRef",
            "baseName": "replyRef",
            "type": "string",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return JobsDescribePostRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

