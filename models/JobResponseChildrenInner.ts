export class JobResponseChildrenInner {
    'button': JobResponseChildrenInnerButtonEnum;
    'jobid': string;
    'messageId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "button",
            "baseName": "button",
            "type": "JobResponseChildrenInnerButtonEnum",
            "format": ""
        },
        {
            "name": "jobid",
            "baseName": "jobid",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return JobResponseChildrenInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum JobResponseChildrenInnerButtonEnum {
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
    Upscale2x = 'Upscale (2x)',
    Upscale4x = 'Upscale (4x)',
    RedoUpscale2x = 'Redo Upscale (2x)',
    RedoUpscale4x = 'Redo Upscale (4x)',   
    MakeSquare = 'Make Square',
    MakeVariations = 'Make Variations',
    Remaster = 'Remaster'
}

