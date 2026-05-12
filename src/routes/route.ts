import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controller";


export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url
    const method = req.method

    if (url === '/' && method === "GET") {
        res.writeHead(200, { "content-type": "text/json" })
        res.end(JSON.stringify({ message: 'This is root ' }))
    } else if (url?.startsWith('/products')) {

        productController(req, res)
    } else {
        res.writeHead(404, { "content-type": "text/josn" })
        res.end(JSON.stringify({ message: 'page not found' }))
    }
}