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