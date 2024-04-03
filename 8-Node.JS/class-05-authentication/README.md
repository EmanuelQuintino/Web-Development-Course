# Class 05 Authentication

## JWT (JSON Web Token)

JSON Web Tokens are an open, industry standard [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) method for representing claims securely between two parties.

```bash
# install jwt
npm install jsonwebtoken --save

# install dependencies
npm i --save-dev @types/jsonwebtoken
```

- Structure Decoded

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

## Links

[dotenv](https://www.npmjs.com/package/dotenv)
[JWT Docs](https://jwt.io/)
[HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
