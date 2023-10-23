import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosPost } from "../helper/AxiosInstance.ts";


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (data) => {
        const request = await axiosPost("http://localhost:8080/api/v1/auth/login", data);
        const response = await request.data.data;
      
       
        localStorage.setItem('token', response.accessToken);
        return response;
    }
);

//  Kendime not:
//  A slice represents a portion of your application's state, 
//  typically corresponding to a specific feature or section of your application

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                //üstteki fonksiyonda response ne döndüysek payload onu dönecek
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = "Access Denied! Invalid Credentials";
                }
                else {
                    state.error = action.error.message;
                }

            })
    }

});


// Sadece reducer kısmını exportlama sebebi daha sonra diğer exportlarla beraber
// combineReducers kullanım şekliyle tek bir rootReducer'ın store'da kullanılabilmesi.
export default userSlice.reducer;