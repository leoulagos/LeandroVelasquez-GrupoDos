import React from "react";
import './CategoryFilter.css';

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
    return (
        <div className="category-filter">
            <label>Filtrar por categoría:</label>
            <select onChange={(e) => onCategoryChange(e.target.value)} value={selectedCategory}>
                <option value="All">Todas</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Computadoras">Computadoras</option>
                <option value="Componentes">Componentes</option>
            </select>
        </div>
    );
}
