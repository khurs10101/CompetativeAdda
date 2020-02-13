import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Dashboard from '../components/Dashboard'
import Practice from '../components/Practice'
import Login from '../components/Login'
import Layout from '../components/Layout'


const AppRoute =()=>(
        <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/practice" component={Practice} />
                    <Route path="/login" component={Login} />
                </Switch>
        </BrowserRouter>
)

export default AppRoute