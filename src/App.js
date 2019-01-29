import React, { Component } from "react"
import './app.css'
import { BrowserRouter, Route } from 'react-router-dom'

// ===============================路由==============================
import Home from "./components/home/home.js"
import Demo from "./components/demo/demo.jsx"


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter component={Home}>
          <Route path="Demo" component={Demo}> </Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App