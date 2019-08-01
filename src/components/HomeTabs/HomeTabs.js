import React, { Component } from 'react';
import Tab from './Tab.js';
import './HomeTabs.css';

class HomeTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label
        }
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(label) {
        this.setState({ activeTab: label });
    }

    render() {
        return (
            <div className="rootOfTabs">
                <div className="allTabs">{
                    this.props.children.map((child, index) =>
                        <Tab onChangeTab={this.changeTab} activeTab={this.state.activeTab} label={child.props.label} key={index} />)
                }
                </div>

                <div className="tabContent">
                    {
                        this.props.children.map((child) => {
                            if (child.props.label !== this.state.activeTab) 
                                return undefined;
                            return child.props.children;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HomeTabs;