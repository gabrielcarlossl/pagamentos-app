import '../common/template/dependencies'
import React from "react";

import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/messages'

export default function App (props) {
       return ( // classe do admin LTE Wrapper significa uma div que envolve todo o site
        <div className='wrapper'>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className='content-wrapper'>
                <Routes></Routes>
            </div>
            <Footer></Footer>
            <Messages></Messages>

        </div>)
    }