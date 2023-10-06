import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme/GlobalTheme'
class BlogRouter extends Component {


    render() {
        return (
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </ThemeProvider>
        )
    }
}


export default BlogRouter;