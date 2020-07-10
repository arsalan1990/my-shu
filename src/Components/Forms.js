import React from 'react';



class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      contact: null,
      comments: '', 

    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form className={"forms"}>
        <h1>Your Query</h1>
      <h1>Hello {this.state.username} {this.state.age}</h1>
     
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />

      <p>Enter your email:</p>
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />

      <p>Enter your contact:</p>
      <input
        type='number'
        name='contact'
        onChange={this.myChangeHandler}
      />

      <p>Comments:</p>
      <input
        type='text'
        name='comments'
        onChange={this.myChangeHandler}
      />

      <br /> <br />

      <input type='submit' />

      </form>
    );
  }
}

export default Forms;