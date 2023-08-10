import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  userName:"",
  email:"",
  loading:false,
  error:"",
  firstName:"",
  lastName:"",
  id:""
}



  const editSlice = createSlice ({
    name: 'Edition',
    initialState,
    reducers: {
        setField (state, action) { //Les actions du reducer
            state[action.payload.fieldName] = action.payload.fieldValue
            },
        setState (state, action) { //Les actions du reducer
              state.userName = action.payload.userName
              state.firstName = action.payload.firstName
              state.lastName = action.payload.lastName
              state.email = action.payload.email
              state.id = action.payload.id
            },
        setLoading (state, action) {
              state.loading = action.payload
            },
        setfirstName (state, action) {
              state.firstName = action.payload
        },
    }
  })


  export default editSlice.reducer
  export const { setField, setLoading, setfirstName, setState } = editSlice.actions