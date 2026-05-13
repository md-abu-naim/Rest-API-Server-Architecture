import type { IncomingMessage, ServerResponse } from "http"
import { readProducts } from "../service/product.service"


export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url
    const method = req.method

    if (url === '/products' && method === "GET") {

        const products = readProducts()
        
        res.writeHead(200, { "content-type": "text/json" })
        res.end(JSON.stringify({ message: 'This is produts route', data: products }))
    }
} 