import React, {Component} from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

class Photo extends Component {
    render(){
        const post = this.props.post;
        const index = this.props.index;
        // console.log(this.props.index)
        return <figure className="figure">
            <Link to={`/photowall-react/single/${post.id}`}>
                <div className="image-wrapper">
                    <img className="photo" src={post.imageLink} alt={post.description}  />
                </div>
            </Link>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button onClick={() =>{
                    this.props.removePost(index)
                    this.props.navigate('/photowall-react')
                }} > Remove </button>
                <Link className="button" to={`/photowall-react/single/${post.id}`}>
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {this.props.comments[post.id] ? this.props.comments[post.id].length : 0}
                    </div>
                </Link>
            </div>
        </figure>
    }
}

export default Photo

