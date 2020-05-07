import React from 'react';
import { Typography  } from '@material-ui/core';

export function MessagePaper({message}) {
    return (
        <div className={'message-container'+ (message && message.success ? ' message-success' : ' message-fail')}>
            <Typography variant='body1'>{message? message.message : ''}</Typography>
        </div>
        )
}