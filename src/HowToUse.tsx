import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HowToUse = () => {
  return (
    <SafeAreaView style={styles.container}>
                    <ScrollView>
      <Text style={styles.title}>How to Use Cook Assistant</Text>

      <Text style={styles.sectionTitle}>1. Getting Started</Text>
      <Text style={styles.text}>
        Open Cook Assistant and explore the home screen to find recipe suggestions or use the search feature to find recipes based on ingredients you have.
      </Text>

      <Text style={styles.sectionTitle}>2. Entering Ingredients</Text>
      <Text style={styles.text}>
        Navigate to the input section, enter the ingredients you have at home, and Cook Assistant will generate recipe ideas for you.
      </Text>

      <Text style={styles.sectionTitle}>3. Viewing Recipe Details</Text>
      <Text style={styles.text}>
        Tap on any recipe to view detailed instructions, required ingredients, and preparation steps.
      </Text>

      <Text style={styles.sectionTitle}>4. Settings</Text>
      <Text style={styles.text}>
        Go to the Settings tab to view the app version, privacy policy, terms of service, and other information.
      </Text>

      <Text style={styles.sectionTitle}>5. Enjoy Cooking!</Text>
      <Text style={styles.text}>
        Follow the recipe steps and enjoy delicious meals made easy with Cook Assistant.
      </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HowToUse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#81C784',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 12,
  },
});
