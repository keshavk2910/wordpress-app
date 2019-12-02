import React, {Component} from 'react';
import './Homepage.style.css';
import 'bootstrap/dist/css/bootstrap.css';

class Homepage extends Component {
    constructor() {
        super();
    
        this.state = {
          posts: [],
        };
      }

componentDidMount() {
    fetch('https://bigbuildingdev.tk/wp-json/wp/v2/posts/?_embed&per_page=10')
    .then(response => response.json())
    .then((posts) => this.setState({ posts:posts,}))
    .catch((error) => {
      console.error(error);
    })
    console.log(this.state.posts);
}
  render() { 
    return (
        <div class="container">
         <div className='row'>
    {
        this.state.posts.map((post, index) => (
            <div className='col-sm'>
            <h1 key={index}>{post.title.rendered}</h1>
            {post.featured_media ?
                <a href={post.link}>
                <img src={post._embedded['wp:featuredmedia'][0].source_url} /></a>
            : null}
            <div className="content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
        ))
    }
    </div>
    </div>
    )
}
}
export default Homepage;