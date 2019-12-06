import React, {Component} from 'react';
import axios from "axios";
import HashLoader from 'react-spinners/HashLoader';

import './SingleProduct.style.css';

class SingleProduct extends Component {
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
      .get(`https://bigbuildingdev.tk/wp-json/wc/v2/products/${id}?consumer_key=ck_e4024e453439c4b13448d6616981a74e25efb2c9&consumer_secret=cs_24be3417bff0ff39f6c3a20b62c75225c0a2b7f5&_embed`)
      .then(post => {
        this.setState({
          post: post.data,
          loading:false
        });
      });
    }
    
render() {
   return( 
    <React.Fragment>
      {this.state.loading === false?
        <div className="single">
          <h1>{this.state.post.name}</h1>
          {this.state.post.images ?
                <img alt={this.state.post.name} src={this.state.post.images[0].src} />
            : null}
            <div className="price" dangerouslySetInnerHTML={{ __html: this.state.post.price_html }}/>
          <div dangerouslySetInnerHTML={{ __html: this.state.post.description }} />
        </div>:
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
export default SingleProduct;