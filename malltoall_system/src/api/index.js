import axios from "axios";

const API = axios.create({ baseURL: 'https://applabb.account-collection.com/api/' });
const MallAPI = axios.create({ baseURL: 'https://applabb.account-collection.com/malltoallmanager/api/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
});



export const fetchChatUsers = async () => {
    const res = await MallAPI.get(`/store-view-chat`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    return res;
}

export const fetchChatMessages = async (chatId) => {
    const res = await MallAPI.get(`/store-view-chat/${chatId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    return res;
}










 // user Authentication functions
 export const signup = async (user) => {
    const res = await MallAPI.post('/register/tokens', user);
    
    return res;
}

export const login = async (user) => {
    // const res = await MallAPI.post('/auth/tokens', {
    //     headers: {
    //         'X-CSRF-Token': document.querySelector("meta[name=csrf-token]")?.content
    //     },
    //     user,
    // });
    const res = await MallAPI.post('/auth/tokens', user);

    return res;
}

// system functions
export const getLatestProducts = async () => {
    const res = await API.get('/products');
    return res;
}
export const getShopPageProducts = async (text) => {
    const res = await API.get(`${text}`);
    return res;
}

export const getHomePageSlider = async () => {
    const res = await API.get('/slider-home');
    return res;
}

export const getCategories = async () => {
    const res = await API.get('/categories');
    return res;
}
export const getProductsByCategories = async (category) => {
    const res = await API.get(`/general/getCategoryProducts/${category}`);
    return res;
}
export const fetchProductDetails = async (slug) => {
    console.log('dddddddddddddddddddd')
    const res = await API.get(`/product-details/${slug}`);
    console.log('dddddddddddddddddddd')
    return res;
}

export const createTransaction = async (orderData) => {
    const res = await API.post(`/general/createTransaction`, orderData);
    return res;
}

export const fetchWishlistItems = async () => {
    const res = await API.get(`/wishlist-item`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    console.log('res', res);
    return res;
}
export const addToWishlist = async (id, enqueueSnackbar) => {
    await API.post(`/add-wishlist`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        product_id: id,
    }).then((res) => {
        enqueueSnackbar('Added to wishlist Succesfully', {variant: 'success',});
        return res;

    }).catch((err) => {
        enqueueSnackbar(`${err?.data?.message}`, {variant: 'error',});
    })
    // console.log('res', res);
}
export const deleteFromWishlist = async (id, enqueueSnackbar) => {
    await API.delete(`/delWishlist-item/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    }).then((res) => {
        enqueueSnackbar('Product deleted from wishlist Succesfully', {variant: 'success',});
        return res;

    }).catch((err) => {
        enqueueSnackbar(`${err?.data?.message}`, {variant: 'error',});
    })
    
}


export const logoutUser = async () => {
    const res = await API.delete(`/auth/tokens/${localStorage.getItem('tokenNumber')}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    console.log('res', res);
    return res;
}



export const sendNewMessages = async (message) => {
    const res = await MallAPI.post(`/messages`, {
        "user_id": message?.chatId,
        "message": message?.newMessage,
    },
    {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    return res;
}