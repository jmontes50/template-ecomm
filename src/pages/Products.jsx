import { useProducts } from '../modules/products/hooks/useProducts';
import { ProductList } from '../modules/products/components/ProductList';
import useGetAxios from '../hooks/useAxios';

export const Products = () => {
  const { products, filter, setFilter, categories } = useProducts();

  const handleCategoryChange = (e) => {
    setFilter({ ...filter, category: e.target.value });
  };

  const handleSearchChange = (e) => {
    setFilter({ ...filter, searchText: e.target.value });
  };

  const URL = "https://minimal-product-api.onrender.com/api/products";

  const { data, loading, error } = useGetAxios(URL);
  console.table(data);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="form-control w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="input input-bordered w-full md:w-80"
            value={filter.searchText}
            onChange={handleSearchChange}
          />
        </div>

        <div className="form-control w-full md:w-auto">
          <select
            className="select select-bordered w-full md:w-64"
            value={filter.category}
            onChange={handleCategoryChange}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ProductList products={products} />
    </div>
  );
};
