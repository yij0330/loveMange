import React, { useEffect } from 'react'

export default function Index() {

    useEffect(() => {
        console.log('进来了');
    }, [])
    return (
        <div>
            首页
        </div>
    )
}
