  // src/components/ProductsPage.jsx

  import { useEffect, useState } from "react";
  import jsonData from "../data.json";

  function ProductsPage() {
    const [products, setProducts] = useState([jsonData]);

    useEffect(() => {
      // fetching data from JSON
      const fetchData = async () => {
        try {
          const response = await response.json('data.json');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);
    

    return (
      <div>
        <h1>IronStore</h1>
        {products.map(product => (
        <div key={product.id}>
          <h1>{product.category}</h1>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
        </div>
      ))}
      </div>
      );
    }

  export default ProductsPage;