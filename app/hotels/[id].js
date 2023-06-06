import { SafeAreaView, ScrollView, View, Text } from "react-native";

import { COLORS, SIZES } from "../../constants";

const Hotels = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Text>Hotels</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hotels;
