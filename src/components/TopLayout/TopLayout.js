import Layout from '@enact/ui/Layout';
import {Cell} from '@enact/ui/Layout';
import Item from '@enact/ui/Item';
import kind from '@enact/core/kind';
import React from 'react';
import Image from '@enact/ui/Image';

import css from './TopLayout.less';
//require('typeface-montserrat');  




const TopLayout = kind({
	name: 'TopLayout',

	

	render: (props) => (
		<Layout align='center'  className={css.toplayout}>
 
 <Image className={css.full} src='logo.png' sizing="fit" />
 
   <Cell  >
   
  </Cell>
  <Cell >
    <Item  className={css.item}>09 de Septiembre del 2018</Item>
  </Cell>
  <Cell >
    <Item className={css.item}>04:40 PM</Item>
  </Cell>
   <Cell  >
    <Item className={css.temp}>16°C / 61°F</Item>
  </Cell>
</Layout>
	)
});

export default TopLayout;