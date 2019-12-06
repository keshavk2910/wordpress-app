import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import parse from 'html-react-parser';
import HashLoader from 'react-spinners/HashLoader';

//Components


class About_us extends Component {
  constructor() {
    super();
    this.state = {
        data:[],
        loading:true
    }
}
// Function to receivedata from the endpoint
receiveData(){
  axios
      .get(`https://bigbuildingdev.tk/wp-json/wp/v2/pages/587`, {})
      .then(res => {
          const data = res.data
          const content = parse(data.content.rendered)
this.setState({content, loading:false})
})
      .catch((error) => {
          console.log(error)
      })
}
//Calling the receiveData function inside lifecycle method
componentDidMount(){
  this.receiveData()
}
render() {
    return (
      <React.Fragment>
       {this.state.loading === false ? this.state.content : 
      <div className="loader"><HashLoader
     sizeUnit={"px"}
     size={150}
     color={'#f1592a'}
     loading={this.state.loading}
   /></div>}
       </React.Fragment>
    )
  }
}
export default About_us;