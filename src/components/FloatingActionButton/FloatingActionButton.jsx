import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import './FloatingActionButton.css'

export default function FloatingActionButtons() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }} className = 'fab-container'>
            <Fab variant="extended" className = 'fab'>
                Buy Ticket
            </Fab>
        </Box>
    );
}