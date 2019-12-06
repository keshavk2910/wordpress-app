import React from 'react';
import {Link} from 'react-router-dom';


import './ProductCard.styles.css';

const ProductCard = (props) => {
    return (
        <Link to={{pathname: `/product/${props.post.id}`}}>
    <div className='card-container'>
        <h1 key={props.post.id}>{props.post.name}</h1>
            {props.post.images ?
                <img alt={props.post.name} src={props.post.images[0].src} />
            : null}
            <div className="price" dangerouslySetInnerHTML={{ __html: props.post.price_html }}/>
            <div className="content" dangerouslySetInnerHTML={{ __html: props.post.description }} />
    </div>
    </Link>
    );
}

export default ProductCard;