import axios from "axios"
import {API_CONFIG} from "../config/index"
import { apiClient } from "./apiClient"
export async function sendDataToSignUp(values) {
  try {
    const options = {
      method: "POST",
      url: `/auth/signup`,
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        rePassword: values.rePassword,
      }
    }
    const response = await apiClient.request(options)
    console.log(response);
    return response;

  }
  catch (error) {
    throw error
  }
}

export async function sendDataToLogin(values) {
  try {
    const options = {
      method: "POST",
      url: `/auth/signin`,
      data: {
        email: values.email,
        password: values.password,
      }
    }
    const response = await apiClient.request(options)
    return response
  } catch (error) {
    throw error
  }
}