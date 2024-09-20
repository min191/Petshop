import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { API_LIST, formatPrice } from '../../utils/helper';


const BestSeller = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(API_LIST).then((res) => res.json());
            setProducts(response?.list?.slice(0, 8));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderListProducts = () => {
        return products?.map((product) => (
            <button
                key={product.id}
                onClick={() => navigate(`/detail/${product.id}`)}
                style={{ width: "20rem" }}
                className={`${styles.category} card col-2 m-1 my-3`}
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
    }

    return (
        <div className="container">
            <h1 className='mt-5'>Shop</h1>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", gridRowGap: "10px" }}>
                {isLoading ? <p>Loading products...</p> : renderListProducts()}
            </div>
            <button className='btn  btn-outline-warning'
                onClick={() => navigate(`/shop`)}>
                More <i className="bi bi-arrow-right"></i>
            </button>
        </div>
    );
};


export default BestSeller;
