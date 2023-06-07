import { useRouter } from "expo-router";
import { View, Text, FlatList } from "react-native";

import styles from "./topcity.style";
import { SIZES } from "../../../constants";
import TopCityCard from "../../cards/topcity/TopCityCard";

const topCity = [
  {
    city_id: "-2679652",
    name: "Jakarta",
    pict: "https://res.cloudinary.com/namassist/image/upload/v1685934024/jakarta_kwdbyn.jpg",
  },
  {
    city_id: "-2698521",
    name: "Surabaya",
    pict: "https://res.cloudinary.com/namassist/image/upload/v1685934021/surabaya_crt9ik.jpg",
  },
  {
    city_id: "-2687472",
    name: "Medan",
    pict: "https://res.cloudinary.com/namassist/image/upload/v1685934020/medan_gdadcv.jpg",
  },
  {
    city_id: "-2671576",
    name: "Bandung",
    pict: "https://res.cloudinary.com/namassist/image/upload/v1685934021/bandung_f5p7io.jpg",
  },
  {
    city_id: "-2701828",
    name: "Makassar",
    pict: "https://res.cloudinary.com/namassist/image/upload/v1685934018/makassar_yb5d8u.jpg",
  },
  {
    city_id: "-2696070",
    name: "Semarang",
    pict: "https://res.cloudinary.com/namassist/image/upload/v1685934020/semarang_lfjwet.jpg",
  },
  {
    city_id: "-2686378",
    name: "Malang",
    pict: "https://res.cloudinary.com/namassist/image/upload/v1685934020/malang_hlbrfk.jpg",
  },
];

const Popularjobs = () => {
  const router = useRouter();

  const handleCardPress = (item) => {
    router.push(`/hotels/city/${item.city_id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kota Kota di Indonesia</Text>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={topCity}
          renderItem={({ item }) => (
            <TopCityCard item={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item.city_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Popularjobs;
