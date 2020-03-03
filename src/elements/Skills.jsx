import React, { Component } from "react";

class SkillsLogo extends Component{
    render(){
        return(
            <React.Fragment>
                <ul className="brand-style-2">
                    <li>
                        <img src="/assets/images/brand/js-logo.png" alt="JavaScript"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/react-logo.png" alt="ReactJS"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/bootstrap-logo.png" alt="Bootstrap"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/python-logo.png" alt="Python"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/flask-logo.png" alt="Flask"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/mongodb-logo.png" alt="MongoDB"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/mysql-logo.png" alt="MySQL"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/git-logo.png" alt="Git"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/node-logo.png" alt="Node"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default SkillsLogo;