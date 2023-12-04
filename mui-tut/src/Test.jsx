import React from 'react';
import { Typography } from '@mui/material';

function Test() {
    return (
        <div>
            <Typography variant='h5'
                sx={{ color: "red", border: "1px solid black", borderRadius: 10 }}
            >
                Hello World
            </Typography>
        </div>
    )
}

export default Test;