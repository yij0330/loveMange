import React from 'react'
import { Layout } from 'antd'
import SiderComponent from '@/components/Sider'
import styles from './index.module.less'

const { Header, Footer, Sider, Content } = Layout;

export default function LayOut() {
    return (
        <Layout>
            <Sider>
                <SiderComponent></SiderComponent>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
            </Layout>
        </Layout>
    )
}
