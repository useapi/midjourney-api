export class JobsButtonPostRequest {
    /**
    * jobid of successfully completed (status set to completed) jobs/imagine or jobs/button job
    */
    'jobid': string;
    /**
    * button from buttons array of job referenced via jobid
    */
    'button': JobsButtonPostRequestButtonEnum;
    /**
    * Optional Discord token, if provided will override discord value of referenced jobid
    */
    'discord'?: string;
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
            "name": "jobid",
            "baseName": "jobid",
            "type": "string",
            "format": ""
        },
        {
            "name": "button",
            "baseName": "button",
            "type": "JobsButtonPostRequestButtonEnum",
            "format": ""
        },
        {
            "name": "discord",
            "baseName": "discord",
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
        return JobsButtonPostRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum JobsButtonPostRequestButtonEnum {
    U1 = 'U1',
    U2 = 'U2',
    U3 = 'U3',
    U4 = 'U4',
    V1 = 'V1',
    V2 = 'V2',
    V3 = 'V3',
    V4 = 'V4',
    ButtonLeft = '⬅️',
    ButtonRight = '➡️',
    ButtonUp = '⬆️',
    ButtonDown = '⬇️',
    ButtonReroll = '🔄',
    VaryStrong = 'Vary (Strong)',
    VarySubtle = 'Vary (Subtle)',
    ZoomOut15x = 'Zoom Out 1.5x',
    ZoomOut2x = 'Zoom Out 2x',
    MakeSquare = 'Make Square',
    MakeVariations = 'Make Variations',
    Remaster = 'Remaster'
}

