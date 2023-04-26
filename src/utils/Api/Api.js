import axios from 'axios'

const urlAPI = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
})

/**
 * Class representing an API.
 * @class
 */
class Api {
  /**
   * Handle API errors.
   * @param {Error} error - The error object.
   */
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

  /**
   * Method for token login.
   * @async
   * @param {Object} info - The user information.
   * @param {string} info.email - The user email.
   * @param {string} info.password - The user password.
   * @returns {string} The user token.
   */
  tokenLogin = async (info) => {
    try {
      const res = await urlAPI.post('/user/login', info)
      return res.data.body.token
    } catch (error) {
      this.handleError(error)
    }
  }

  /**
   * Method for getting user information.
   * @async
   * @param {string} token - The user token.
   * @returns {Object} The user information.
   */
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

  /**
   * Method for setting user information.
   * @async
   * @param {string} token - The user token.
   * @param {Object} user - The user information.
   * @param {string} user.firstName - The user first name.
   * @param {string} user.lastName - The user last name.
   * @returns {Object} The updated user information.
   */
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
