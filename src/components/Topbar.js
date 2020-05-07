import React from 'react';
import { Typography, Button } from '@material-ui/core';

export function Topbar({ onLogout }) {
    return (
        <div className="topbar">
            <Typography variant='h6'>React Scaffolding</Typography>
            <Button onClick={onLogout} variant="outlined" >Sign out</Button>
        </div>
    )
}