import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './erro.css';

class Erro extends Component{
    render(){
        return(
            <div className="erro">
                <h1>Página não encontrada</h1>
                <h2>ir para <Link to='/'>Home</Link></h2>
            </div>
        );
    }
}

export default Erro;