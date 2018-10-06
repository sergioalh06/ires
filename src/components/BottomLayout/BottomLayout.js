import Layout from '@enact/ui/Layout';
import {Cell} from '@enact/ui/Layout';
import Item from '@enact/ui/Item';
import kind from '@enact/core/kind';
import React from 'react';
import Image from '@enact/ui/Image';

import css from './BottomLayout.less';

const BottomLayout = kind({
	name: 'BottomLayout',

	

	render: (props) => (
		<Layout align='center'  className={css.bottomlayout}>
<Image className={css.full} src='1.png' sizing="fit" />
<Image className={css.full} src='2.png' sizing="fit" />
<Image className={css.full} src='3.png' sizing="fit" />
<Image className={css.full} src='4.png' sizing="fit" />
<Image className={css.full} src='5.png' sizing="fit" /> 


</Layout>
	)
});

export default BottomLayout;