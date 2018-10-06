import Button from '@enact/ui/Button';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';
import React from 'react';
import Changeable from '@enact/ui/Changeable';

import css from './MainPanel.less';
import TopLayout from '../components/TopLayout/TopLayout';
import BottomLayout from '../components/BottomLayout/BottomLayout';
import PropTypes from 'prop-types';


const kittens = [
	'Garfield',
	'Nermal',
	'Simba',
	'Nala',
	'Tiger',
	'Kitty'
];


const MainPanel = kind({
	name: 'MainPanel',

	styles: {
		css,
		className: 'mainpanel'
	},



	render: (props) => (
		<Panel {...props}>
		<TopLayout  />
		<BottomLayout  />
			
				
		</Panel>
	)
});

export default MainPanel;
