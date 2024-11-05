import Item from "../Item/Item";
import ProductDetail from "../ItemDetail/ItemDetail";
import { getProducts } from "../../data/asyncMock";
import { useState, useEffect } from "react";
import './ItemList.css';
import Loading from "../Loading/Loading";

export default function ItemList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setIsLoading(false);
        });
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="gallery-container">
                    {products.map((prod) => (
                        <div key={prod.id} onClick={() => handleProductClick(prod)}>
                            <Item {...prod} />
                        </div>
                    ))}
                </div>
            )}
            {selectedProduct && (
                <ProductDetail
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
}
