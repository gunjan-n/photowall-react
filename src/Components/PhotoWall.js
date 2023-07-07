import React, {Component} from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
    render(){
        
        return <div>
                    <Link to="/AddPhoto" className="addIcon" >  </Link>
                    <div className="photo-grid">
                        {this.props.posts && this.props.posts
                        .sort((x, y) =>  y.id - x.id)
                        .map((post, index) => <Photo key={post.id}  {...this.props} post={post} removePost={this.props.removePost} index={index} />)}
                    </div>
                 </div>
    }
}

export default PhotoWall

