class EnsureLoggedIn extends React.Component{
    componentDidMount(){
        const { dispatch, currentURL } = this.props;

        if(!isLoggedIn){
            dispatch(setRedirectUrl(currentURL));
            browserHistory.replace("/login");
        }
    }

    render() {
        if(isLoggedIn){
            return this.props.children;
        }
        else{
            return null;
        }
    }

    mapStateToProps(state, ownProps) {
        return {
            isLoggedIn : state.loggedIn,
            currentURL: ownProps.location.pathname
        }
        
    }

   
}

export default connect(mapStateToProps)(EnsureLoggedInContainer);