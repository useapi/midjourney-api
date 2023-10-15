import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration'

import { AccountResponse } from '../models/AccountResponse';
import { BlendResponse } from '../models/BlendResponse';
import { ButtonResponse } from '../models/ButtonResponse';
import { DescribeResponse } from '../models/DescribeResponse';
import { ImagineResponse } from '../models/ImagineResponse';
import { JobCancelResponse } from '../models/JobCancelResponse';
import { JobResponse } from '../models/JobResponse';
import { JobsBlendPostRequest } from '../models/JobsBlendPostRequest';
import { JobsButtonPostRequest } from '../models/JobsButtonPostRequest';
import { JobsDescribePostRequest } from '../models/JobsDescribePostRequest';
import { JobsImaginePostRequest } from '../models/JobsImaginePostRequest';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";

export interface DefaultApiAccountGetRequest {
}

export interface DefaultApiJobsBlendPostRequest {
    /**
     * 
     * @type JobsBlendPostRequest
     * @memberof DefaultApijobsBlendPost
     */
    jobsBlendPostRequest: JobsBlendPostRequest
}

export interface DefaultApiJobsButtonPostRequest {
    /**
     * 
     * @type JobsButtonPostRequest
     * @memberof DefaultApijobsButtonPost
     */
    jobsButtonPostRequest: JobsButtonPostRequest
}

export interface DefaultApiJobsCancelGetRequest {
    /**
     * jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @type string
     * @memberof DefaultApijobsCancelGet
     */
    jobid: string
}

export interface DefaultApiJobsDescribePostRequest {
    /**
     * 
     * @type JobsDescribePostRequest
     * @memberof DefaultApijobsDescribePost
     */
    jobsDescribePostRequest: JobsDescribePostRequest
}

export interface DefaultApiJobsGetRequest {
    /**
     * jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @type string
     * @memberof DefaultApijobsGet
     */
    jobid: string
}

export interface DefaultApiJobsGet0Request {
}

export interface DefaultApiJobsImaginePostRequest {
    /**
     * 
     * @type JobsImaginePostRequest
     * @memberof DefaultApijobsImaginePost
     */
    jobsImaginePostRequest: JobsImaginePostRequest
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve account information
     * @param param the request object
     */
    public accountGetWithHttpInfo(options?: Configuration): Promise<HttpInfo<AccountResponse>> {
        return this.api.accountGetWithHttpInfo(options).toPromise();
    }

    /**
     * Retrieve account information
     * @param param the request object
     */
    public accountGet(options?: Configuration): Promise<AccountResponse> {
        return this.api.accountGet(options).toPromise();
    }

    /**
     * Submit the Midjourney /blend command
     * @param param the request object
     */
    public jobsBlendPostWithHttpInfo(param: DefaultApiJobsBlendPostRequest, options?: Configuration): Promise<HttpInfo<BlendResponse>> {
        return this.api.jobsBlendPostWithHttpInfo(param.jobsBlendPostRequest, options).toPromise();
    }

    /**
     * Submit the Midjourney /blend command
     * @param param the request object
     */
    public jobsBlendPost(param: DefaultApiJobsBlendPostRequest, options?: Configuration): Promise<BlendResponse> {
        return this.api.jobsBlendPost(param.jobsBlendPostRequest, options).toPromise();
    }

    /**
     * Submit the Midjourney /imagine command
     * @param param the request object
     */
    public jobsButtonPostWithHttpInfo(param: DefaultApiJobsButtonPostRequest, options?: Configuration): Promise<HttpInfo<ButtonResponse>> {
        return this.api.jobsButtonPostWithHttpInfo(param.jobsButtonPostRequest, options).toPromise();
    }

    /**
     * Submit the Midjourney /imagine command
     * @param param the request object
     */
    public jobsButtonPost(param: DefaultApiJobsButtonPostRequest, options?: Configuration): Promise<ButtonResponse> {
        return this.api.jobsButtonPost(param.jobsButtonPostRequest, options).toPromise();
    }

    /**
     * Cancel execution of job created by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param param the request object
     */
    public jobsCancelGetWithHttpInfo(param: DefaultApiJobsCancelGetRequest, options?: Configuration): Promise<HttpInfo<JobCancelResponse>> {
        return this.api.jobsCancelGetWithHttpInfo(param.jobid, options).toPromise();
    }

    /**
     * Cancel execution of job created by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param param the request object
     */
    public jobsCancelGet(param: DefaultApiJobsCancelGetRequest, options?: Configuration): Promise<JobCancelResponse> {
        return this.api.jobsCancelGet(param.jobid, options).toPromise();
    }

    /**
     * Submit the Midjourney /describe command
     * @param param the request object
     */
    public jobsDescribePostWithHttpInfo(param: DefaultApiJobsDescribePostRequest, options?: Configuration): Promise<HttpInfo<DescribeResponse>> {
        return this.api.jobsDescribePostWithHttpInfo(param.jobsDescribePostRequest, options).toPromise();
    }

    /**
     * Submit the Midjourney /describe command
     * @param param the request object
     */
    public jobsDescribePost(param: DefaultApiJobsDescribePostRequest, options?: Configuration): Promise<DescribeResponse> {
        return this.api.jobsDescribePost(param.jobsDescribePostRequest, options).toPromise();
    }

    /**
     * Retrieve status and results of jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param param the request object
     */
    public jobsGetWithHttpInfo(param: DefaultApiJobsGetRequest, options?: Configuration): Promise<HttpInfo<JobResponse>> {
        return this.api.jobsGetWithHttpInfo(param.jobid, options).toPromise();
    }

    /**
     * Retrieve status and results of jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param param the request object
     */
    public jobsGet(param: DefaultApiJobsGetRequest, options?: Configuration): Promise<JobResponse> {
        return this.api.jobsGet(param.jobid, options).toPromise();
    }

    /**
     * Get list of currently executing jobs
     * @param param the request object
     */
    public jobsListGetWithHttpInfo(options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.jobsListGetWithHttpInfo(options).toPromise();
    }

    /**
     * Get list of currently executing jobs
     * @param param the request object
     */
    public jobsListGet(options?: Configuration): Promise<Array<string>> {
        return this.api.jobsListGet(options).toPromise();
    }

    /**
     * Submit the Midjourney /imagine command
     * @param param the request object
     */
    public jobsImaginePostWithHttpInfo(param: DefaultApiJobsImaginePostRequest, options?: Configuration): Promise<HttpInfo<ImagineResponse>> {
        return this.api.jobsImaginePostWithHttpInfo(param.jobsImaginePostRequest, options).toPromise();
    }

    /**
     * Submit the Midjourney /imagine command
     * @param param the request object
     */
    public jobsImaginePost(param: DefaultApiJobsImaginePostRequest, options?: Configuration): Promise<ImagineResponse> {
        return this.api.jobsImaginePost(param.jobsImaginePostRequest, options).toPromise();
    }

}
