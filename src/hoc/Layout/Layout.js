import React, { Component, Fragment } from 'react';
import Header from '../../components/header_footer/Header';
import Footer from '../../components/header_footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default Layout;