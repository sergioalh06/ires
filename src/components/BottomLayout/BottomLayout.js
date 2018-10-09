import Layout from '@enact/ui/Layout';
import kind from '@enact/core/kind';
import React from 'react';
import Image from '@enact/ui/Image';
import Spotlight from '@enact/spotlight';
import Spottable from '@enact/spotlight/Spottable';
import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';

import css from './BottomLayout.less';

import uno from '../../../1.png';
import dos from '../../../2.png';
import tres from '../../../3.png';
import cuatro from '../../../4.png';
import cinco from '../../../5.png';

const SpottableComponent1 = Spottable(kind({
	name: 'SpottableComponent1',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src={uno} sizing="fit" />
		);
	}
}));
const SpottableComponent2 = Spottable(kind({
	name: 'SpottableComponent2',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src={dos} sizing="fit" />
		);
	}
}));
const SpottableComponent3 = Spottable({tabindex: 0},kind({
	name: 'SpottableComponent3',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src={tres} sizing="fit" />
		);
	}
}));
const SpottableComponent4 = Spottable(kind({
	name: 'SpottableComponen4',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src={cuatro} sizing="fit" />
		);
	}
}));
const SpottableComponent5 = Spottable(kind({
	name: 'SpottableComponen5',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src={cinco} sizing="fit" />
		);
	}
}));

const BottomLayout = kind({
	name: 'BottomLayout',

	

	render: (props) => (
		<Layout align='center'  className={css.bottomlayout}>
<SpottableComponent1 {...props} />
<SpottableComponent2 {...props} />
<SpottableComponent3 {...props} />
<SpottableComponent4 {...props} />
<SpottableComponent5 {...props} />




</Layout>
	)
});

export default SpotlightRootDecorator(BottomLayout);