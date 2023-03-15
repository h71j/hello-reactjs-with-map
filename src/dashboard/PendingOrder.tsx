import * as React from 'react';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslate, useReference } from 'react-admin';

import { Customer, Order } from '../types';

interface Props {
    order: Order;
}

export const PendingOrder = (props: Props) => {
    const { order } = props;
    const translate = useTranslate();
    const { referenceRecord: customer, isLoading } = useReference<Customer>({
        reference: 'commands',
        id: order.customer_id,
    });

    return (
        <ListItem button component={Link} to={`/commands/${order.id}`}>
            <ListItemAvatar>
                {isLoading ? (
                    <Avatar />
                ) : (
                    <Avatar
                        src={`${customer?.avatar}?size=32x32`}
                        sx={{
                            bgcolor: 'background.paper',
                        }}
                    />
                )}
            </ListItemAvatar>
            <ListItemText
                primary={new Date(order.created_at).toLocaleString('en-GB')}
                secondary={translate('pos.dashboard.order.items', {
                    smart_count: order.basket.length,
                    nb_items: order.basket.length,
                    customer_name: customer
                        ? `${customer.customer_id}`
                        : '',
                })}
            />
            <ListItemSecondaryAction>
                <Box
                    component="span"
                    sx={{
                        marginRight: '1em',
                        color: 'text.primary',
                    }}
                >
                    {order.total}$
                </Box>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
