---
title: What is Serverless computing
description:  Learn about serverless computing, and how it enables developers to focus on business problems, write and deploy code in a serverless architecture
summary: Learn and discover how the serverless programming model provides a simpler, more cost-effective way of developing and operating applications in the cloud.
keywords:
  - what is serverless computing
  - pros and cons of serverless
  - advantages of serverless
feature:
  image: /uploads/posts/code/code-tutorials.svg
  alt: What is Serverless computing
cardImage:
  image: /uploads/posts/code/code-tutorials.png
  alt: What is Serverless computing
date: 2020-11-25T17:31:47.672Z
author: garywoodfine
tags:
  - javascript
  - serverless
categories:
  - software-development
---
The internet has propelled innovation in computing in leaps and bounds over the past 3 decades.  The technology 
architectures businesses use has also evolved exponentially. When the businesses first started to launch their internet 
presents, they initially started to build their own data centres housing their onw physical servers.  As time moved on,
this philosophy morphed into renting servers in purpose built data centers, this gradually evolved into renting virtual 
machines and then into what is termed *Cloud Computing*, which can loosely be defined as renting virtual computing
resources which are hosted and managed by third parties, which you can still administer yourself.

*Cloud Computing* has once again evolved into the concept of *Serverless Computing*, which can now loosely be defined 
as you are actually just renting an application service. You don't need to worry about the server or resource it is 
hosted on, all you're interested in is making use of an application to service to store and host your data,  a third party
take care of all the computing resources.

### Serverless Computing Approach

Serverless is an approach to computing which offloads responsibility for common infrastructure management tasks i.e scaling, 
scheduling, patching, provisioning, etc. to third party cloud providers and tools, allowing engineers to focus their 
time and effort on the business logic specific to their applications or process.

Serverless does not mean that there are no physical servers or computing resources, it just means that your organisation
literally does not need to concern itself with them, it's all being managed and taken care of by a third party.

Serverless computing typically comprises these core attributes:

* The serverless computing model requires no management and operation of infrastructure, enabling software developers and
 engineers to focus developing their core business logic.
* Serverless computing runs code on-demand on a per-request basis, scaling transparently with the number of requests 
being served.
* Serverless computing enables end users to *pay only for resources being used*, never paying for idle capacity.

The core concept behind serverless is to enable organisation to spend more time and money on developing value added services
and software and less time worrying about the physical infrastructure.

### The advantages of serverless computing

The serverless computing model provides the following primary benefits:

* **Reduced Operation Costs** - Serverless computing can be very cost-effective, when compared to traditional cloud 
providers backend services which often result in the user paying for unused space or idle CPU time.
* **Simplified scalability** - The serverless vendor handles all scaling on demand.
* **Simplified backend code** - developers can create simple functions that independently perform a single purpose i.e.
 making API calls.
* **Quicker turnaround** - Serverless architecture can significantly reduce time to market.

### The disadvantages of serverless computing

Just like everything else in life, there can also be downsides to the serverless computing model and it may not be the 
best fit for all computing tasks, the following are some drawbacks you should be aware of when developing with serverless

* **Long-running processes** - serverless workloads are designed to scale up and down perfectly in response to workload, 
offering significant cost savings for spiky workloads.
* **Vendor lock-in** -  Serverless architectures are designed to take advantage of an ecosystem of managed cloud 
services and architectural models. Deeply integrating with the native managed services of cloud providers is where 
much of the value of cloud can be found. However, these patterns often represent material lock-in risks that need to 
be mitigated.
* **Cold Start Problems** serverless architectures forgo long-running processes in favor of scaling up and down to zero,
 they also sometimes need to start up from zero to serve a new request.
* **Monitoring and Debugging** - Operational tasks can be challenging in any distributed system, and the move to both microservices 
and serverless architectures has only exacerbated the complexity associated with managing these environments carefully.

### Typical Serverless Computing services

A few technology offerings are often loosely conflated with the serverless computing; 

* **Backend-as-a-Service (BaaS)**  - a service model where a cloud provider offers backend services such as data storage,
 enabling developers to focus on writing front-end code.
* **Platform-as-a-Service (Paas)** - a service model enabling developers to rent all the necessary tools to develop & deploy 
applications from cloud providers.
* **Infrastucture-as-a-Service (Iaas)** - a catchall term for cloud vendors hosting infrastructure on behalf of their 
customers.

For the purist, Serverless Computing actually comprises of smaller subsets of the all these offerings, for them serverless computing
 is primarily focused on service categories, like compute, storage, database, etc. where configuration, management, 
 and billing of servers are invisible to the end user and including an event-driven computing paradigm where application 
 code, or containers, only run in response to events or requests.

### Why are developers preferring to adopt the serverless computing model

Developers are preferring to adopt Serverless Computing models for their applications because of:

* **Pay-per-execution pricing** : only pay for how long function code runs, not for idle server time.
* **Scalability** : Load balancing, security patches, logging, etc. are all handled by the FAAS provider. Leaving more time 
to focus on their app instead of the underlying infrastructure.
> Serverless architectures are application designs that incorporate third-party “Backend as a Service” (BaaS) services,
> and/or that include custom code run in managed, ephemeral containers on a “Functions as a Service” (FaaS) platform.
> 
>[martinFowler.com](https://martinfowler.com/articles/serverless.html "Serverless Architectures | martinFowler.com")
