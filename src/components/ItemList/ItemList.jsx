import Item from "../Item/Item";
import ProductDetail from "../ItemDetail/ItemDetail";
import { getProducts } from "../../data/asyncMock";
import { useState, useEffect } from "react";
import './ItemList.css';
import Loading from "../Loading/Loading";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

export default function ItemList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All'); // Este es el estado para la categoría seleccionada

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setIsLoading(false);
        });
    }, []);

    // Filtrar productos por la categoría seleccionada

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />

            {isLoading ? (
                <Loading />
            ) : (
                <div className="gallery-container">
                    {filteredProducts.map((prod) => (
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
