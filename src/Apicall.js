import React, {Component} from 'react';
import axios from 'axios';

class Apicall extends Component {

    constructor(props){
        super(props);

        this.state={
            posts:[],
            subr:'space'
        }
    }
    
    componentDidMount(){
        this.getReddit();
    }

    async getReddit(){
        axios.get(`https://www.reddit.com/r/KerbalSpaceProgram/comments/${this.state.subr}/help/.json`)
        .then(response => {
            const posts =  response.data[1].data.children.map(obj=>obj.data);
            this.setState({posts});
            console.log(posts)
        })
    }
    render() {
      return(
          <div>
              <h1>{`/r/${this.state.subr}`}</h1>
              <ul>
                  {
                      this.state.posts.map(post=>
                        <li key={post.id}>{post.body}</li>)
                  }
              </ul>
          </div>
      )
    }
  }

  export default Apicall;