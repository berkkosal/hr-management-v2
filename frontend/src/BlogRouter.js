import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme/GlobalTheme'
import HomePageContainer from './pages/HomePage/HomePageContainer'
import Header from './common/components/Header';
import RegisterPageContainer from './pages/RegisterPage/RegisterPageContainer';
import LoginPageContainer from './pages/LoginPage/LoginPageContainer';

class BlogRouter extends Component {


    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePageContainer />} />
                    <Route path='/login' element={<LoginPageContainer/>} />
                    <Route path='/register' element={<RegisterPageContainer />} />
                    
                </Routes>
            </ThemeProvider>
        )
    }
}


export default BlogRouter;