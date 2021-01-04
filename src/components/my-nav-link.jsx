import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component {

    render(){
        /*
        ...this.props 将外部传入的所有属性都传递给NavLink
        相当于以前的NavLink可以传什么，现在的MyNavLink就能传什么
        */
        return <NavLink {...this.props} activeClassName='activeClass'/>
    }
}