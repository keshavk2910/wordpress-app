import React from 'react';

import Card from '../Card/Card.component';

import './cardlist.styles.css';

export const CardList = props => {
     return (
     <div className="container-list">
     <div className='card-list'>
     {
        props.posts.map(post => 
            <Card key={ post.id } post={post}/>
            )
      }
      </div>
      </div>);
};