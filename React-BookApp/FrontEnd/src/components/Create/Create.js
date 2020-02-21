import React, {Component} from 'react';
import {Redirect} from 'react-router';
import cookie from 'react-cookies';
import axios from 'axios';
// import history from 'history';

class Create extends Component{
    constructor(props){
        super(props);
        this.state = {
            BookID : "",
            Title : "",
            Author : ""
        }
    }

    bookIdChangeHandler = (e) => {
        this.setState({
            BookID : e.target.value
        })
    }

    bookTitleChangeHandler = (e) => {
        this.setState({
            Title : e.target.value
        })
    }

    authorChangeHandler = (e) => {
        this.setState({
            Author : e.target.value
        })
    }

    submitLogin = (e) => {
        // var headers = new Headers();
        //prevent page from refresh
        // console.log(this.state);
        e.preventDefault();
        const data = {
            BookID : this.state.BookID,
            Title : this.state.Title,
            Author : this.state.Author
        }
        console.log(data.BookID);
        console.log(data.Title);
        console.log(data.Author);

        if(data.BookID && data.Title && data.Author){

        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/create',data)
            .then(response => {
                console.log("Status Code Create : ",response.data);
                if(response.data === 'Book_Id_Exists'){
                    alert("Book already there");
                }
                if(response.data === 'Successful_Insertion'){
                     window.open('/home', "_self");
                }

            });
        }
            else{
                alert('One of the inputs is missing');
                console.log('Something missing');
            }
    }


    render(){
        // console.log(cookie);
        let redirectVar = null;
        if((cookie.load('cookie'))){
            // redirectVar = <Redirect to= "/home"/>
        }
        else{
            // console.log('UNALLLLLLLBEEEEE');
            redirectVar = <Redirect to= "/home"/>
        }
        return(
            <div>
                {redirectVar}
                <br/>
                <div class="container">
                    
                        <div style={{width: '30%'}} class="form-group">
                            <input  type="number" onChange = {this.bookIdChangeHandler} class="form-control" name="BookID" required placeholder="Book ID"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input  type="text" onChange = {this.bookTitleChangeHandler} class="form-control" name="Title" required placeholder="Book Title"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input  type="text" onChange = {this.authorChangeHandler} class="form-control" name="Author" required placeholder="Book Author"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}}>
                            <button class="btn btn-success" onClick={this.submitLogin} >Create</button>
                        </div> 
                </div>
            </div>
        )
    }
}

export default Create;