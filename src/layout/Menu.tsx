import { useState } from 'react';
import Box from '@mui/material/Box';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import SubMenu from './SubMenu';

import Account from '../pages/merchant/Account';
import MerchantApps from '../pages/merchant/MerchantApps';
import MerchantVersion from '../pages/merchant/MerchantVersion';





type MenuName = 'menuMerchant' | 'menuOther';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuMerchant: false,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        // @ts-ignore
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            {/* 主页 */}
            <DashboardMenuItem />

            <SubMenu
                handleToggle={() => handleToggle('menuMerchant')}
                isOpen={state.menuMerchant}
                name="pos.menu.merchant"
                icon={<Account.icon />}
                dense={dense}
            >
                <MenuItemLink
                        to="merchant/account"
                        state={{ _scrollToTop: true }}
                        primaryText={translate(`pos.submenu.merchant.account`, {
                            smart_count: 2,
                        })}
                        leftIcon={<Account.icon />}
                        dense={dense}
                />
                <MenuItemLink
                        to="merchant/apps"
                        state={{ _scrollToTop: true }}
                        primaryText={translate(`pos.submenu.merchant.apps`, {
                            smart_count: 2,
                        })}
                        leftIcon={<MerchantApps.icon />}
                        dense={dense}
                />

                <MenuItemLink
                        to="merchant/version"
                        state={{ _scrollToTop: true }}
                        primaryText={translate(`pos.submenu.merchant.version`, {
                            smart_count: 2,
                        })}
                        leftIcon={<MerchantVersion.icon />}
                        dense={dense}
                />
            </SubMenu>
        </Box>
    );
};

export default Menu;
