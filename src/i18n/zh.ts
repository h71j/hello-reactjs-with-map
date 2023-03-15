import { TranslationMessages } from 'react-admin';

import chineseMessages from "./chinese";

const customChineseMessages: TranslationMessages = {
    ...chineseMessages,
    pos: {
        search: '搜索',
        configuration: '配置',
        language: '语言',
        theme: {
            name: '主题色',
            light: '亮',
            dark: '暗',
        },
        auth: {
            phone: "手机号",
            user_id: "用户账号",

        },
        dashboard: {
            monthly_revenue: '月收入',
            month_history: '30 天收入历史',
            new_orders: '新订单',
            pending_reviews: '待查看评论',
            all_reviews: '查看所有评论',
            new_customers: '新客户',
            all_customers: '查看所有客户',
            pending_orders: '待支付订单',
            order: {
                items:
                    'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: '欢迎使用商户管理台',
                subtitle:
                    "您好，这里r2day 控制中心",
                ra_button: '管理台',
                demo_button: '这个的源码',
            },
        },
        // 主目录
        menu: {
            merchant: '商户中心',
            settings: '系统设置',
        },
        // 子目录
        submenu: {
            merchant: {
                account: '商户账户',
                apps: '商户应用',
                accountManage: '账号管理',
                accountGroup: '账号分组',
                enterpriseInfo: '企业信息',
                version: '商户版本',
            }
        }
    },
    resources: {

        // 通用的标题定义
        header: {
            fields: {
                title: {
                    input: '输入',
                    select: '选择',
                    switch: '开关',
                    array: '组',
                    system: '系统生成',
                    status: '状态',
                    id: '编号',
                    merchant_id: '商户号',
                },
                row: {
                    brand: '品牌'
                }
            },
        },
        pages: {
            account: {
                fields: {
                    name: '商户名称',
                    phone: '手机号',
                    password: '密码',
                    version: '版本',
                    apps: '开通应用',
                    maxStoreNumber: '最大允许开设店面数量'

                }
            },
            apps: {
                fields: {
                    name: '应用名称',
                    price: '价格',
                    key: '标识',
                    desc: '描述',

                }
            },
            version: {
                fields: {
                    name: '版本名称',
                    price: '价格',
                    sub_title: '小标题',
                    desc: '版本描述',
                    badge: '徽章',
                    combo: '包含套餐'
                }
            }
        }
    }
};

export default customChineseMessages;
