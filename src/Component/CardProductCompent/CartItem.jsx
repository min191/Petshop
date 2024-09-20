import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { API_LIST } from '../../utils/helper';

const CartItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(API_LIST);
        const result = await response.json();
        const AllProduct = result?.list?.slice(0, 16) || [];
        setProducts(AllProduct);
        setFilteredProducts(AllProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(category === 'All' ? products : products.filter(product => product.category === category));
  }, [category, products]);

  const formatPrice = (price) => price.toLocaleString('vi-VN');

  return (
    <div className="row">
      <div className='d-flex justify-content-center'>
        {['All', 'Dog', 'Cat'].map(cat => (
          <button
            key={cat}
            className='btn btn-outline-dark px-3 m-2'
            onClick={() => setCategory(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      {isLoading ? <p>Loading products...</p> : (
        filteredProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => navigate(`/detail/${product.id}`)}
            style={{ width: "20rem" }}
            className={`${styles.zoom} card col-4 m-1 my-3`}
          >
            <img src={product.img} style={{ height: '300px' }} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <span style={{ color: 'rgb(117, 117, 117)' }}>
                {formatPrice(product.price)} VNĐ
              </span>
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default CartItem;
