import React, {Component} from "react";
import PhotoWall from "./PhotoWall";

import AddPhoto from "./AddPhoto";
import { Link, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Single from "./Single";





class Main extends Component {
       
    render(){
      
      return  <div> 
                    <h1>
                        <Link to="/photowall-react/"> PhotoWall </Link>
                    </h1>

                    <Routes>
                      <Route path="/photowall-react/" element={
                        <div>
                          <PhotoWall {...this.props} posts={this.props.posts} removePost={this.props.removePost} navigate={this.props.navigate} />
                        </div> 
                      }/>
                      
                      <Route exact path="/AddPhoto" element={ <AddPhoto addPost={this.props.addPost} navigate={this.props.navigate} /> }/> 

                      <Route exact path="/single/:id" element={ <Single {...this.props} params={this.props.params} match={this.props.match} /> } />
                    </Routes>            
              </div> 
    }
  }

  
  export default Main

