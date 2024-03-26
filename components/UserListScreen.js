import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { useUser } from "../context/UserContext";

import styles from "../styles";

const UserListScreen = ({ navigation }) => {
  const users = useUser();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userItem}
            onPress={() => navigation.navigate("Details", { user: item })}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={[
                  styles.avatar,
                  {
                    backgroundColor: item.avatarColor,
                    borderColor: "black",
                    borderWidth: 2,
                  },
                ]}
              >
                <Text style={styles.avatarText}>
                  {item.name.charAt(0)}
                  {item.lastName.charAt(0)}
                </Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>
                  {item.name} {item.lastName}
                </Text>
                <Text style={styles.userEmail}>{item.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default UserListScreen;
