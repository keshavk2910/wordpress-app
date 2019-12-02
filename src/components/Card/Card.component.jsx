import React from 'react';

import './card.styles.css';

export const Card = props => {
    return <div className='card-container'>
    <h1 key={props.post.id}>{props.post.title.rendered}</h1>
            {props.post.featured_media ?
                <a href={props.link}>
                <img src={props.post._embedded['wp:featuredmedia'][0].source_url} /></a>
            : null}
            <div className="content" dangerouslySetInnerHTML={{ __html: props.post.content.rendered }} />
    </div>;
}