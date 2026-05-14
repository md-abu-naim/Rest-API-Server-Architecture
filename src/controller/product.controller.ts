import type { IncomingMessage, ServerResponse } from "http"
import { insterProduct, readProducts } from "../service/product.service"
import type { IProduct } from "../types/product.type"
import { parseBody } from "../utility/parseBody"
import { sendResponse } from "../utility/sendResponse"


export const productController = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url
    const method = req.method

    const urlParts = url?.split('/')
    const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null

    if (url === '/products' && method === "GET") {

        const products = readProducts()

        sendResponse(res, 200, true, 'This is produts route', products)
    }
    else if (method === 'GET' && id !== null) {
        const products = readProducts()
        const product = products.find((p: IProduct) => p.id === id)

        if(!product){
            sendResponse(res, 404, true, 'Product not found', null)
        }

        sendResponse(res, 200, true, 'Product retrived succefully', products)
    }
    else if (method === "POST" && url === '/products') {
        const body = await parseBody(req)
        const products = readProducts()

        const newProduct = {
            id: Date.now(),
            ...body
        }

        products.push(newProduct)


        insterProduct(products)
        sendResponse(res, 200, true, 'Product retrived succefully', products)
    }
    else if (method === 'PUT' && id !== null) {
        const body = await parseBody(req)
        const products = readProducts()

        const index = products.findIndex((p: IProduct) => p.id === id)

        if (index < 0) {
            sendResponse(res, 404, true, 'product not found', products)
        }

        products[index] = {id: products[index].id, ...body}

        insterProduct(products)
        sendResponse(res, 200, true, 'Product update successfully', products)
    }
    else if(method === 'DELETE' && id !== null){
        const products = readProducts()

        const index = products.findIndex((p: IProduct) => p.id === id)

        if (index < 0) {
            sendResponse(res, 404, true, 'Product not found', products)
        }

        products.splice(index, 1)

        insterProduct(products)
        sendResponse(res, 200, true, 'Product delete successfully', products)
    }
} 