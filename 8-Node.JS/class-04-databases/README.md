# Class 04 Databases

## RESTful Architecture (Representational State Transfer)

- **Uniform Interface**

  - All interactions with the API should follow a uniform and consistent interface. This includes standardizing resource identifiers (URIs), methods (HTTP verbs), and representations of resources (e.g., JSON, XML).

- **Client-Server Architecture**

  - The client and server should be separate entities, each with distinct responsibilities. This separation allows for scalability, portability, and independent evolution of client and server components.

- **Statelessness**

  - Each request from a client to the server must contain all the information necessary for the server to understand and process it. The server should not maintain any client state between requests. This simplifies server implementation, improves reliability, and scalability.

- **Cacheability**

  - Responses from the server should be explicitly labeled as cacheable or non-cacheable. This allows clients or intermediaries to cache responses, reducing latency and improving performance.

- **Layered System**

  - The architecture should support a layered system, where different components (e.g., proxies, gateways) can be added to enhance security, scalability, or performance without affecting the overall system behavior.

- **Code on Demand (optional)**
  - This constraint is optional and rarely used in practice. It allows the server to provide executable code (e.g., JavaScript) to the client, enhancing functionality. However, most RESTful APIs do not require this constraint.

## UUID

```bash
# install uuid package
npm install uuid

# install uuid types for typeScript
npm i --save-dev @types/uuid
```

## Hash Passwords

```bash
# install bcrypt package for password hashing
npm install bcrypt

# install bcrypt types for typeScript
npm i --save-dev @types/bcrypt
```

## Validation

```bash
# install zod package for data validation
npm install zod
```

## Links

- [uuid](https://www.npmjs.com/package/uuid)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [zod](https://zod.dev/)
- [aws-rest-api](https://aws.amazon.com/pt/what-is/restful-api/)
- [ibm-rest-api](https://www.ibm.com/br-pt/topics/rest-apis)
