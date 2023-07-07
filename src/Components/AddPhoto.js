import React, {Component} from "react";

class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        console.log("Adding post:", post);
        if (imageLink && description) {
            console.log(this.props.addPost);
            this.props.addPost(post)
            this.navigateToHome()
        }
    }

    navigateToHome = () => {
        const { navigate } = this.props;
        navigate('/photowall-react');
      }

    render(){
        console.log(this.props.addPost);
                 return <div>
                    <div className="form">
                        <form onSubmit={this.handleSubmit} >
                            <input type="text" placeholder="Link" name="link" />
                            <input type="text" placeholder="Description" name="description" />
                            <button>post</button>
                        </form>
                        
                    </div>
                </div>
    }
}


export default AddPhoto

