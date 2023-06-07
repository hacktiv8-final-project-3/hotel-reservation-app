import { SafeAreaView, View, FlatList } from "react-native";
import TopCityList from "../../components/lists/TopCityList";
import { useSelector } from "react-redux";
import { getFavorites } from "../../src/redux/reducers/hotelSlice";

import { COLORS, SIZES } from "../../constants";

const Favorites = () => {
  const favorites = useSelector(getFavorites);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <FlatList
          data={favorites}
          renderItem={({ item }) => <TopCityList data={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            padding: SIZES.medium,
            rowGap: SIZES.medium,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
