import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Privacy Policy - Cook Assistant</Text>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.text}>
        Cook Assistant respects your privacy and is committed to protecting your personal data. This policy outlines how we handle your information.
      </Text>

      <Text style={styles.sectionTitle}>2. Data Collection</Text>
      <Text style={styles.text}>
        We may collect data such as app usage statistics, preferences, and input data to improve user experience. No personal data is collected without your consent.
      </Text>

      <Text style={styles.sectionTitle}>3. Data Usage</Text>
      <Text style={styles.text}>
        Data collected by Cook Assistant is used to enhance app functionality and provide personalized experiences. We do not share your data with third parties.
      </Text>

      <Text style={styles.sectionTitle}>4. Data Security</Text>
      <Text style={styles.text}>
        We implement security measures to protect your data, but cannot guarantee absolute security. Please use the app responsibly.
      </Text>

      <Text style={styles.sectionTitle}>5. Changes to This Policy</Text>
      <Text style={styles.text}>
        We may update this privacy policy from time to time. Continued use of the app signifies acceptance of the updated policy.
      </Text>

      <Text style={styles.sectionTitle}>6. Contact Us</Text>
      <Text style={styles.text}>
        If you have questions regarding this policy, please contact us through the app or our official channels.
      </Text>
    </ScrollView>
  );
};

export default PrivacyPolicy;

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

