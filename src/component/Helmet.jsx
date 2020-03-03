import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Roman Khalnepesov || Full Stack Developer </title>
                    <meta name="description" content="Web Developer || SPA Developer || JS Developer || Front End Developer || Back End Developer" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
