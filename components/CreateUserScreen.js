import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

import { faker } from "@faker-js/faker";
import colorHash from "../utils/colorHash";

import { useSetUsers, useUser } from "../context/UserContext";

import styles from "../styles";

const CreateUserScreen = () => {
  const users = useUser();
  const setUsers = useSetUsers();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [avatarColor, setAvatarColor] = useState("rgb(255,255,255)");

  const handleCreateUser = () => {
    if (!name || !lastName || !age || !gender || !email) {
      return;
    }

    const newUser = {
      name,
      lastName,
      age,
      gender,
      email,
      avatarColor,
    };
    setUsers([...users, newUser]);
    setName("");
    setLastName("");
    setAge("");
    setGender("");
    setEmail("");
    setAvatarColor("rgb(255,255,255)");
  };

  const generateFakeUser = () => {
    const randomAge = Math.floor(Math.random() * 100 + 1)
      .toFixed()
      .toString();

    const fakeUser = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: randomAge,
      gender: faker.person.sex(),
    };

    fakeUser.email = faker.internet.email({
      firstName: fakeUser.name,
      lastName: fakeUser.lastName,
    });

    setName(fakeUser.name);
    setLastName(fakeUser.lastName);
    setAge(fakeUser.age);
    setGender(fakeUser.gender);
    setEmail(fakeUser.email);
    setAvatarColor(colorHash(fakeUser.email).rgb);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.avatar,
          {
            backgroundColor: avatarColor,
            borderColor: "black",
            borderWidth: 2,
            width: 150,
            height: 150,
            borderRadius: 80,
            marginBottom: 18,
          },
        ]}
      >
        <Text
          style={[
            styles.avatarText,
            {
              fontSize: 40,
            },
          ]}
        >
          {name.charAt(0)}
          {lastName.charAt(0)}
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setAvatarColor(colorHash(text).hex);
        }}
        keyboardType="email-address"
      />
      <Button title="Create User" onPress={handleCreateUser} />
      <Button title="Generate Fake User" onPress={generateFakeUser} />
    </View>
  );
};

export default CreateUserScreen;
