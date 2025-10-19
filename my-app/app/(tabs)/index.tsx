import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.choixContainer}>
        <ThemedText id="Abo" > Abonnements </ThemedText>
        <ThemedText id="Explo" > Explorer </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.cartePost}>
        <Image 
        source={require('@/assets/images/PPterryCrews.jpg')} 
        id="PP"
        style={styles.photoProfil}/>
        <ThemedText id='pseudo'>TestDePseudo</ThemedText>
        <ThemedText id='timePasse'>10min ago</ThemedText>

        <ThemedText id='contenuPost'>Ceci est un commentaire de post de test</ThemedText>
        <ThemedText id='heart' >♡</ThemedText>
        <ThemedText id='nbHeart' >35.8k</ThemedText>
        <ThemedText id='comment' >💬</ThemedText>
        <ThemedText id='nbComment' >35</ThemedText>
        <ThemedText id='share' >╰┈➤</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  choixContainer: {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent: 'center',
  },
  cartePost: {

  },
  photoProfil: {

  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
