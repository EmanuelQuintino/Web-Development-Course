# Class 05 Authentication

## JWT (JSON Web Token)

JSON Web Tokens are an open, industry standard [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) method for representing claims securely between two parties.

```bash
# install jwt
npm install jsonwebtoken --save

# install dependencies
npm i --save-dev @types/jsonwebtoken
```

### Structure Decoded

- **Header:** The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- **Payload:** The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

```json
{
  "id": "1",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
```

- **Signature:** To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

```js
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);
```

```string
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c;
```

## Authorization

Authorization header using the Bearer schema. The content of the header should look like the following:

```
Authorization: Bearer <token>
```

## HTTP Cookies

An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests:

```
Set-Cookie: <cookie-name>=<cookie-value>
```

### Cookie Response

- `httpOnly: true`  
  This option helps mitigate the risk of client-side script accessing the protected cookie. If the httpOnly flag is set, the cookie cannot be accessed through client-side scripts (e.g., JavaScript), which is particularly important for preventing cross-site scripting (XSS) attacks.

- `sameSite: "none"`  
  This setting controls whether the cookie is sent along with cross-site requests. The None value means the cookie will be sent in all contexts, i.e., in responses to both first-party and cross-origin requests. This is useful for cross-site request forgery (CSRF) protection but requires Secure to be true if SameSite=None.

- `secure: true`  
  This option specifies that the cookie should only be transmitted over secure protocols such as HTTPS. It's a security measure to ensure that the cookie is sent in encrypted form, which prevents attackers from eavesdropping on the connection.

- `maxAge: 1000 * 60 * 15`  
  This defines the lifetime of the cookie in milliseconds. Here, 1000 _ 60 _ 15 calculates to 15 minutes (1000 milliseconds _ 60 seconds _ 15 = 900,000 milliseconds or 15 minutes). After this time, the cookie will expire and be removed automatically.

```ts
res.cookie(process.env.KEY_TOKEN, token, {
  httpOnly: true,
  sameSite: "none",
  secure: true,
  maxAge: 1000 * 60 * 15,
});
```

### Cookie Parser

Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.

```bash
# install cookie parser
npm install cookie-parser

# install types cookie parser
npm i --save-dev @types/cookie-parser
```

### CORS

CORS is a node.js package for providing a Connect/Express middleware.

```bash
# to install cors
npm install cors

# for install types cors
npm i --save-dev @types/cors
```

### Server File

```ts
app.use(cookieParser());

const whitelist = ["http://localhost:5173", "http://127.0.0.1:5173"];
app.use(
  cors({
    origin: whitelist,
    credentials: true,
  })
);
```

## Links

- [dotenv](https://www.npmjs.com/package/dotenv)
- [JWT Docs](https://jwt.io/)
- [HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)
- [CORS](https://www.npmjs.com/package/cors)
