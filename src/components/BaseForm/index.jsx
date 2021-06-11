import React from 'react'
import { Form, Input, Button, Checkbox, Space } from 'antd';
import './index.module.less'

export default function BaseForm({
    // layout = {
    //     labelCol: {
    //         span: 8,
    //     },
    //     wrapperCol: {
    //         span: 16,
    //     },
    // },
    onFinish,
    formList = [],
    reset
}) {
    const [form] = Form.useForm()

    const renderForm = (formList) => {
        console.log(formList);
        return formList.map(formItem => {
            console.log(formItem);
            let { label, name, rules } = formItem
            return (
                <Form.Item
                    label={label}
                    name={name}
                    rules={rules}
                    key={name}
                >
                    {getFormType(formItem)}
                </Form.Item>
            )
        })
    }

    const getFormType = (formItem) => {
        let { type } = formItem
        console.log(type, '**');
        switch (type) {
            case 'input':
                return (
                    <Input />
                )
            case 'password':
                return (
                    <Input.Password />
                )
            case "checkbox":
                return (
                    <Checkbox>记住账号</Checkbox>
                )
        }
    }

    const onReset = () => {
        form.resetFields();
    }
    
    return (
        <Form
            // {...layout}
            name="basic"
            onFinish={onFinish}
            className="baseForm"
        >
            {renderForm(formList)}
            <Form.Item className="btn_warpper">
                <Space>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                    {reset && <Button htmlType="button" onClick={onReset}>
                        重置
                    </Button>}
                </Space>
            </Form.Item>
        </Form>
    )
}
