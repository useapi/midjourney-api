import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpInfo } from '../http/http';
import { ObjectSerializer } from '../models/ObjectSerializer';
import { ApiException } from './exception';
import { isCodeInRange } from '../util';
import { SecurityAuthentication } from '../auth/auth';

import { AccountResponse } from '../models/AccountResponse';
import { BlendResponse } from '../models/BlendResponse';
import { ButtonResponse } from '../models/ButtonResponse';
import { ButtonResponseErrorUpscaled } from '../models/ButtonResponseErrorUpscaled';
import { DescribeResponse } from '../models/DescribeResponse';
import { ImagineResponse } from '../models/ImagineResponse';
import { ImagineResponseModerated } from '../models/ImagineResponseModerated';
import { JobCancelResponse } from '../models/JobCancelResponse';
import { JobResponse } from '../models/JobResponse';
import { JobsBlendPostRequest } from '../models/JobsBlendPostRequest';
import { JobsButtonPostRequest } from '../models/JobsButtonPostRequest';
import { JobsDescribePostRequest } from '../models/JobsDescribePostRequest';
import { JobsImaginePostRequest } from '../models/JobsImaginePostRequest';
import { ResponseError } from '../models/ResponseError';
import { ResponseMaxJobs } from '../models/ResponseMaxJobs';

