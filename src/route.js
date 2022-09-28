import {
    createWebHistory,
    createRouter,
} from 'vue-router';
import { kebabCase } from 'lodash';

const pages = import.meta.glob('./pages/*.vue')

export const routes = Object.keys(pages).map(path => {
    const np = path.match(/\.\/pages(.*)\.vue$/)[1].split('/').map(i => kebabCase(i)).join('/');
    return {
        // 调试 vite 的服务器遇到 .html 会无差别认为是资源文件，导致 404 而没有进入 vue-router 匹配。
        // 所以调试模式下 通过 a 或者直接输入 url 那么 alias 带 .html 后缀的路由无效，route-link （js 改 history） 或 build 后就起效了。
        path: np === '/home' ? '/' : np === '/not-found' ? '/:path(.*)*' : np,
        alias: `${np}.html`,
        component: pages[path],
    }
});

export function newRouter() {
    console.log(routes);
    return createRouter({
        history: createWebHistory(),
        routes: routes,
    });
}