import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomePage from './HomePage';
import PersonalSettings from './PersonalSettings';

class App extends Component {

	render() {
		return (
			<Router>
				<Scene key="HomePage">
					<Scene key="Home" component={HomePage} hideNavBar={true} initial={true} />
				</Scene>

				<Scene key="PersonalSettings">
					<Scene key="Settings" component={PersonalSettings} hideNavBar={true} initial={true} />
				</Scene>
			</Router>
		);
	}

}

export default App;
