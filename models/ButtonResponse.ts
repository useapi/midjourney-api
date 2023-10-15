export class ButtonResponse {
    /**
    * Use returned jobid value to retrieve job status and results
    */
    'jobid': string;
    'verb': ButtonResponseVerbEnum;
    'status': ButtonResponseStatusEnum;
    'created': string;
    'updated': string;
    'button': ButtonResponseButtonEnum;
    'parentJobId': string;
    'channel': string;
    'server': string;
    'maxJobs': number;
    'code': ButtonResponseCodeEnum;

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
            "type": "ButtonResponseVerbEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ButtonResponseStatusEnum",
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
            "name": "button",
            "baseName": "button",
            "type": "ButtonResponseButtonEnum",
            "format": ""
        },
        {
            "name": "parentJobId",
            "baseName": "parentJobId",
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
            "name": "code",
            "baseName": "code",
            "type": "ButtonResponseCodeEnum",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return ButtonResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ButtonResponseVerbEnum {
    Button = 'button'
}
export enum ButtonResponseStatusEnum {
    Started = 'started',
    Completed = 'completed'
}
export enum ButtonResponseButtonEnum {
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
export enum ButtonResponseCodeEnum {
    NUMBER_200 = 200
}

