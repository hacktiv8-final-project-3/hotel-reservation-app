import { SafeAreaView, ScrollView, View, Text } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Text>Search</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
