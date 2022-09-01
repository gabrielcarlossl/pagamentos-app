import '../common/template/dependencies'
import React from "react";

import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer'

export default function App (props) {
       return ( // classe do admin LTE Wrapper significa uma div que envolve todo o site
        <div className='wrapper'>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className='content-wrapper'>
                <h1>Conteudo</h1>
            </div>
            <Footer></Footer>

        </div>)
    }