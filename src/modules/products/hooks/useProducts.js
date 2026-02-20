import { useState, useMemo } from 'react';
import { products as staticProducts, categories } from '../../../static-data/products';

export const useProducts = () => {
  const [filter, setFilter] = useState({
    category: '',
    searchText: ''
  });

  const products = useMemo(() => {
    let filtered = [...staticProducts];

    if (filter.category) {
      filtered = filtered.filter(product => product.category === filter.category);
    }

    if (filter.searchText) {
      const searchLower = filter.searchText.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [filter]);

  return {
    products,
    filter,
    setFilter,
    categories
  };
};
