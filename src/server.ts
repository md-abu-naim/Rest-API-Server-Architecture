import { createServer, IncomingMessage, ServerResponse, type Server } from "http";
import { routeHandler } from "./routes/route";
import config from "./config";


const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('Server runing');
    
    routeHandler(req, res)
})

server.listen(config.port, () => {
    console.log(`Server running on a port: ${config.port}`);
})