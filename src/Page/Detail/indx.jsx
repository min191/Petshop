import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../Component/CartProvider';
import { formatPrice } from "../../utils/helper"

const DetailPage = () => {
    const [detail, setDetail] = useState(null);
    let { id } = useParams();
    const [quantitys, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const { addToCart } = useContext(CartContext);

    const handleQuantityChange = (event) => {
        const newValue = parseInt(event.target.value || '0');
        const oldValue = quantitys;
        setQuantity(newValue);
        setTotal(oldValue + newValue);
    };

    const onClickAddToCart = () => {
        console.log(detail);
        addToCart({
            id: detail.id,
            img: detail.img,
            title: detail.title,
            quantity: quantitys,
            price: detail.price,
        });
    };
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/minh/detail/${id}`).then((res) => res.json());
            setDetail(response.detail);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div>
            {detail && (
                <>
                    <div className='d-flex justify-content-around my-5'>
                        <img src={detail.img} style={{ width: '450px' }} className="mx-5" />
                        <div className='text-start mx-5 '>
                            <h1>{detail.title}</h1>
                            <p className='my-3 me-5'>{detail.description}</p>
                            <h3 className='text-danger my-2'>{formatPrice(detail.price)} VNĐ</h3>
                            <div className='d-flex'>
                                <div style={{ borderRadius: '5px' }}
                                    className='d-flex justify-content-between border w-50  m-2' >
                                    <p className='fw-lighter m-2'>QUANTITY</p>
                                    <input
                                        style={{ width: '60px', border: 'none' }}
                                        type="text"
                                        value={quantitys}
                                        onChange={handleQuantityChange}
                                        min="0"
                                    />
                                </div>
                                <button onClick={onClickAddToCart} className='btn btn-warning m-2'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-start m-3'>
                        <h1>RELATED PRODUCTS</h1>
                        <div style={{
                            width: '300px',
                            textAlign: 'center'
                        }}
                            className='p-3'
                        >
                            <img src={detail.img} style={{ width: "250px" }} alt="Selected product" />
                            <h4>{detail.name}</h4>
                            <p className='fw-lighter'>{formatPrice(detail.price)} VNĐ</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DetailPage;
