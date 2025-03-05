import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Settings,
  ChevronRight,
  Shield,
  FileText,
  CircleHelp as HelpCircle,
} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const SettingItem = ({icon, title, onPress}) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      <ChevronRight size={20} color="#666" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.card}>
            <SettingItem
              icon={<Shield size={22} color="#FFFFFF" />}
              title="Privacy Policy"
              onPress={() => {
                navigation.navigate('PrivacyPolicy');
              }}
            />
            <SettingItem
              icon={<FileText size={22} color="#FFFFFF" />}
              title="Terms of Service"
              onPress={() => {
                navigation.navigate('TermOfService');
              }}
            />
            <SettingItem
              icon={<HelpCircle size={22} color="#FFFFFF" />}
              title="How to Use"
              onPress={() => {
                navigation.navigate('HowToUse');
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Info</Text>
          <View style={styles.card}>
            <View style={styles.versionContainer}>
              <Text style={styles.versionLabel}>Version</Text>
              <Text style={styles.versionText}>1.0.0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: '#666',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginLeft: 20,
    marginBottom: 12,
  },
  card: {
    marginHorizontal: 16,
    backgroundColor: '#2A2A2A',
    borderRadius: 16,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 12,
    fontWeight: '500',
  },
  versionContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  versionLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  versionText: {
    color: '#666',
    fontSize: 16,
  },
});
