import { SafeAreaView, ScrollView, View, Text } from "react-native";

import { COLORS, SIZES } from "../../constants";

const Bookings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Text>Bookings</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookings;
