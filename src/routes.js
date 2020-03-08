import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Erro from './Pages/Erro';
import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Header from './components/Header'

const Routes = () =>{
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/filme/:id' component={Filme}/>
                <Route path='*' component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;