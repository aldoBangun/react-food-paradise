import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const register = createAsyncThunk('users/register', async (user) => {
  await axios.post('/auth/register', user)
  return user
})

export const login = createAsyncThunk('users/login', async (user) => {
  await axios.post('/auth/login', user)
  return user
})

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get('/users')
  return response.data
})

export const getUser = createAsyncThunk('users/getUser', async (id) => {
  const response = await axios.get(`/users/${id}`)
  return response.data
})

export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
  await axios.patch(`/users/${user.id}`)
  return user
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await axios.delete(`/users/${id}`)
  return id
})