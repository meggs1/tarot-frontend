export const signUp = (user) => {
  return (dispatch) => {
    fetch('https://tarot-card-reader-api.herokuapp.com/users', {
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
        localStorage.setItem('token', data.jwt)
        dispatch({ type: "AUTHENTICATED", payload: data })
      } else {
        dispatch({ type: "NOT_AUTHENTICATED" })
        return Promise.reject(resp)
      }
    }).catch(err => console.log(err))
  }
}

export const login = (user) => {
  return (dispatch) => {
    fetch('https://tarot-card-reader-api.herokuapp.com/login', {
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
    }).catch(err => console.log(err))
  }
}

export const checkAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token")
    fetch("https://tarot-card-reader-api.herokuapp.com/check_auth", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    })
    .then((resp) => {
      if (resp.ok) {
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
    return fetch("https://tarot-card-reader-api.herokuapp.com/logout", {
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
