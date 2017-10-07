import React, { Component } from 'react'
import { render } from "react-dom";

class App extends Component {
	render () {
		return (
			<div>
				<h2>React Table</h2>
			</div>
		)
	}
}

render(<App />, document.querySelector("#app"));
