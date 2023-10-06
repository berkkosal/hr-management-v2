import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

class BlogRouter extends Component {



    render() {

        return (
            <>


                <div className="container">
                    <Routes>
                        <Route path='/login' element={<LoginPage/>} />
                    </Routes>
                </div>


            </>
        )
    }
}


export default BlogRouter;