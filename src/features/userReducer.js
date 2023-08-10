import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
   userName:"",
   email:"",
   loading:false,
   token:"",
   error:"",
   firstName:"",
   lastName:"",
   id:""
}

export const login = createAsyncThunk (
  "user/login",
  async (data, thunkAPI) => { //On passe les infos
    return fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    }).then((response) => {
      return response.json() // C'est pour recuperer dans l'extra
    }).catch((error) => {
      console.log(error)
    })
  }
) 

export const getMe = createAsyncThunk (
"user/me",
async (data, thunkAPI) => {
 // Ici on fait appel à l'api pour récup les infos
 return fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ thunkAPI.getState().user.token
  },
}).then((response) => {
  return response.json() // C'est pour recuperer dans l'extra
}).catch((error) => {
  console.log(error)
 })
})

export const edit = createAsyncThunk (
    "profile/edit",
    async (data, thunkAPI) => {
        // Ici on fait appel à l'api pour récup les infos
        return fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ thunkAPI.getState().user.token
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json() // C'est pour recuperer dans l'extra
        }).catch((error) => {
            console.log(error)
        })
    })

  


const signSlice = createSlice({
  name: 'Connexion',
  initialState,
  reducers: {
    setField (state, action) { // Les actions
        console.log(action.payload)
      state[action.payload.fieldName] = action.payload.fieldValue
    },
    setError (state, action) {
      state.error = action.payload
    },

    setLoading (state, action) {
      state.loading = action.payload
    },
  
    toggleCheckbox (state) {
      state.checkbox = !state.checkbox
    },
    setReset(state) {
      state.userName = "";
      state.checkbox = false;
      state.loading = false;
      state.token = "";
      state.error = "";
      state.id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = ""
      },
  },
  extraReducers: (builder) => {
   builder.addCase(login.pending,(state, action) => {

   })
   .addCase(login.fulfilled,(state, action) => {
   state.loading = false
   if(action.payload.status == 400) {
    console.log('error')
   }    // C'est une condition pour stocker le token si et seulement si , il n'y a pas d'erreur
   else {
    state.token = action.payload.body.token
   }
   })
   .addCase(login.rejected,(state, action) => {
    // console.log(action)
   })
   .addCase(getMe.fulfilled, (state, action) => {
    state.userName = action.payload.body.userName
    state.lastName = action.payload.body.lastName
    state.firstName = action.payload.body.firstName
    state.id = action.payload.body.id
    state.email = action.payload.body.email
   })
       .addCase(edit.fulfilled, (state, action) => {
           state.userName = action.payload.body.userName
       })
  }
})

export default signSlice.reducer
export const { setField, toggleCheckbox, setError, setLoading, setReset } = signSlice.actions