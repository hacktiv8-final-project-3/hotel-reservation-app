import { useRouter } from "expo-router";
import { icons } from "../../constants";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./topcitylist.style";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";

const TopCityList = ({ data, handleNavigate }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
      key={data.hotel_id}
    >
      <Image
        source={{
          uri: data.photoMainUrl,
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.hotelName}>{data.name}</Text>
          <Text style={styles.rating}>
            Score: <Text style={styles.score}>{data.reviewScore} </Text>
            dari <Text style={styles.score}>{data.reviewCount}</Text> Reviewer
          </Text>
        </View>
      </View>
      <View style={styles.btnFav}>
        <ScreenHeaderBtn
          iconUrl={icons.heart}
          dimension="80%"
          handlePress={() => router.back()}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TopCityList;
