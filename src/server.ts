import { createServer, IncomingMessage, ServerResponse, type Server } from "http";
import { routeHandler } from "./routes/route";


const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('Server runing');
    
    routeHandler(req, res)
})

server.listen(5000, () => {
    console.log('Server running on a port: 5000');
})