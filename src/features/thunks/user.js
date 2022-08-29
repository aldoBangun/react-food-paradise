import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const register = createAsyncThunk('users/register', async (user, { rejectWithValue }) => {
  try {
    await axios.post('/auth/register', user)
    const response = await axios.post('/auth/login', user)
    return response?.data?.token
  } catch (err) {
    if (err?.response?.status === 400) return rejectWithValue('Email already registered!')
    return rejectWithValue(err?.response?.data?.message)
  }
})

export const login = createAsyncThunk('users/login', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/login', user)
    return response?.data?.token
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message)
  }
})

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get('/users')
  return response.data
})

export const getUser = createAsyncThunk('users/getUser', async (id) => {
  const response = await axios.get(`/users/${id}`)
  return response?.data?.data
})

export const getUserRecipes = createAsyncThunk('users/getUserRecipes', async (id) => {
  const response = await axios.get(`/users/${id}/recipes`)
  return response?.data?.data
})

export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
  await axios.patch(`/users/${user.id}`)
  return user
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await axios.delete(`/users/${id}`)
  return id
})