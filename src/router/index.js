import App from '../app';
import Home from '../page/home';
import Music from '../page/music';
import About from '../page/about';

// 写法一：
/* export default (<Route path="/" component={ App }>
    <Route path="" component={ Home } />
    <Route path="/home" component={ Home } />
    <Route path="/music" component={ Music } />
    <Route path="/about" component={ About } />
    <IndexRoute component={ Home } />
</Route>);
 */
export const routes = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Home },
        childRoutes: [
            { path: '', component: Home },
            { path: '/home', component: Home },
            { path: '/music', component: Music },
            {
                path: '/about',
                component: About,
                onEnter: () => {
                    // 表示下一行不进行Eslint检查
                    // eslint-disable-next-line
                    console.log('我进入About页面了。');
                },
                onLeave: () => {
                    console.log('我离开About页面了。');
                }
            }
        ]
    }
];