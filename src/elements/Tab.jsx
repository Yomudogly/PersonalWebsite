import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class NewTabs extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Experience",
        tab3 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <span>Proficient Languages -</span><br/>
                                                    JavaScript and Python
                                                </li>
                                                <li>
                                                    <span>Libraries and Frameworks -</span><br/>
                                                    ReactJS, Flask, Bootstrap, MaterialUI, NodeJS
                                                </li>
                                                <li>
                                                    <span>Tools and Technologies -</span><br/>
                                                    Trello, Jira, Bitbucket, Git, Webpack, Gatsby, Elementor
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <span>Front End Developer - Innova Consult</span><br/>
                                                    2019 - 2020
                                               </li>
                                               <li>
                                                    <span>Front End Developer/WordPress - Freelance</span><br/>
                                                    2014 - 2017
                                               </li>
                                               <li>
                                                    <span>Software Administrator - SP-Link</span><br/>
                                                    2015 - 2016
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                    <span>Certificate in Full Stack Development</span><br/>
                                                    <span>4Geeks Academy, Miami FL</span><br/>
                                                    2019 - 2020
                                               </li>
                                               <li>
                                                    <span>Master of Organizational Management</span><br/>
                                                    <span>National Agrarian University, Vinnytsia UA</span><br/>
                                                    2011 - 2013
                                               </li>
                                               <li>
                                                    <span>Bachelor of Public Administration</span><br/>
                                                    <span>University of Management and Law, Khmelnytsky UA</span><br/>
                                                    2005 - 2010
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default NewTabs;