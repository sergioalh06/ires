import Layout from '@enact/ui/Layout';
import kind from '@enact/core/kind';
import React from 'react';
import Image from '@enact/ui/Image';
import Spotlight from '@enact/spotlight';
import Spottable from '@enact/spotlight/Spottable';
import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';

import css from './BottomLayout.less';

const SpottableComponent1 = Spottable(kind({
	name: 'SpottableComponent1',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src='1.png' sizing="fit" />
		);
	}
}));
const SpottableComponent2 = Spottable(kind({
	name: 'SpottableComponent2',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src='2.png' sizing="fit" />
		);
	}
}));
const SpottableComponent3 = Spottable({tabindex: 0},kind({
	name: 'SpottableComponent3',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src='3.png' sizing="fit" />
		);
	}
}));
const SpottableComponent4 = Spottable(kind({
	name: 'SpottableComponen4',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src='4.png' sizing="fit" />
		);
	}
}));
const SpottableComponent5 = Spottable(kind({
	name: 'SpottableComponen5',
	render: (props) => {
		return (
			<Image {...props} className={css.full} src='5.png' sizing="fit" />
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