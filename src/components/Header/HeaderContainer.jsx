import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {authMe} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setUserData(id, email, login);
            }
        })
    }
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);