import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alarm Settings</Text>
      
      <View style={styles.content}>
        <View style={styles.settingCard}>
          <Text style={styles.settingLabel}>Wake Time</Text>
          <Text style={styles.settingValue}>7:00 AM</Text>
        </View>
        
        <View style={styles.settingCard}>
          <Text style={styles.settingLabel}>Sound</Text>
          <Text style={styles.settingValue}>Ocean Waves</Text>
        </View>
        
        <View style={styles.settingCard}>
          <Text style={styles.settingLabel}>Volume Increase</Text>
          <Text style={styles.settingValue}>Gradual (5 min)</Text>
        </View>
        
        <Pressable 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 60,
    marginBottom: 30,
  },
  content: {
    flex: 1,
  },
  settingCard: {
    backgroundColor: '#2a2a3e',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 16,
    color: '#a0a0b0',
  },
  settingValue: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  backButton: {
    marginTop: 40,
    padding: 16,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#6c63ff',
    fontSize: 16,
    fontWeight: '600',
  },
});
