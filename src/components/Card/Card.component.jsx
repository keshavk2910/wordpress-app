import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';


import './card.styles.css';

const Card = (props) => {
    const date = props.post.date;
    const formattedDate = moment(date).format("LL");
    return (
        <Link to={{pathname: `/single/${props.post.id}`}}>
    <div className='card-container'>
        <h1 key={props.post.id}>{props.post.title.rendered}</h1>
        <h4>{formattedDate}</h4>
            {props.post.featured_media ?
                <img alt={props.post.title.rendered} src={props.post._embedded['wp:featuredmedia'][0].source_url} />
            : null}
            <div className="content" dangerouslySetInnerHTML={{ __html: props.post.content.rendered }} />
    </div>
    </Link>
    );
}

export default Card;