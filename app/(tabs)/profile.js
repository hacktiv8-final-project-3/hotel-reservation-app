import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { COLORS, SIZES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import NotLog from "../../components/notLog/NotLog";
import { setLogout } from "../../src/redux/reducers/loginSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.login);
  const dispact = useDispatch();

  const handlerLogut = () => {
    dispact(setLogout());
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {user.length === 0 ? (
        <NotLog />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.tertiary,
                padding: 5,
                borderRadius: 8,
              }}
              onPress={handlerLogut}
            >
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Profile;
