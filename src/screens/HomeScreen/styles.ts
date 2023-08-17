import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertContainer: {
    width: Dimensions.get('window').width - 60,
    height: Dimensions.get('window').width - 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonFirstShadow: {
    width: Dimensions.get('window').width - 150,
    height: Dimensions.get('window').width - 150,
    borderRadius: (Dimensions.get('window').width - 150) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fecaca',
  },
  buttonSecondShadow: {
    width: Dimensions.get('window').width - 182,
    height: Dimensions.get('window').width - 182,
    borderRadius: (Dimensions.get('window').width - 182) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f87171',
  },
  buttonContainer: {
    width: Dimensions.get('window').width - 210,
    height: Dimensions.get('window').width - 210,
    borderRadius: (Dimensions.get('window').width - 210) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc2626',
  },
  buttonTextColor: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cancelSOSButtonContainer: {
    position: 'absolute',
  },
});
