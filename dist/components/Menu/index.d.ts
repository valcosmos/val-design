import { MenuProps } from './menu';
import { SubMenuProps } from './subMenu';
import { MenuItemProps } from './menuItem';
import { FC } from 'react';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
