const accountService={
    isAuthenticated:false,
    loggin:function(data){
        let {token,refreshToken} = data
        localStorage.setItem("token",token)
        localStorage.setItem("refresh",refreshToken)
        alert("tokenSaved")
    },
    Logout:function(){
        localStorage.removeItem("token")
        localStorage.removeItem("refresh")
    },
    getToken:function(){
       return localStorage.getItem("token")
    },
    getRefreshToken:function(){
       return localStorage.getItem("refresh")
    }
}

export {accountService}