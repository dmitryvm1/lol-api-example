import React from "react";
import Matches from "./pages/Matches/Matches";
import Masters from "./pages/Masters/Masters";
import {Routes, Route} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/app/" >
            <Route path="matches/*" element={<Matches />} />
            <Route path="masters/*" element={<Masters />} />
          </Route>
        </Routes>
      </div>
      
    )
  }
}