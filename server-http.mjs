import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

async function requestListener(request, response) {
  response.setHeader("Content-Type", "text/html");
  try {
    const contents = await fs.readFile("index.html", "utf8");
    const urlParts = request.url.split("/");

    switch (urlParts[1]) {
      case "":
      case "index.html":
        response.writeHead(200);
        return response.end(contents);

      case "random": {
        const nb = Number.parseInt(urlParts[2], 10);
        const numbers = Array.from({ length: nb }, () => Math.floor(100 * Math.random()));
        const items = numbers.map((n) => `<li>${n}</li>`).join("\n");
        response.writeHead(200);
        return response.end(`<html><ul>${items}</ul></html>`);
      }

      default:
        response.writeHead(404);
        return response.end(`<html><p>404: NOT FOUND</p></html>`);
    }
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end(`<html><p>500: INTERNAL SERVER ERROR</p></html>`);
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
