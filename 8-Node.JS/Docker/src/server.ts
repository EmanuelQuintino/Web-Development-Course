import http from "node:http"

const server = http.createServer(async (request, response) => {
  if (request.method === "GET" && request.url === "/") {
    return response.end("Hello World!")
  }

  return response.writeHead(404).end("Not found!")
})

server.listen(3333, () => console.log("Server is running on port 3333"))
