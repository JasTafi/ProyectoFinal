import React, { useState } from "react";

export const useFilterProducts = (initialProducts) => {
	const [filters, setFilters] = useState({
		categoria: "all",
		precio:  0
	})

	const filterProduct = (products) => {
		return products.filter(product => {
			return (
				product.precio >= filters.precio && (
					filters.categoria === "all" ||
					product.categoria === filters.categoria
				)
			)
		})
	}
	const applyFilter = (newFilters) => {
		setFilters((prevFilters) => ({...prevFilters, ...newFilters}))
	}
	const filteredProducts = filterProduct(initialProducts)
  return {filteredProducts, filters, setFilters ,applyFilter};
};
