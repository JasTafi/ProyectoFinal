import React, { useState } from "react";

export const FilterProducts = (products) => {
	const [filters, setFilters] = useState({
		categoria: "Mouse",
		minPrecio:  0
	})

	const filterProduct = (products) => {
		return products.filter(product => {
			return (
				product.precio >= filters.minPrecio && (
					filters.categoria === "all" ||
					product.categoria === filters.categoria
				)
			)
		})
	}

	const filteredProducts = filterProduct(products)
  return console.log(filteredProducts);
};
