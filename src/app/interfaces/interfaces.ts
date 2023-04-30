export interface User {
  email: string
  password: string
  personal_data_access: boolean
}

export interface Token {
  msg: string,
  data: {
    access_token: string,
    token_type: string,
    expires_at: number
  }
}
