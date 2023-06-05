import { SafeAreaView, ScrollView, View, Text } from "react-native";

import { COLORS, SIZES } from "../../constants";

const Favorites = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Text>Favorites</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
