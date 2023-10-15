import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration } from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import { mergeMap, map } from '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Retrieve account information
     */
    public accountGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<AccountResponse>> {
        const requestContextPromise = this.requestFactory.accountGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve account information
     */
    public accountGet(_options?: Configuration): Observable<AccountResponse> {
        return this.accountGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AccountResponse>) => apiResponse.data));
    }

    /**
     * Submit the Midjourney /blend command
     * @param jobsBlendPostRequest 
     */
    public jobsBlendPostWithHttpInfo(jobsBlendPostRequest: JobsBlendPostRequest, _options?: Configuration): Observable<HttpInfo<BlendResponse>> {
        const requestContextPromise = this.requestFactory.jobsBlendPost(jobsBlendPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobsBlendPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submit the Midjourney /blend command
     * @param jobsBlendPostRequest 
     */
    public jobsBlendPost(jobsBlendPostRequest: JobsBlendPostRequest, _options?: Configuration): Observable<BlendResponse> {
        return this.jobsBlendPostWithHttpInfo(jobsBlendPostRequest, _options).pipe(map((apiResponse: HttpInfo<BlendResponse>) => apiResponse.data));
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsButtonPostRequest 
     */
    public jobsButtonPostWithHttpInfo(jobsButtonPostRequest: JobsButtonPostRequest, _options?: Configuration): Observable<HttpInfo<ButtonResponse>> {
        const requestContextPromise = this.requestFactory.jobsButtonPost(jobsButtonPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobsButtonPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsButtonPostRequest 
     */
    public jobsButtonPost(jobsButtonPostRequest: JobsButtonPostRequest, _options?: Configuration): Observable<ButtonResponse> {
        return this.jobsButtonPostWithHttpInfo(jobsButtonPostRequest, _options).pipe(map((apiResponse: HttpInfo<ButtonResponse>) => apiResponse.data));
    }

    /**
     * Cancel execution of job created by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public jobsCancelGetWithHttpInfo(jobid: string, _options?: Configuration): Observable<HttpInfo<JobCancelResponse>> {
        const requestContextPromise = this.requestFactory.jobsCancelGet(jobid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobsCancelGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel execution of job created by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public jobsCancelGet(jobid: string, _options?: Configuration): Observable<JobCancelResponse> {
        return this.jobsCancelGetWithHttpInfo(jobid, _options).pipe(map((apiResponse: HttpInfo<JobCancelResponse>) => apiResponse.data));
    }

    /**
     * Submit the Midjourney /describe command
     * @param jobsDescribePostRequest 
     */
    public jobsDescribePostWithHttpInfo(jobsDescribePostRequest: JobsDescribePostRequest, _options?: Configuration): Observable<HttpInfo<DescribeResponse>> {
        const requestContextPromise = this.requestFactory.jobsDescribePost(jobsDescribePostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobsDescribePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submit the Midjourney /describe command
     * @param jobsDescribePostRequest 
     */
    public jobsDescribePost(jobsDescribePostRequest: JobsDescribePostRequest, _options?: Configuration): Observable<DescribeResponse> {
        return this.jobsDescribePostWithHttpInfo(jobsDescribePostRequest, _options).pipe(map((apiResponse: HttpInfo<DescribeResponse>) => apiResponse.data));
    }

    /**
     * Retrieve status and results of jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public jobsGetWithHttpInfo(jobid: string, _options?: Configuration): Observable<HttpInfo<JobResponse>> {
        const requestContextPromise = this.requestFactory.jobsGet(jobid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve status and results of jobs/imagine, jobs/button, jobs/blend or jobs/describe
     * @param jobid jobid value returned by jobs/imagine, jobs/button, jobs/blend or jobs/describe
     */
    public jobsGet(jobid: string, _options?: Configuration): Observable<JobResponse> {
        return this.jobsGetWithHttpInfo(jobid, _options).pipe(map((apiResponse: HttpInfo<JobResponse>) => apiResponse.data));
    }

    /**
     * Get list of currently executing jobs
     */
    public jobsListGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.jobsListGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobsListGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of currently executing jobs
     */
    public jobsListGet(_options?: Configuration): Observable<Array<string>> {
        return this.jobsListGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsImaginePostRequest 
     */
    public jobsImaginePostWithHttpInfo(jobsImaginePostRequest: JobsImaginePostRequest, _options?: Configuration): Observable<HttpInfo<ImagineResponse>> {
        const requestContextPromise = this.requestFactory.jobsImaginePost(jobsImaginePostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobsImaginePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submit the Midjourney /imagine command
     * @param jobsImaginePostRequest 
     */
    public jobsImaginePost(jobsImaginePostRequest: JobsImaginePostRequest, _options?: Configuration): Observable<ImagineResponse> {
        return this.jobsImaginePostWithHttpInfo(jobsImaginePostRequest, _options).pipe(map((apiResponse: HttpInfo<ImagineResponse>) => apiResponse.data));
    }

}
