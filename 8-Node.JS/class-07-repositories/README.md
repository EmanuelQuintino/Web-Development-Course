# Class 07 Repositories

## RESTful Architecture (Representational State Transfer)

1. `Uniform Interface`  
   All interactions with the API should follow a uniform and consistent interface. This includes standardizing resource identifiers (URIs), methods (HTTP verbs), and representations of resources (e.g., JSON, XML).

2. `Client-Server Architecture`  
   The client and server should be separate entities, each with distinct responsibilities. This separation allows for scalability, portability, and independent evolution of client and server components.

3. `Statelessness`  
   Each request from a client to the server must contain all the information necessary for the server to understand and process it. The server should not maintain any client state between requests. This simplifies server implementation, improves reliability, and scalability.

4. `Cacheability`  
   Responses from the server should be explicitly labeled as cacheable or non-cacheable. This allows clients or intermediaries to cache responses, reducing latency and improving performance.

5. `Layered System`  
   The architecture should support a layered system, where different components (e.g., proxies, gateways) can be added to enhance security, scalability, or performance without affecting the overall system behavior.

6. `Code on Demand (optional)`  
   This constraint is optional and rarely used in practice. It allows the server to provide executable code (e.g., JavaScript) to the client, enhancing functionality. However, most RESTful APIs do not require this constraint.

## Links

- [ibm-rest-api](https://www.ibm.com/br-pt/topics/rest-apis)
- [aws-rest-api](https://aws.amazon.com/pt/what-is/restful-api/)
