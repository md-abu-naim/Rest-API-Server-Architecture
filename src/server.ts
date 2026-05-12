import { createServer, IncomingMessage, ServerResponse, type Server } from "http";


const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('Server runing');
    const url = req.url
    const method = req.method

    if (url === '/' && method === "GET") {
        res.writeHead(200, { "content-type": "text/json" })
        res.end(JSON.stringify({ message: 'This is root ' }))
    } else if (url?.startsWith('/products')) {
        res.writeHead(200, { "content-type": "text/json" })
        res.end(JSON.stringify({ message: 'This is produts route ' }))
    } else {

        res.writeHead(404, { "content-type": "text/josn" })
        res.end(JSON.stringify({ message: 'page not found' }))
    }
})

server.listen(5000, () => {
    console.log('Server running on a port: 5000');
})