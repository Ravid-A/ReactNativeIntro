import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import { useEffect } from "react";

const UserDetailsScreen = ({ route, navigation }) => {
  const { user } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: `${user.name} ${user.lastName} Details` });
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.avatar,
          {
            backgroundColor: user.avatarColor,
            borderColor: "black",
            borderWidth: 2,
          },
        ]}
      >
        <Text style={styles.avatarText}>
          {user.name.charAt(0)}
          {user.lastName.charAt(0)}
        </Text>
      </View>
      <Text>Name: {user.name}</Text>
      <Text>Last Name: {user.lastName}</Text>
      <Text>Age: {user.age}</Text>
      <Text>Gender: {user.gender}</Text>
      <Text>Email: {user.email}</Text>

      <Button title="Back to List" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default UserDetailsScreen;
