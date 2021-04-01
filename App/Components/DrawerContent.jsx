import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Avatar from './Avatar';

const DrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <Avatar drawerMode />
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

export default DrawerContent;
