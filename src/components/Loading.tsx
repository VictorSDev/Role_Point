import { View, StyleSheet, ActivityIndicator} from 'react-native';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#000000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;