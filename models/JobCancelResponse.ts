export class JobCancelResponse {
    'jobid': string;
    'status': JobCancelResponseStatusEnum;
    'code': JobCancelResponseCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "jobid",
            "baseName": "jobid",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "JobCancelResponseStatusEnum",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "JobCancelResponseCodeEnum",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return JobCancelResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum JobCancelResponseStatusEnum {
    Created = 'created',
    Started = 'started',
    Moderated = 'moderated',
    Progress = 'progress',
    Completed = 'completed',
    Failed = 'failed',
    Cancelled = 'cancelled'
}
export enum JobCancelResponseCodeEnum {
    NUMBER_200 = 200
}

