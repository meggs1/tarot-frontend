export const signUp = (user) => {
  return (dispatch) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: user.name,
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp =>
      resp.json()
      .then(data => ({ data, resp })))
      .then(({ data, resp }) =>  {
      if (resp.ok) {
        // console.log(resp)
        localStorage.setItem('token', data.jwt)
        dispatch({ type: "AUTHENTICATED", payload: data })
        // console.log(localStorage)
      } else {
        dispatch({ type: "NOT_AUTHENTICATED" })
        return Promise.reject(resp)
      }
    }).catch(err => console.log("Error: ", err))
  }
}

export const login = (user) => {
  return (dispatch) => {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      user:{
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp =>
      resp.json()
      .then(data => ({ data, resp })))
      .then(({ data, resp }) =>  {
      if (resp.ok) {
        localStorage.setItem('token', data.jwt)
        dispatch({ type: "AUTHENTICATED", payload: data.user })
        console.log('login successful')
      } else {
        dispatch({ type: "NOT_AUTHENTICATED" })
        return Promise.reject(resp)
      }
    }).catch(err => console.log("Error: ", err))
  }
}

export const checkAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token")
    fetch("http://localhost:3000/check_auth", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    })
    .then((resp) => {
      if (resp.ok) {
        // console.log('check auth', resp)
        return resp
        .json()
        .then(user => dispatch({ type: "AUTHENTICATED", payload: user }))
      } else {
        console.log(resp)
        return Promise.reject(dispatch({type: 'NOT_AUTHENTICATED'}))
      }
    })
    .catch((error) => console.log("api errors:", error))
  }
}

export const logout = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token")
    return fetch("http://localhost:3000/logout", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((resp) => {
      if (resp.ok) {
        console.log('logout successful')
        localStorage.removeItem('token')
        localStorage.removeItem('userCards')
        dispatch({ type: 'NOT_AUTHENTICATED' })
      } else {
        return Promise.reject(dispatch({type: 'NOT_AUTHENTICATED'}))
      }
    })
  }
}


