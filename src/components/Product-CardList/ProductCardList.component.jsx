import React from 'react';

import ProductCard from '../ProductCard/ProductCard.component';

import './ProductCardList.styles.css';

export const ProductCardList = props => {
     return (
     <div className="container-list">
     <div className='card-list'>
     {
        props.posts.map(post => 
            <ProductCard key={ post.id } post={post}/>
            )
      }
      </div>
      </div>);
};