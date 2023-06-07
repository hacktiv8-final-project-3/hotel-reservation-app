import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScreenHeaderBtn } from "../../components";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import {
  fetchHotelDetail,
  getHotelDetail,
  getLoading,
} from "../../src/redux/reducers/hotelSlice";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { COLORS, SIZES, icons, SHADOWS } from "../../constants";

const Hotels = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const hotelDetail = useSelector(getHotelDetail);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchHotelDetail(id));
  }, [dispatch]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        position: "relative",
        minHeight: "100%",
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: `Detail Hotel`,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%" }}
      >
        {isLoading ? (
          <View
            style={{
              marginTop: 50,
            }}
          >
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : (
          hotelDetail?.rooms &&
          Object.keys(hotelDetail.rooms).map((roomKey) => (
            <View key={roomKey}>
              <View
                style={{
                  height: 350,
                  borderRadius: 5,
                  position: "relative",
                  backgroundColor: "black",
                }}
              >
                <Image
                  source={{
                    uri: hotelDetail?.rooms[roomKey]?.photos[0]?.url_original,
                  }}
                  resizeMode="contain"
                  style={{
                    height: "100%",
                    borderRadius: 5,
                    objectFit: "cover",
                    opacity: 0.6,
                  }}
                />
                <View style={{ position: "absolute", bottom: 15, left: 15 }}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.xLarge,
                      fontWeight: "bold",
                    }}
                  >
                    {hotelDetail.hotel_name}
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.medium,
                    }}
                  >
                    {hotelDetail.address}
                  </Text>
                </View>
              </View>
              <View style={{ padding: SIZES.medium }}>
                <Text
                  style={{
                    fontSize: SIZES.large,
                    fontWeight: "bold",
                    marginBottom: 10,
                  }}
                >
                  Deskripsi
                </Text>

                <Text
                  style={{
                    color: COLORS.secondary,
                    lineHeight: 20,
                    fontSize: SIZES.small + 2,
                    textAlign: "justify",
                  }}
                >
                  {hotelDetail?.rooms[roomKey]?.description}
                </Text>
              </View>
              <View style={{ padding: SIZES.medium }}>
                <Text
                  style={{
                    fontSize: SIZES.large,
                    fontWeight: "bold",
                    marginBottom: 15,
                  }}
                >
                  Fasilitas
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {hotelDetail.facilities_block.facilities.map((f) => (
                    <Text
                      style={{
                        padding: 10,
                        backgroundColor: COLORS.lightWhite,
                        ...SHADOWS.small,
                        borderRadius: 5,
                      }}
                    >
                      {f.name}
                    </Text>
                  ))}
                </View>
              </View>
              <View style={{ padding: SIZES.medium }}>
                <Text
                  style={{
                    fontSize: SIZES.large,
                    fontWeight: "bold",
                    marginBottom: 15,
                  }}
                >
                  Harga
                </Text>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: SIZES.medium,
                      fontWeight: "bold",
                    }}
                  >
                    RP{" "}
                    {hotelDetail.composite_price_breakdown.all_inclusive_amount.value.toLocaleString(
                      "en-ID"
                    )}{" "}
                    / malam
                  </Text>
                </View>
              </View>
              <View style={{ padding: SIZES.medium }}>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: COLORS.tertiary,
                    borderRadius: SIZES.xSmall,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: SIZES.medium,
                      color: COLORS.lightWhite,
                      fontWeight: "bold",
                    }}
                  >
                    BOOK HOTEL
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hotels;
