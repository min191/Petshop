import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Instagram_1,
    Instagram_2,
    Instagram_3,
    Instagram_4,
} from '../../assets';

const HistoryHomePage = () => {
    return (
        <div className='my-5 bg-light container-fluid p-5'>
            <h1 className='my-3'>Instagram</h1>
            <div className='row my-3'>
                <div className='col-md-3 mb-4'>
                    <img className='img-fluid' style={{height:'300px',width:'350px'}} src={Instagram_1} />
                </div>
                <div className='col-md-3 mb-4'>
                    <img className='img-fluid' style={{height:'300px',width:'350px'}} src={Instagram_2} />
                </div>
                <div className='col-md-3 mb-4'>
                    <img className='img-fluid' style={{height:'300px',width:'350px'}} src={Instagram_3} />
                </div>
                <div className='col-md-3 mb-4'>
                    <img className='img-fluid' style={{height:'300px',width:'350px'}} src={Instagram_4} />
                </div>
            </div>
        </div>
    );
};

export default HistoryHomePage;
