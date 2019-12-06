import React, {Component} from 'react';
import {ProductCardList} from '../../components/Product-CardList/ProductCardList.component';
import ReactPaginate from 'react-paginate';
import HashLoader from 'react-spinners/HashLoader';

import './Products.style.css';
class Products extends Component {
    constructor() {
        super();
    
        this.state = {
          posts: [],
          page:'1',
          totalPages:0,
          loading:true
        };
      }

async getting() {
  try {
  const response = await 
  fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_e4024e453439c4b13448d6616981a74e25efb2c9&consumer_secret=cs_24be3417bff0ff39f6c3a20b62c75225c0a2b7f5&_embeded&per_page=12&page=${this.state.page}`);
  const posts = await response.json();
  const pages = await response.headers.get('X-WP-TotalPages');
  this.setState({ posts:posts, totalPages:Number(pages), loading:false});
} catch (error) {
  console.log(error);
}
}

componentDidMount() {
  this.getting();
}
handlePageClick = data => {
  let selected = data.selected;
  this.setState({ page: selected+1, loading:true}, () => {
    this.getting();
  });
};

  render() {
    return (
      <React.Fragment>
        {this.state.totalPages>1 ?
          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          initialPage={0}
          disableInitialCallback
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          forcePage={this.state.page-1}
        /> : null
    }
       <div className="main">{this.state.loading === false ?
       <ProductCardList posts={this.state.posts} /> : <div className="loader"><HashLoader
      sizeUnit={"px"}
      size={150}
      color={'#f1592a'}
      loading={this.state.loading}
    /></div>
    }</div>
       {this.state.totalPages>1 ?
          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          initialPage={0}
          disableInitialCallback
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          forcePage={this.state.page-1}
        /> : null
    }
      </React.Fragment>
    )
}
}
export default Products;