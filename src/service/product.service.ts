import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "./src/database/db.json")

export const readProducts = () => {
    const products = fs.readFileSync(filePath, 'utf-8')
    // console.log(products.toString());

    console.log(products);

    return JSON.parse(products)
}


export const insterProduct = (payload: any) => {
    fs.writeFileSync(filePath, JSON.stringify(payload))
}