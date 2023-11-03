## @useapi/midjourney-api

This package contains TypeScript client library for Midjourney API by [useapi.net](https://useapi.net).  
Quick [demo](https://useapi.net/demo).

## Install

#### npm 
```
npm install @useapi/midjourney-api
```

## Documentation

Midjourney [/imagine](https://docs.midjourney.com/docs/quick-start#5-use-the-imagine-command) command available via [jobs/imagine](https://useapi.net/docs/api-v1/jobs-imagine) API endpoint.

Midjourney [upscale or create variations](https://docs.midjourney.com/docs/quick-start#8-upscale-or-create-variations) and [enhance or modify](https://docs.midjourney.com/docs/quick-start#9-enhance-or-modify-your-image) button commands available via [jobs/button](https://useapi.net/docs/api-v1/jobs-button) API endpoint. 

Midjourney [/describe](https://docs.midjourney.com/docs/describe) command available via [jobs/describe](https://useapi.net/docs/api-v1/jobs-describe) API endpoint. 

Midjourney [/blend](https://docs.midjourney.com/docs/blend) command available via [jobs/blend](https://useapi.net/docs/api-v1/jobs-blend) API endpoint. 

Use [jobs/?jobid=<code class="language-plaintext highlighter-rouge">jobid</code>](https://useapi.net/docs/api-v1/jobs-jobid) API endpoint to retrieve job results. 

Postman [collection](https://www.postman.com/useapinet/workspace/useapi-net).

Swagger OpenAPI [documentation](https://app.swaggerhub.com/apis/useapi/Midjourney_API_v1/1.0) for generating server stubs and client SDKs.

## Usage 

You need to set up and configure the Midjourey Discord account as well as subscribe to useapi.net service before you can start using API. Setup [instructions](https://useapi.net/docs/start-here). 

```TypeScript
import {
    createConfiguration,
    DefaultApi,
    ImagineResponse,
    ButtonResponse,
    BlendResponse,
    JobResponse,
    JobsButtonPostRequestButtonEnum,
    JobsBlendPostRequestBlendDimensionsEnum,
    DescribeResponse,
} from '@useapi/midjourney-api';

const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

const configuration = createConfiguration({
    authMethods: {
        apiToken: {
            tokenProvider: {
                // Load api token from environment 
                getToken() { return process.env.USEAPI_TOKEN ?? 'useapi.net API token' }
            }
        }
    }
});

// Load Discord settings from environment 
const discord = process.env.USEAPI_DISCORD ?? 'Discord token';
const server = process.env.USEAPI_SERVER ?? 'Discord server id number';
const channel = process.env.USEAPI_CHANNEL ?? 'Discord channel id number';

const apiInstance = new DefaultApi(configuration);

// Helper function to monitor job status and retrieve results
const waitForJobToComplete = async (
    job: ImagineResponse |
        ButtonResponse |
        BlendResponse |
        DescribeResponse |
        JobResponse) => {

    const verb = job.verb.toUpperCase();

    console.log(`${verb} : ${job.status}`, job.jobid);

    while (job.code == 200 && ['started', 'progress'].includes(job.status)) {
        await sleep(20 * 1000);
        // JobResponse
        job = await apiInstance.jobsGet(job.jobid);
        console.log(`${verb} : ${job.status}`, { jobid: job.jobid, content: job.content });
    }

    if ((job instanceof JobResponse) && job.attachments?.length)
        console.log(`${verb} url`, job.attachments?.at(0)?.url);
    if ((job instanceof JobResponse) && job.buttons?.length)
        console.log(`${verb} buttons`, job.buttons?.join());

    return job;
}

const demo = async () => {
    // Midjourney /describe, using Promise pattern
    apiInstance.jobsDescribePost(
        {
            describeUrl: "https://mymodernmet.com/wp/wp-content/uploads/2017/12/free-images-national-gallery-of-art-9.jpg",
            discord,
            server,
            channel,
        }
    ).then(async (data: DescribeResponse) => {
        console.log('DESCRIBE started', data);
        await waitForJobToComplete(data);
    }).catch((error: any) => console.error('DESCRIBE failed', error));

    // Midjourney /blend, using Promise pattern
    apiInstance.jobsBlendPost(
        {
            blendUrls: [
                "https://mymodernmet.com/wp/wp-content/uploads/2017/12/free-images-national-gallery-of-art-6.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2017/12/free-images-national-gallery-of-art-2.jpg"
            ],
            blendDimensions: JobsBlendPostRequestBlendDimensionsEnum.Landscape,
            discord,
            server,
            channel,
        }
    ).then(async (data: BlendResponse) => {
        console.log('BLEND started', data);
        await waitForJobToComplete(data);
    }).catch((error: any) => console.error('BLEND failed', error));

    // Midjourney /imagine, using await & try..catch pattern
    let job: ImagineResponse | JobResponse | ButtonResponse;
    try {
        // ImagineResponse
        job = await apiInstance.jobsImaginePost(
            {
                prompt: "Steampunk cat cycling in San Francisco, vintage photo",
                discord,
                server,
                channel,
            });

        await waitForJobToComplete(job);

        const imagineJobId = job.jobid;

        // Midjourney button, using await & try..catch pattern
        job = await apiInstance.jobsButtonPost(
            {
                jobid: imagineJobId,
                button: JobsButtonPostRequestButtonEnum.V1
            });

        await waitForJobToComplete(job);
    } catch (ex: any) {
        console.log('IMAGINE or BUTTON failed', ex);
    }
}

demo();
```

## Changelog 

Version 1.0.4 | November 3, 2023  

Added support for following  [jobs/button](https://useapi.net/docs/api-v1/jobs-button) options:  
- Upscale (2x)
- Upscale (4x)
- Redo Upscale (2x)
- Redo Upscale (4x)

## Support 

Visit our   
-  [Discord Server](https://discord.gg/w28uK3cnmF) for any additional support and questions.
- [YouTube Channel](https://www.youtube.com/@midjourneyapi) for tutorials and demos.