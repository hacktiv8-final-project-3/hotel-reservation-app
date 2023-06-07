import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, FONT } from "../../constants";
import { TopCity, Welcome, Popular } from "../../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: SIZES.medium,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.bold,
              fontSize: SIZES.xxLarge,
              color: COLORS.primary,
              marginTop: 2,
            }}
          >
            Nikmati Pengalaman Menginap Terbaik
          </Text>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <TopCity />
          <Popular />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
