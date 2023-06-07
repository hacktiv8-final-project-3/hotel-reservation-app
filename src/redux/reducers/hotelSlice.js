const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

const date = new Date();
const today = date.toISOString().slice(0, 10);

date.setDate(date.getDate() + 1);
const tommorrow = date.toISOString().slice(0, 10);

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
          checkin_date: today,
          checkout_date: tommorrow,
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
          checkin_date: today,
          checkout_date: tommorrow,
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

export const fetchHotelDetail = createAsyncThunk(
  "hotels/fetchHotelDetail",
  async (hotel_id) => {
    try {
      const options = {
        method: "GET",
        url: "https://booking-com.p.rapidapi.com/v2/hotels/details",
        params: {
          hotel_id: hotel_id,
          locale: "en-gb",
          currency: "IDR",
          checkin_date: today,
          checkout_date: tommorrow,
        },
        headers: {
          "X-RapidAPI-Key":
            "129e0ebac8msh10b523d8b95c942p1b5391jsnb6e898a62e91",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  hotelsByCity: [],
  popularHotel: [],
  hotelDetail: [],
  isLoading: false,
  isError: false,
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
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
      })
      .addCase(fetchHotelDetail.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchHotelDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hotelDetail = action.payload;
      })
      .addCase(fetchHotelDetail.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// export const { addhotelsByCity } = hotelSlice.actions;
export const getHotelsByCity = (state) => state.hotels.hotelsByCity;
export const getPopularHotel = (state) => state.hotels.popularHotel;
export const getHotelDetail = (state) => state.hotels.hotelDetail;
export const getLoading = (state) => state.hotels.isLoading;

export default hotelSlice.reducer;
