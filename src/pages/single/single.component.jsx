import React, {Component} from 'react';
import axios from "axios";
import './single.style.css';
import HashLoader from 'react-spinners/HashLoader';

class Single extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:`${props.match.params.id}`,
            post:{},
            loading:true
        }
    }
    
    componentDidMount () {
        const id = this.props.match.params.id;
        axios
      .get(`https://bigbuildingdev.tk/wp-json/wp/v2/posts/${id}?_embed`)
      .then(post => {
        this.setState({
          post: post.data,
          loading:false
        });
      });
    }
    
render() {
    return (
      <React.Fragment>
      {this.state.loading === false ?
        <div className="single">
          <h1>{this.state.post.title.rendered}</h1>
          {this.state.post.featured_media ?
                <a href={this.state.link}>
                <img alt={this.state.post.title.rendered} src={this.state.post._embedded['wp:featuredmedia'][0].source_url} /></a>
            : null}
          <div dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} />
        </div> : 
      <div className="loader"><HashLoader
      sizeUnit={"px"}
      size={150}
      color={'#f1592a'}
      loading={this.state.loading}
    /></div>
    }
      </React.Fragment>
    );
}
}
export default Single;