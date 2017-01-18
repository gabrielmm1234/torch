import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomePage from './HomePage';
import PersonalSettings from './PersonalSettings';
import ProfileSettings from './ProfileSettings';

class App extends Component {

	render() {
		return (
			<Router>
				<Scene key="HomePage">
					<Scene key="Home" component={HomePage} hideNavBar={true} initial={true} />
				</Scene>

				<Scene key="PersonalSettings">
					<Scene key="Settings" component={PersonalSettings} hideNavBar={true} initial={true} />
					<Scene key="ProfileSettings" component={ProfileSettings} hideNavBar={true} />
				</Scene>
			</Router>
		);
	}

}

export default App;
