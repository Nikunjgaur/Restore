import { useState, useEffect } from "react";
import { Product } from "../../products"
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";



export default function Cataloge() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
        .catch(() => console.log('Error occured while setting products'))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent/>

    return (
        <>
            <ProductList products={products} />
        </>

    )
}