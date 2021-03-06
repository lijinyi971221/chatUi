import React from 'react';
import Avatar from '.';

export default {
    title: 'UI 组件/Avatar',
    component: Avatar
}

export const Default = () => {
    return <Avatar />;
}

export const Sizes = () => {
    return (
        <div className="row-elements">
            <Avatar size="48px" />
            <Avatar size="50px" />
            <Avatar size="52px" />
            <Avatar size="54px" />
        </div>
    )
}

export const Status = () => {
    return (
        <div className="row-elements">
            <Avatar status='online' />
            <Avatar status='offline' />
        </div>
    )
}