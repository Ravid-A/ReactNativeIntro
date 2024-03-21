import { useState } from "react";
import { View, TextInput, Button } from "react-native";

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

  const handleCreateUser = () => {
    const avatarColor = colorHash(email);

    const newUser = {
      name,
      lastName,
      age,
      gender,
      email,
      avatarColor: avatarColor,
    };
    setUsers([...users, newUser]);
    setName("");
    setLastName("");
    setAge("");
    setGender("");
    setEmail("");
  };

  const generateFakeUser = () => {
    const randomAge = Math.floor(Math.random() * 100)
      .toFixed()
      .toString();

    const fakeUser = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: randomAge,
      gender: faker.person.sex(),
    };

    setName(fakeUser.name);
    setLastName(fakeUser.lastName);
    setAge(fakeUser.age);
    setGender(fakeUser.gender);
    setEmail(
      faker.internet.email({
        firstName: fakeUser.name,
        lastName: fakeUser.lastName,
      })
    );
  };

  return (
    <View style={styles.container}>
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
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Create User" onPress={handleCreateUser} />
      <Button title="Generate Fake User" onPress={generateFakeUser} />
    </View>
  );
};

export default CreateUserScreen;
