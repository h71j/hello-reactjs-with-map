import * as React from 'react';
import { Admin, CustomRoutes, Resource, fetchUtils, UpdateParams, CreateParams, GetOneParams } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Route } from 'react-router';

import authProvider from './authProvider';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';

import chineseMessages from './i18n/zh';
import { darkTheme } from './layout/themes';


// @ts-ignore
import jsonServerProvider from 'ra-data-json-server';

import Configuration from './configuration/Configuration';
import simpleRestProvider from "ra-data-simple-rest";

// 导入用户pages
import Account from './pages/merchant/Account';
import Apps from './pages/merchant/MerchantApps';
import MerchantApps from './pages/merchant/MerchantApps';
import MerchantVersion from './pages/merchant/MerchantVersion';

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }else if (locale === 'en') {
        console.log("choose en")
        return import('./i18n/en').then(messages => messages.default);
}

    // Always fallback on english
    return chineseMessages;
}, 'zh');

const httpClient = (url: any, options = {}) => {
    return fetchUtils.fetchJson(url, options);
};

const baseDataProvider = simpleRestProvider('/v1/super', httpClient);
const dataProvider = {
    ...baseDataProvider,
    update: async (resource: string, params: UpdateParams<any>) => {

        console.log("inside update function", params.data.pictures)

        // 如果资源不是以下几种情况则走正常逻辑
        if ((resource !== 'menuCategories' && resource !== 'menuItems') ||
            !params.data.pictures ) {
            console.log("the update resource is-->", resource)
            return baseDataProvider.update(resource, params);
        }

        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        console.log("theparams.data.pictures-->", params.data.pictures);

        // 如果是多图片，这里需要map循环处理
        const myFile = params.data.pictures;
        if (!(myFile.rawFile instanceof File)) {
            return Promise.reject('Error: Not a file, is a '); // Didn't test this...
        }
      const picture64 = await Promise.resolve(convertFileToBase64(myFile));
      const transformedMyFile = ({
            src: picture64,
            title: `${myFile.title}`
      });

        // 最终新增字段并且添加到原有字段中
      return await baseDataProvider.update(resource, {
            ...params,
            data: {
                ...params.data,
                myFile: transformedMyFile
            }
        });
    },

};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file: { rawFile: Blob }) =>
 new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = reject;

     reader.readAsDataURL(file.rawFile);
 });
 
const App = () => {
    return (
        <Admin
            title="R2day"
            dataProvider={dataProvider}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
            theme={darkTheme}
        >
            <CustomRoutes>
                <Route path="/configuration" element={<Configuration />} />
            </CustomRoutes>

            {/* 用户账号 */}
            <Resource name="merchant/account" {...Account} />
            {/* 应用列表 */}
            <Resource name="merchant/apps" {...MerchantApps} />
            {/* 应用版本 */}
            <Resource name="merchant/version" {...MerchantVersion} />
        </Admin>
    );
};

export default App;