export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve account information
     */
    public async accountGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/account';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }

        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Submit the Midjourney /blend command
     * @param jobsBlendPostRequest 
     */
    public async jobsBlendPost(jobsBlendPostRequest: JobsBlendPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jobsBlendPostRequest' is not null or undefined
        if (jobsBlendPostRequest === null || jobsBlendPostRequest === undefined) {
            throw new RequiredError("DefaultApi", "jobsBlendPost", "jobsBlendPostRequest");
        }


        // Path Params
        const localVarPath = '/jobs/blend';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobsBlendPostRequest, "JobsBlendPostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }

        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsButtonPostRequest 
     */
    public async jobsButtonPost(jobsButtonPostRequest: JobsButtonPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jobsButtonPostRequest' is not null or undefined
        if (jobsButtonPostRequest === null || jobsButtonPostRequest === undefined) {
            throw new RequiredError("DefaultApi", "jobsButtonPost", "jobsButtonPostRequest");
        }


        // Path Params
        const localVarPath = '/jobs/button';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobsButtonPostRequest, "JobsButtonPostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }

        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Cancel execution of job created by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public async jobsCancelGet(jobid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jobid' is not null or undefined
        if (jobid === null || jobid === undefined) {
            throw new RequiredError("DefaultApi", "jobsCancelGet", "jobid");
        }


        // Path Params
        const localVarPath = '/jobs/cancel/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (jobid !== undefined) {
            requestContext.setQueryParam("jobid", ObjectSerializer.serialize(jobid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }

        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Submit the Midjourney /describe command
     * @param jobsDescribePostRequest 
     */
    public async jobsDescribePost(jobsDescribePostRequest: JobsDescribePostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jobsDescribePostRequest' is not null or undefined
        if (jobsDescribePostRequest === null || jobsDescribePostRequest === undefined) {
            throw new RequiredError("DefaultApi", "jobsDescribePost", "jobsDescribePostRequest");
        }


        // Path Params
        const localVarPath = '/jobs/describe';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobsDescribePostRequest, "JobsDescribePostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }

        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve status and results of jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public async jobsGet(jobid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jobid' is not null or undefined
        if (jobid === null || jobid === undefined) {
            throw new RequiredError("DefaultApi", "jobsGet", "jobid");
        }


        // Path Params
        const localVarPath = '/jobs/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (jobid !== undefined) {
            requestContext.setQueryParam("jobid", ObjectSerializer.serialize(jobid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }

        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get list of currently executing jobs
     */
    public async jobsListGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/jobs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }

        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsImaginePostRequest 
     */
    public async jobsImaginePost(jobsImaginePostRequest: JobsImaginePostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jobsImaginePostRequest' is not null or undefined
        if (jobsImaginePostRequest === null || jobsImaginePostRequest === undefined) {
            throw new RequiredError("DefaultApi", "jobsImaginePost", "jobsImaginePostRequest");
        }


        // Path Params
        const localVarPath = '/jobs/imagine';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jobsImaginePostRequest, "JobsImaginePostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }

        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async accountGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountResponse>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountResponse", ""
            ) as AccountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountResponse", ""
            ) as AccountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsBlendPost
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async jobsBlendPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BlendResponse>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlendResponse", ""
            ) as BlendResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("412", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "blendUrls, discord, server or channel value is missing, one of blendUrls values not a valid URL or URL which can not be retrieved", body, response.headers);
        }
        if (isCodeInRange("413", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "replyRef or replyUrl is too long", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ImagineResponseModerated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImagineResponseModerated", ""
            ) as ImagineResponseModerated;
            throw new ApiException<ImagineResponseModerated>(response.httpStatusCode, "Unable to find posted message, likely moderated or invalid url", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ResponseMaxJobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseMaxJobs", ""
            ) as ResponseMaxJobs;
            throw new ApiException<ResponseMaxJobs>(response.httpStatusCode, "API query is full and can not accept new jobs/blend requests", body, response.headers);
        }

        // Work around for missing responses in specification
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlendResponse", ""
            ) as BlendResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsButtonPost
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async jobsButtonPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ButtonResponse>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ButtonResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ButtonResponse", ""
            ) as ButtonResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Button not supported or not found in jobid buttons array", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unable to locate jobid", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ButtonResponseErrorUpscaled = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ButtonResponseErrorUpscaled", ""
            ) as ButtonResponseErrorUpscaled;
            throw new ApiException<ButtonResponseErrorUpscaled>(response.httpStatusCode, "Upscale button already executed by jobid", body, response.headers);
        }
        if (isCodeInRange("412", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "jobid or button value is missing", body, response.headers);
        }
        if (isCodeInRange("413", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "replyRef or replyUrl is too long", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ResponseMaxJobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseMaxJobs", ""
            ) as ResponseMaxJobs;
            throw new ApiException<ResponseMaxJobs>(response.httpStatusCode, "API query is full and can not accept new jobs/button requests", body, response.headers);
        }

        // Work around for missing responses in specification
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ButtonResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ButtonResponse", ""
            ) as ButtonResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsCancelGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async jobsCancelGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobCancelResponse>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobCancelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobCancelResponse", ""
            ) as JobCancelResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Query param jobid not provided", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unable to locate jobid", body, response.headers);
        }

        // Work around for missing responses in specification
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobCancelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobCancelResponse", ""
            ) as JobCancelResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsDescribePost
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async jobsDescribePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DescribeResponse>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DescribeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DescribeResponse", ""
            ) as DescribeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("412", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "describeUrl, discord, server or channel value is missing, describeUrl value not a valid URL or URL which can not be retrieved", body, response.headers);
        }
        if (isCodeInRange("413", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "replyRef or replyUrl is too long", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ImagineResponseModerated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImagineResponseModerated", ""
            ) as ImagineResponseModerated;
            throw new ApiException<ImagineResponseModerated>(response.httpStatusCode, "Unable to find posted message, likely moderated or invalid url", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ResponseMaxJobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseMaxJobs", ""
            ) as ResponseMaxJobs;
            throw new ApiException<ResponseMaxJobs>(response.httpStatusCode, "API query is full and can not accept new jobs/blend requests", body, response.headers);
        }

        // Work around for missing responses in specification
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DescribeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DescribeResponse", ""
            ) as DescribeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async jobsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobResponse>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobResponse", ""
            ) as JobResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Query param jobid not provided", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unable to locate jobid", body, response.headers);
        }

        // Work around for missing responses in specification
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobResponse", ""
            ) as JobResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsListGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async jobsListGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string>>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobsImaginePost
     * @throws ApiException if the response code was not in [200, 299]
     */
    public async jobsImaginePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ImagineResponse>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImagineResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImagineResponse", ""
            ) as ImagineResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("412", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "prompt, discord, server or channel value is missing", body, response.headers);
        }
        if (isCodeInRange("413", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(response.httpStatusCode, "prompt, replyRef or replyUrl is too long", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ImagineResponseModerated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImagineResponseModerated", ""
            ) as ImagineResponseModerated;
            throw new ApiException<ImagineResponseModerated>(response.httpStatusCode, "Unable to find posted message, likely moderated or invalid prompt", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ResponseMaxJobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseMaxJobs", ""
            ) as ResponseMaxJobs;
            throw new ApiException<ResponseMaxJobs>(response.httpStatusCode, "API query is full and can not accept new jobs/imagine requests", body, response.headers);
        }

        // Work around for missing responses in specification
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImagineResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImagineResponse", ""
            ) as ImagineResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
