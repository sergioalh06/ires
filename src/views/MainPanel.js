import Button from '@enact/ui/Button';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';
import React from 'react';

import css from './MainPanel.less';
import TopLayout from '../components/TopLayout/TopLayout';
import BottomLayout from '../components/BottomLayout/BottomLayout';


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
