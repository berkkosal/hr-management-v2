import React, { Component } from 'react'
import { Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme/GlobalTheme'
class BlogRouter extends Component {


    render() {
        return (
            <ThemeProvider theme={theme}>
                <Routes>

                </Routes>
            </ThemeProvider>
        )
    }
}


export default BlogRouter;