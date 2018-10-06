import kind from '@enact/core/kind';
import Panels from '@enact/moonstone/Panels';
import React from 'react';
import MainPanel from '../views/MainPanel';
import css from './App.less';

import './attachErrorHandler';


const App = kind({
	name: 'App',
styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<Panels noCloseButton='true' {...props}>
			<MainPanel  />
		</Panels>
	)
});

export default App;
