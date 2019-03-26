import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import HomePage from "./components/DisplayComponents/HomePage"


ReactDOM.render(
    <Router>
        <HomePage />
    </Router>
    , document.getElementById('root'))
