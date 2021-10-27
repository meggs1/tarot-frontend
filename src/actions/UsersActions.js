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
        console.log(resp)
        localStorage.setItem('token', data.jwt)
        dispatch({ type: "AUTHENTICATED", payload: data })
        console.log(localStorage)

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
          console.log(resp)
          localStorage.setItem('token', data.jwt)
          dispatch({ type: "AUTHENTICATED", payload: data })
          console.log(localStorage)

        } else {
          dispatch({ type: "NOT_AUTHENTICATED" })
          return Promise.reject(resp)
        }
      }).catch(err => console.log("Error: ", err))
  }
}

// export const fetchUserPage = () => {
//     const token = localStorage.getItem("jwt")
//     const userId = this.state.user.id
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     })
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//   }
