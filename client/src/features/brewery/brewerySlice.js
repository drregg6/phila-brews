import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import breweryService from './breweryService';

// Async reducers
// getBreweries reducer
export const getBreweries = createAsyncThunk('brewery/getBreweries', async () => {
  try {
    return await breweryService.getBreweries();
  } catch (error) {
    // const msg = ((error.response
    //   && error.response.data
    //   && error.response.data.msg)
    //   || error.msg
    //   || error.toString()
    // );
    console.log('Could not find breweries');
  }
})

// getBrewery reducer
export const getBrewery = createAsyncThunk('brewery/getBrewery', async (id, thunkAPI) => {
  try {
    return await breweryService.getBrewery(id);
  } catch (error) {
    const msg = 'Could not find brewery';
    return thunkAPI.rejectWithValue(msg);
  }
})

// createBrewery reducer
export const createBrewery = createAsyncThunk('brewery/createBrewery', async (newBrewery, thunkAPI) => {
  try {
    return await breweryService.createBrewery(newBrewery);
  } catch (error) {
    const msg = 'Could not create brewery';
    return thunkAPI.rejectWithValue(msg);
  }
})

// deleteBrewery reducer
export const deleteBrewery = createAsyncThunk('brewery/deleteBrewery', async (id, thunkAPI) => {
  try {
    return await breweryService.deleteBrewery(id);
  } catch (error) {
    const msg = 'Could not delete brewery';
    return thunkAPI.rejectWithValue(msg);
  }
})

// addBeer reducer
export const addBeer = createAsyncThunk('brewery/addBeer', async (newBeer, id, thunkAPI) => {
  try {
    return await breweryService.addBeer(newBeer, id);
  } catch (error) {
    const msg = 'Could not add beer';
    return thunkAPI.rejectWithValue(msg);
  }
})


// deleteBeer reducer
export const deleteBeer = createAsyncThunk('brewery/deleteBeer', async (breweryId, beerId, thunkAPI) => {
  try {
    return await breweryService.deleteBeer(breweryId, beerId);
  } catch (error) {
    const msg = 'Could not delete beer';
    return thunkAPI.rejectWithValue(msg);
  }
})

// Reducer
export const brewerySlice = createSlice({
  name: 'brewery',
  initialState: {
    breweries: [],
    brewery: null,
    beer: {},
    msg: '',
    loading: true
  },
  reducers: {
    reset: (state) => {
      state.breweries = [];
      state.brewery = null;
      state.beer = {};
      state.msg = '';
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getBreweries.pending, (state) => {
      state.loading = true
    })
    .addCase(getBreweries.fulfilled, (state, action) => {
      state.loading = false;
      state.breweries = action.payload;
    })
    .addCase(getBreweries.rejected, (state) => {
      state.loading = false;
    })
    .addCase(getBrewery.pending, (state) => {
      state.loading = true
    })
    .addCase(getBrewery.fulfilled, (state, action) => {
      state.loading = false;
      state.brewery = action.payload;
    })
    .addCase(getBrewery.rejected, (state) => {
      state.loading = false;
    })
    .addCase(createBrewery.pending, (state) => {
      state.loading = true
    })
    .addCase(createBrewery.fulfilled, (state, action) => {
      state.loading = false;
      state.brewery = action.payload;
    })
    .addCase(createBrewery.rejected, (state) => {
      state.loading = false;
    })
    .addCase(deleteBrewery.pending, (state) => {
      state.loading = true
    })
    .addCase(deleteBrewery.fulfilled, (state, action) => {
      state.loading = false;
      state.breweries = state.breweries.filter(brewery => brewery._id !== action.payload);
    })
    .addCase(deleteBrewery.rejected, (state) => {
      state.loading = false;
    })
    .addCase(addBeer.pending, (state) => {
      state.loading = true
    })
    .addCase(addBeer.fulfilled, (state, action) => {
      state.loading = false;
      state.brewery = action.payload;
    })
    .addCase(addBeer.rejected, (state) => {
      state.loading = false;
    })
    .addCase(deleteBeer.pending, (state) => {
      state.loading = true
    })
    .addCase(deleteBeer.fulfilled, (state, action) => {
      state.loading = false;
      state.brewery = action.payload;
    })
    .addCase(deleteBeer.rejected, (state) => {
      state.loading = false;
    })
  }
})

export const {
  reset
} = brewerySlice.actions;

export default brewerySlice.reducer;