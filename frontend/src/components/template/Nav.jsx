import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refatorar em casa!*/}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Cadastro
            </Link>
            <Link to="/list">
                <i className="fa fa-list"></i> Lista
            </Link>
        </nav>
    </aside>