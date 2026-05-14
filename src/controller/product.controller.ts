import type { IncomingMessage, ServerResponse } from "http"
import { readProducts } from "../service/product.service"
import type { IProduct } from "../types/product.type"
import { parseBody } from "../utility/parseBody"


export const productController = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url
    const method = req.method

    const urlParts = url?.split('/')
    const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null

    if (url === '/products' && method === "GET") {

        const products = readProducts()
        
        res.writeHead(200, { "content-type": "text/json" })
        res.end(JSON.stringify({ message: 'This is produts route', data: products }))
    }
    else if(method === 'GET' && id !== null){
        const products = readProducts()
        const product = products.find((p: IProduct) => p.id === id)
        
        res.writeHead(200, { "content-type": "text/json" })
        res.end(JSON.stringify({ message: 'Product retrived succefully', data: product }))
    }
    else if(method === "POST" && url === '/products'){
        const body = await parseBody(req)
        console.log(body);

        res.writeHead(200, { "content-type": "text/json" })
        res.end(JSON.stringify({ message: 'Product retrived succefully', data: body}))
    }
} 