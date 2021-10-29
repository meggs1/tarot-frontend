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
        // console.log(resp)
        localStorage.setItem('token', data.jwt)
        dispatch({ type: "AUTHENTICATED", payload: data })
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
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response
        .json()
        .then(user => dispatch({ type: "AUTHENTICATED", payload: user }))
      } else {
        console.log(response)
        return Promise.reject(dispatch({type: 'NOT_AUTHENTICATED'}))
      }
    })
    .catch((error) => console.log("api errors:", error))
  }
}

