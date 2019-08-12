import React, { Component } from 'react';
import Tab from './Tab.js';
import './HomeTabs.css';
import { changeTab } from '../../store/actions/tabsAction.js';
import { connect } from 'react-redux';

class HomeTabs extends Component {

    render() {
        let applyClass = "";
        return (
            <div className="rootOfTabs">
                <div className="allTabs">{

                    this.props.children.map((child, index) => {
                        if (this.props.tab == child.props.label) {
                            applyClass = "selectedTab";
                        }
                        else
                            applyClass = "";
                        return <Tab onChangeTab={(label) => this.props.makeChangeTab(label)}
                            label={child.props.label} key={index} applyClass={applyClass} />
                    }
                    )
                }
                </div>

                <div className="tabContent">
                    {
                        this.props.children.map((child) => {
                            if (child.props.label !== this.props.tab)
                                return undefined;
                            return child.props.children;
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        makeChangeTab: (label) => dispatch(changeTab(label))
    }
}

const mapStateToProps = (state) => {
    return {
        tab: state.tabs.selectedTab
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeTabs);