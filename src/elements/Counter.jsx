import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Counter extends Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        let Data = [
            {
                countNum : 40,
                countTitle: 'The only number that is spelt with letters arranged in alphabetical order',
            },
            {
                countNum : 672,
                countTitle: 'The international telephone dialing code for Antarctica.',
            },
            {
                countNum : 1917,
                countTitle: 'The first written use of "OMG" was in a 1917 letter to Winston Churchill.',
            }
        ];

        return(
            <Fragment>
                <div className="row">
                    {Data.map( (value, index) => (
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                            <h5 className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                </VisibilitySensor>
                            </h5>
                            <p className="description">{value.countTitle}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default Counter;