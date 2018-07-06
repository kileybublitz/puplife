import React, { Component } from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./SignUpForm.css";
import ImageUpload from "../ImageUpload/ImageUpload";
import API from "../../utils/API";



class SignUpForm extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: "",
    pet_name: "",
    state: "",
    city: "",
    breed: "",
    size: "",
    description: "",
    email: "",
    imgUrl: "",
    //errors: {}

  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log("name = ", name);
    console.log("value = ", value);

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const newUser={
    username: this.state.username,
    password: this.state.password,
    pet_name: this.state.pet_name,
    state: this.state.state,
    city: this.state.city,
    breed: this.state.breed,
    size: this.state.size,
    description: this.state.description,
    email: this.state.email,
    imgUrl: this.state.imgurl
    }
    this.props.registerUser(newUser)

    // this.props.onFormSubmit({
    //   ...this.state
    // });
    
    
  };

  onComplete = imgurl => {
    console.log(imgurl);
    this.setState({ imgurl: imgurl });
  };


  render() {
    //const { errors } = this.state;
    const { user } = this.props.auth
    
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h1 className="signUpPageTitle">Create Your Profile Below: </h1>
        <div className="container">
          <form className="form">
          
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              //className={classnames("form-control form-control-lg", {"is-invalid": errors.email})}
              placeholder="Please enter your email address"
            />
            <br />
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              //className={classnames("form-control form-control-lg", {"is-invalid": errors.username})}
              placeholder="Please enter a username"
            />
            
            <br />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              //className={classnames("form-control form-control-lg", {"is-invalid": errors.password})}
              placeholder="Please enter a password"
            />
            <br />
            <input
              value={this.state.state}
              name="state"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What state do you live in?"
            />
            <br />
            <input
              value={this.state.city}
              name="city"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What city do you live in?"
            />
            <br />
            <input
              value={this.state.pet_name}
              name="pet_name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What is your dog's name?"
            />
            <br />

            <input
              value={this.state.breed}
              name="breed"
              onChange={this.handleInputChange}
              type="text"
              placeholder="What breed is your dog?"
            />
            <br />
            <input
              value={this.state.description}
              name="description"
              onChange={this.handleInputChange}
              type="text"
              placeholder="How would you describe your pet (in 300 characters)"
            />
            <br />
            <ImageUpload onComplete={this.onComplete} />
            <img className="renderedImg" src={this.state.imgurl} />
            <button onClick={this.handleFormSubmit} className="signUpSubmitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state)=> ({
  auth: state.auth
})

export default connect(mapStateToProps, { registerUser })(SignUpForm);
