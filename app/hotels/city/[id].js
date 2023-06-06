import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchHotelsbyCity,
  getHotelsByCity,
} from "../../../src/redux/reducers/hotelSlice";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { ScreenHeaderBtn } from "../../../components";
import { COLORS, icons, SIZES } from "../../../constants";
import { SafeAreaView, FlatList } from "react-native";
import TopCityList from "../../../components/lists/TopCityList";

const City = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams();

  const hotelsByCity = useSelector(getHotelsByCity);

  useEffect(() => {
    dispatch(fetchHotelsbyCity({ city_id: id }));
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: `  Hotel Di ${hotelsByCity[0]?.wishlistName}`,
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <FlatList
        data={hotelsByCity}
        renderItem={({ item }) => <TopCityList data={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
      />
    </SafeAreaView>
  );
};

export default City;
