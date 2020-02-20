import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Delete from './Delete/Delete';
import Create from './Create/Create';
import Navbar from './LandingPage/Navbar';
import User from '../index.js'
//Create a Main Component
// console.log(props);
class Main extends Component {
    render(){

        
        return(
            <div>
                {/*Render Different Component based on Route*/}
                {/* <Route exact path="/" component={()=>this.props.User?<Home/> : <Login/>} /> */}
                <Route path="/" component={Navbar}/>
                <Route path="/login" component={Login}/>

                {/* <Route component={EnsureLoggedIn}> */}
                
                    <Route path="/home" component={Home}/>
                    <Route path="/delete" component={Delete}/>
                    <Route path="/create" component={Create}/>
                {/* </Route> */}
                
            </div>
        )
    }
}
//Export The Main Component
export default Main;