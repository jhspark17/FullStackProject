import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Zip from 'react-zipcode';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: "",};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  errorHandling(){
    if(this.props.errors.length > 0) {
      return(this.props.errors[0]);
    };
    return "";
  }


  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
    .then(() => this.props.history.push('/'));
  }

  getFirstAndLast(){
    if (this.props.formType === "Sign Up") {
      return(
        <div className="first-and-last-container">
        <input type="text" onChange={this.update("first_name")} value={this.state.first_name} placeholder="First Name" className="first-and-last" />
        <input type="text" onChange={this.update("last_name")} value={this.state.last_name} placeholder="Last Name" className="first-and-last" />
        </div>
        )
      }
      return "";
    }

  getZipCode(){
    if(this.props.formType === "Sign Up") {
      return (<input type="numeric" onChange={this.update("zip_code")} value={this.state.zip_code} placeholder="Zip Code" className="zip-code"/>)
    } 
  }

  switch(){
    if (this.props.formType === "Sign In") {
      return (<div>New to Yawp?<Link to="/signup">Sign Up</Link></div>)
    } else {
      return (<div>Aready on Yawp?<Link to="/signin">Log In</Link></ div> )
    }
  }


  redHeader() {
    if (this.props.formType === "Sign In") {
      return(
        <div>
          <h2>Log In to Yawp</h2> 
        </div>
      )
    } else {
    return(
      <div>
        <h2>Sign Up for Yawp</h2>
      </div>
      )
    }
  }

  belowRedHeader(){
    if (this.props.formType === "Sign In") {
      return (
        <div>
          <h2>New to Yawp?  <Link to="/signup"> Sign Up</Link> </h2>
        </div>
      )
    } else {
    return(
      <div>
        <h2>Connect with a great <a href="https://github.com/jhspark17">developer</a></h2>
      </div>
    )
    }
  }

  privacyPolicy(){
    if (this.props.formType === "Sign In") {
      return (
        <div>
          <h2>By logging in, you agree to nothing. </h2>
        </div>
      )
    } else {
      return (
        <div>
          <h2>By continuing, you agree to nothing.</h2>
        </div>
      )
    }
  }

  submit(){
    if (this.props.formType === "Sign In") {
      return (
        <div>
          <input type="submit" onClick={this.handleSubmit} value="Log In" className="submit" />
        </div>
      )
    } else {
      return (
        <div>
          <input type="submit" onClick={this.handleSubmit} value="Sign Up" className="submit" />
        </div>
      )
    }
   
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }
  
  render(){
    if (this.props.currentUser) {
      <Redirect to="/" />
    }
      return(
        <div>
      <header className="header-form">
          <Link to="/">
              <div id="header-word-logo">
                yawp<i id="icon-logo" className="fas fa-globe"></i>
              </div>
           </Link> 
       </header >
        <div className="session-container">
        <div className="session-inner-container">
        <form className="session-form"  onSubmit={this.handleSubmit}>
          {this.errorHandling()}
          <div className="red-header-session">
          {this.redHeader()}
          </div>
          <div className="below-red-header">
            {this.belowRedHeader()}
          </div>
          <div homeName="privacy-policy">
            {this.privacyPolicy()}
          </div>
          <div >
            {this.getFirstAndLast()}
          </div>
            <div >
              <input className="email-password-form" type="text" onChange={this.update("email")} value={this.state.email} placeholder="Email"/>
              <input className="email-password-form" type="password" onChange={this.update("password")} value={this.state.password} placeholder="Password" />
          </div>
            <div >
            {this.getZipCode()}
            </div>
            <div>
            {this.submit()}
              </div>
              <div className="switch">
            {this.switch()}
              </div>
        </form>
            
          <div className="session-img">
            <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt=""/>
          </div>
            </div>
          </div>
        </div>
      ) 
  }
}

export default SessionForm;