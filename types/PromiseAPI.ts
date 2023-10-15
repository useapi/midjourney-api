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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve account information
     */
    public accountGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<AccountResponse>> {
        const result = this.api.accountGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieve account information
     */
    public accountGet(_options?: Configuration): Promise<AccountResponse> {
        const result = this.api.accountGet(_options);
        return result.toPromise();
    }

    /**
     * Submit the Midjourney /blend command
     * @param jobsBlendPostRequest 
     */
    public jobsBlendPostWithHttpInfo(jobsBlendPostRequest: JobsBlendPostRequest, _options?: Configuration): Promise<HttpInfo<BlendResponse>> {
        const result = this.api.jobsBlendPostWithHttpInfo(jobsBlendPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit the Midjourney /blend command
     * @param jobsBlendPostRequest 
     */
    public jobsBlendPost(jobsBlendPostRequest: JobsBlendPostRequest, _options?: Configuration): Promise<BlendResponse> {
        const result = this.api.jobsBlendPost(jobsBlendPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsButtonPostRequest 
     */
    public jobsButtonPostWithHttpInfo(jobsButtonPostRequest: JobsButtonPostRequest, _options?: Configuration): Promise<HttpInfo<ButtonResponse>> {
        const result = this.api.jobsButtonPostWithHttpInfo(jobsButtonPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsButtonPostRequest 
     */
    public jobsButtonPost(jobsButtonPostRequest: JobsButtonPostRequest, _options?: Configuration): Promise<ButtonResponse> {
        const result = this.api.jobsButtonPost(jobsButtonPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Cancel execution of job created by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public jobsCancelGetWithHttpInfo(jobid: string, _options?: Configuration): Promise<HttpInfo<JobCancelResponse>> {
        const result = this.api.jobsCancelGetWithHttpInfo(jobid, _options);
        return result.toPromise();
    }

    /**
     * Cancel execution of job created by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public jobsCancelGet(jobid: string, _options?: Configuration): Promise<JobCancelResponse> {
        const result = this.api.jobsCancelGet(jobid, _options);
        return result.toPromise();
    }

    /**
     * Submit the Midjourney /describe command
     * @param jobsDescribePostRequest 
     */
    public jobsDescribePostWithHttpInfo(jobsDescribePostRequest: JobsDescribePostRequest, _options?: Configuration): Promise<HttpInfo<DescribeResponse>> {
        const result = this.api.jobsDescribePostWithHttpInfo(jobsDescribePostRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit the Midjourney /describe command
     * @param jobsDescribePostRequest 
     */
    public jobsDescribePost(jobsDescribePostRequest: JobsDescribePostRequest, _options?: Configuration): Promise<DescribeResponse> {
        const result = this.api.jobsDescribePost(jobsDescribePostRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve status and results of jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public jobsGetWithHttpInfo(jobid: string, _options?: Configuration): Promise<HttpInfo<JobResponse>> {
        const result = this.api.jobsGetWithHttpInfo(jobid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve status and results of jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public jobsGet(jobid: string, _options?: Configuration): Promise<JobResponse> {
        const result = this.api.jobsGet(jobid, _options);
        return result.toPromise();
    }

    /**
     * Get list of currently executing jobs
     */
    public jobsListGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.jobsListGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get list of currently executing jobs
     */
    public jobsListGet(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.jobsListGet(_options);
        return result.toPromise();
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsImaginePostRequest 
     */
    public jobsImaginePostWithHttpInfo(jobsImaginePostRequest: JobsImaginePostRequest, _options?: Configuration): Promise<HttpInfo<ImagineResponse>> {
        const result = this.api.jobsImaginePostWithHttpInfo(jobsImaginePostRequest, _options);
        return result.toPromise();
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsImaginePostRequest 
     */
    public jobsImaginePost(jobsImaginePostRequest: JobsImaginePostRequest, _options?: Configuration): Promise<ImagineResponse> {
        const result = this.api.jobsImaginePost(jobsImaginePostRequest, _options);
        return result.toPromise();
    }
}



