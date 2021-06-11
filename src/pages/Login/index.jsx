import React, { useState, useEffect } from 'react'
// import BaseForm from '@/components/BaseForm'
import { accRules, pwdRules } from '@/utils/regs'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.module.less'

export default function Login(props) {
    const [form] = Form.useForm()
    const history = useHistory()

    const [loading, setLoading] = useState(false)
    console.log(form);  

    useEffect(() => {
        let userInfo = JSON.parse(localStorage.userInfo || '{}')
        if(Object.keys(userInfo).length) {
            let { username, password } = userInfo
            form.setFieldsValue({
                username,
                password
            })
        }
        
    }, [])

    const onFinish = (value) => {
        let { remember } = value
        setLoading(true)
        setTimeout(() => {
            if(remember) {
                localStorage.userInfo = JSON.stringify({...value})
            }else {
                localStorage.removeItem('userInfo')
            }
            setLoading(false)
            history.replace('/home')
        }, 2000)
        console.log(props);
        console.log(value, '===');
    }
    return (
        <div className="login wh100">
            <Form
                form={form}
                name="baseForm"
                className="baseForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[accRules]}
                >
                    <Input prefix={<UserOutlined />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[pwdRules]}
                >
                    <Input.Password 
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住账号</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
