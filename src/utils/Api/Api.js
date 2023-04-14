import axios from 'axios'

export default class Api {
  // Define a static method for logging in with an email and password
  static async login(email, password) {
    // Set the API endpoint URL
    const URL = 'http://localhost:3001'
    try {
      // Make a POST request to the login endpoint with the email and password
      const response = await axios.post(`${URL}/user/login`, {
        email,
        password,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  // Define a static method for getting the user profile
  static async getUserProfile() {
    try {
      // Make a GET request to the user profile endpoint
      const response = await axios.get('/profile')
      return response.data
    } catch (error) {
      throw error
    }
  }

  // Define a static method for updating the user profile
  static async putUserProfile(data) {
    try {
      // Make a PUT request to the user profile endpoint with the data to update
      const response = await axios.put('/profile', data)
      return response.data
    } catch (error) {
      throw error
    }
  }
}