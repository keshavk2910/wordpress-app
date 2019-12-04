import React, {Component} from 'react';
import './Homepage.style.css';
import {CardList} from '../../components/Cardlist/CardList.component';

class Homepage extends Component {
    constructor() {
        super();
    
        this.state = {
          posts: [],
        };
      }
//https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_e4024e453439c4b13448d6616981a74e25efb2c9&consumer_secret=cs_24be3417bff0ff39f6c3a20b62c75225c0a2b7f5
componentDidMount() {
    fetch('https://bigbuildingdev.tk/wp-json/wp/v2/posts/?_embed&per_page=100')
    .then(response => response.json())
    .then((posts) => this.setState({ posts:posts,}))
    .catch((error) => {
      console.error(error);
    })
}
  render() { 
    return (
      <React.Fragment>
      <CardList posts={this.state.posts} />
      </React.Fragment>
    )
}
}
export default Homepage;