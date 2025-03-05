import { StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const TermOfService = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Terms of Service - Cook Assistant</Text>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.text}>
        Welcome to Cook Assistant! By using our app, you agree to comply with and be bound by the following terms and conditions.
      </Text>

      <Text style={styles.sectionTitle}>2. Use of the App</Text>
      <Text style={styles.text}>
        You must use Cook Assistant in accordance with all applicable laws and regulations. Do not misuse our app by interfering with its functionality or accessing it using methods other than our provided interface.
      </Text>

      <Text style={styles.sectionTitle}>3. Intellectual Property</Text>
      <Text style={styles.text}>
        All content, features, and functionality of Cook Assistant are owned by us and are protected by copyright, trademark, and other laws.
      </Text>

      <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
      <Text style={styles.text}>
        Cook Assistant is provided "as is" without warranties of any kind. We do not take responsibility for any damages arising from your use of the app.
      </Text>

      <Text style={styles.sectionTitle}>5. Changes to Terms</Text>
      <Text style={styles.text}>
        We reserve the right to modify these terms at any time. Continued use of the app indicates acceptance of any changes.
      </Text>

      <Text style={styles.sectionTitle}>6. Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions about these terms, please contact us through the app or our official channels.
      </Text>
    </SafeAreaView>
  );
};

export default TermOfService;

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
