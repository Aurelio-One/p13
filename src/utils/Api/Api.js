import axios from 'axios'

const urlAPI = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
})

class Api {
  handleError(error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.log('Mauvaise demande')
          break
        case 500:
          console.log('Erreur interne du serveur')
          break
        default:
          console.log("Une erreur s'est produite :", error.response.status)
      }
    } else {
      console.log("Une erreur s'est produite :", error)
    }
  }

  tokenLogin = async (info) => {
    try {
      const res = await urlAPI.post('/user/login', info)
      return res.data.body.token
    } catch (error) {
      this.handleError(error)
    }
  }

  getUserInfo = async (token) => {
    try {
      const res = await urlAPI.post(
        '/user/profile',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      return res.data.body
    } catch (error) {
      this.handleError(error)
    }
  }

  setUserInfo = async (token, user) => {
    try {
      const res = await urlAPI.put('/user/profile', user, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      return res.data.body
    } catch (error) {
      this.handleError(error)
    }
  }
}

export default new Api()
