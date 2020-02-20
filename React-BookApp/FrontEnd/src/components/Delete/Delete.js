import React, {Component} from 'react';
import {Redirect} from 'react-router';
import cookie from 'react-cookies';
import axios from 'axios';

class Delete extends Component{
    constructor(props){
        super(props);
        this.state = {
            BookID : "",
        }
    }

    bookIdChangeHandler = (e) => {
        this.setState({
            BookID : e.target.value
        })
    }

    submitLogin = (e) => {
        var headers = new Headers();
        //prevent page from refresh
        // console.log(this.state);
        e.preventDefault();
        const data = {
            BookID : this.state.BookID,
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/delete',data)
            .then(response => {
                console.log("Status Code Create : ",response.data);
                // console.log(response.data);
                if(response.data === 'No_such_Book_Id'){
                    alert("No Book of this ID");
                }
                if(response.data === 'Deleted_Successfully'){
                    window.open('/home', "_self");
                }
                // if(response.status === 200){
                //     console.log('Successssss');
                //     // history.push('/home');
                //     // window.open('/home', "_self");
                // }else{
                //     // alert('BookID ' + this.state.BookID + 'already exists');
                //     console.log('Not entered');
                // }
            });
    }

    render(){
        let redirectVar = null;
        if((cookie.load('cookie'))){
            
        }
        else{
            console.log('UNALLLLLLLBEEEEE');
            redirectVar = <Redirect to= "/home"/>
        }
        return(
            <div>
            {redirectVar}
            <div class="container">
                <form>
                    <div style={{width: "50%",float: "left"}} class="form-group">
                        <input type="number" onChange = {this.bookIdChangeHandler} class="form-control" name="BookID" placeholder="Search a Book by Book ID"/>
                    </div>
                    <div style={{width: "50%", float: "right"}}>
                            <button class="btn btn-success" onClick={this.submitLogin} >Delete</button>
                    </div> 
                </form>
            </div>
            </div>
        )
    }
}

export default Delete;