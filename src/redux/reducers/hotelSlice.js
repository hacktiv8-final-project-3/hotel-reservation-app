const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchHotelsbyCity = createAsyncThunk(
  "hotels/fetchHotelsbyCity",
  async ({ city_id }) => {
    try {
      const options = {
        method: "GET",
        url: "https://booking-com.p.rapidapi.com/v2/hotels/search",
        params: {
          order_by: "popularity",
          adults_number: 1,
          checkin_date: "2023-09-27",
          checkout_date: "2023-09-28",
          filter_by_currency: "IDR",
          dest_id: city_id,
          locale: "en-gb",
          units: "metric",
          room_number: 1,
          dest_type: "city",
        },
        headers: {
          "X-RapidAPI-Key":
            "129e0ebac8msh10b523d8b95c942p1b5391jsnb6e898a62e91",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      return response.data.results;
    } catch (error) {}
  }
);

export const fetchPopularHotel = createAsyncThunk(
  "hotels/fetchPopularHotel",
  async () => {
    try {
      const options = {
        method: "GET",
        url: "https://booking-com.p.rapidapi.com/v2/hotels/search",
        params: {
          order_by: "popularity",
          adults_number: 1,
          checkin_date: "2023-09-27",
          checkout_date: "2023-09-28",
          filter_by_currency: "IDR",
          dest_id: 99,
          locale: "en-gb",
          units: "metric",
          room_number: 1,
          dest_type: "country",
        },
        headers: {
          "X-RapidAPI-Key":
            "129e0ebac8msh10b523d8b95c942p1b5391jsnb6e898a62e91",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  hotelsByCity: [],
  popularHotel: [],
  isLoading: false,
  isError: false,
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addhotelsByCity: (state, { payload }) => {
      state.hotelsByCity = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelsbyCity.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchHotelsbyCity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hotelsByCity = action.payload;
      })
      .addCase(fetchHotelsbyCity.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchPopularHotel.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPopularHotel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularHotel = action.payload;
      })
      .addCase(fetchPopularHotel.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { addhotelsByCity } = hotelSlice.actions;
export const getHotelsByCity = (state) => state.hotels.hotelsByCity;
export const getPopularHotel = (state) => state.hotels.popularHotel;

export default hotelSlice.reducer;
