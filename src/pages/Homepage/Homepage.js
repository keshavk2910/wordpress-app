import React, {Component} from 'react';
import {CardList} from '../../components/Cardlist/CardList.component';
import HashLoader from 'react-spinners/HashLoader';

class Homepage extends Component {
    constructor() {
        super();
    
        this.state = {
          posts: [],
          loading:true
        };
      }
componentDidMount() {
    fetch('https://bigbuildingdev.tk/wp-json/wp/v2/posts/?_embed&per_page=100')
    .then(response => response.json())
    .then((posts) => this.setState({ posts:posts, loading:false}))
    .catch((error) => {
      console.error(error);
    })
}
  render() { 
    return (
      <React.Fragment>
      {this.state.loading === false ? <CardList posts={this.state.posts} /> : <div className="loader"><HashLoader
     sizeUnit={"px"}
     size={150}
     color={'#f1592a'}
     loading={this.state.loading}
   /></div>}
      </React.Fragment>
    )
}
}
export default Homepage;