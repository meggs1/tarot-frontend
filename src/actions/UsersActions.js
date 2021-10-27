const setToken = (token) => {
  localStorage.setItem("token", token)
}

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
    .then(result => {
      if (result.ok) {
        console.log(result)
        setToken(result.headers.get("Authorization"))
        // this.setState({
        //   user: result.user
        // })
        return result
        .json()
        .then((user) =>
            dispatch({ type: "AUTHENTICATED", payload: user })
        );
      } else {
        console.log(result)
        return result.json().then((errors) => {
          dispatch({ type: "NOT_AUTHENTICATED" })
          return Promise.reject(errors)
        })
      }
    })

  }
}

// export const login = (user) => {
//     fetch('http://localhost:3000/login', {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//         user:{
//             username: user.username,
//             password: user.password
//         }
//         })
//     })
//     .then(resp => resp.json())
//     .then(result => {
//         if (result.jwt) {
//         localStorage.setItem("jwt", result.jwt)
//         this.setState({
//             user: result.user
//         })
//         } else {
//         console.log(result)
//         }
//     })
// }

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
