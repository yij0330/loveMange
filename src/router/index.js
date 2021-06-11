import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Index from '../pages/Home/subPage/Index'
import OrderMange from '../pages/Home/subPage/OrderMange'
import StoreMange from '../pages/Home/subPage/StoreMange'
import StoreAdd from '../pages/Home/subPage/StoreMange/StoreAdd'
import StoreCatagory from '../pages/Home/subPage/StoreMange/StoreCatagory'
import StoreList from '../pages/Home/subPage/StoreMange/StoreList'

const routerList = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/index',
                component: Index
            },
            {
                path: '/home/orderManage',
                component: OrderMange
            },
            {
                path: '/home/storeManage',
                component: StoreMange,
                children: [
                    {
                        path: '/home/storeManage/storeAdd',
                        component: StoreAdd
                    },
                    {
                        path: '/home/storeManage/storeCatagory',
                        component: StoreCatagory
                    },
                    {
                        path: '/home/storeManage/storeList',
                        component: StoreList
                    },
                    {
                        from: '/home/storeManage',
                        redirect: '/home/storeManage/storeList',
                        id: 2
                    }
                ]
            },
            {
                from: '/home',
                redirect: '/home/index',
                id: 3
            }
        ]
    },
    {
        from: '/*',
        redirect: '/home',
        id: 1
    }
]

const RouterComponent = (props) => {
    const renderRoute = (router) => {
        let rdArr = router.filter(item => item.redirect).map(item => <Redirect to={item.redirect} from={item.from} key={item.id}/>)
        let routerFilter = router.filter(item => !item.redirect)
        return (
            <Switch>
                { routerFilter.map(route => {
                    let { path, component } = route
                    if(route.children && route.children.length) {
                        return <Route key={path} path={path} render={() => {
                            let FatherComponet = component
                            return (
                                <FatherComponet {...props}>
                                    {renderRoute(route.children)}
                                </FatherComponet>
                            )
                        }}></Route>
                    }else {
                        return <Route path={path} component={component} key={path}></Route>
                    }
                }).concat(rdArr) }
            </Switch>
        )
    }
    console.log(renderRoute(routerList));
    return (
        <Router>
            {renderRoute(routerList)}
        </Router>
    )
}

export default RouterComponent