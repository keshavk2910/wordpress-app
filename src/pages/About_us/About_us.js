import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import parse from 'html-react-parser';

//Components


class About_us extends Component {
  constructor() {
    super();
    this.state = {
        data:[]
    }
}
// Function to receivedata from the endpoint
receiveData(){
  axios
      .get(`https://bigbuildingdev.tk/wp-json/wp/v2/pages/587`, {})
      .then(res => {
          const data = res.data
          const content = parse(data.content.rendered)
this.setState({content})
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
      <div>
       {this.state.content}
      </div>
    )
  }
}
export default About_us;