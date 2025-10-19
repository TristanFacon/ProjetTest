import { Image } from 'expo-image';
import {Dimensions, Platform, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';


const screenWidth = Dimensions.get('window').width;


export default function HomeScreen() {

  const [liker1, estLiker1] = useState(false);
  const [liker2, estLiker2] = useState(false);

  return (
<ThemedView style={styles.body}>

      <ThemedView style={styles.cartePost}>
          <ThemedView style={styles.headerPost}>
          <Image 
          source={require('@/assets/images/PPterryCrews.jpg')} 
          id="PP"
          style={styles.photoProfil}/>

          <ThemedView style={styles.info}>
            <ThemedText id='pseudo' style={styles.pseudo}>Terry</ThemedText>
            <ThemedText id='timePasse' style={styles.time}>10min ago</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedText id='contenuPost' style={styles.commentaire}>
          ✨📖 C’est avec une immense joie que je vous annonce la sortie de mon nouveau livre !
            Après des mois de travail, de réflexion et d’écriture, je peux enfin partager avec vous cet univers qui me tient tant à cœur. Ce livre est le reflet de mes pensées, de mes émotions et de mes expériences, et j’espère qu’il saura résonner avec vous autant qu’il a résonné en moi. 
            Disponible dès maintenant en librairie et en ligne. Merci à tous pour votre soutien, et bonne lecture ! 💛
            #NouveauLivre #Écriture #Partage #Art (chatgpt)
        </ThemedText>

        <ThemedView style={styles.optionPost}>
          <ThemedView style={styles.coeur}>
            <ThemedText id='heart' onPress={() => estLiker1(!liker1)} >{liker1 ? '❤️' : '♡'}</ThemedText>
            <ThemedText id='nbHeart' >35.8k</ThemedText>
          </ThemedView>
          <ThemedView style={styles.actionCommentaire}>
            <ThemedText id='comment' >💬</ThemedText>
            <ThemedText id='nbComment' >35</ThemedText>
          </ThemedView>
            <ThemedText id='share' >╰┈➤</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.cartePost}>
          <ThemedView style={styles.headerPost}>
          <Image 
          source={require('@/assets/images/PPterryCrews.jpg')} 
          id="PP"
          style={styles.photoProfil}/>

          <ThemedView style={styles.info}>
            <ThemedText id='pseudo' style={styles.pseudo}>Terry</ThemedText>
            <ThemedText id='timePasse' style={styles.time}>10min ago</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedText id='contenuPost' style={styles.commentaire}>Voici la couverture pour les interessé </ThemedText>
        <Image 
          source={require('@/assets/images/couvertureLivre.jpg')} 
          id="PP"
          style={styles.photoArticle}/>

       <ThemedView style={styles.optionPost}>
          <ThemedView style={styles.coeur}>
            <ThemedText id='heart' onPress={() => estLiker2(!liker2)} >{liker2 ? '❤️' : '♡'}</ThemedText>
            <ThemedText id='nbHeart' >35.8k</ThemedText>
          </ThemedView>
          <ThemedView style={styles.actionCommentaire}>
            <ThemedText id='comment' >💬</ThemedText>
            <ThemedText id='nbComment' >35</ThemedText>
          </ThemedView>
            <ThemedText id='share' >╰┈➤</ThemedText>
        </ThemedView>
      </ThemedView>
   </ThemedView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F2C0A4',
    flex: 1,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
   cartePost: {
    backgroundColor: '#fff',
    width: screenWidth * 0.75,
    alignSelf: 'center',
    padding: 12,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  headerPost: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  photoProfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  info: {
    flexDirection: 'column',
  },

  pseudo: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  time: {
    fontSize: 12,
    color: '#666',
  },

  commentaire: {
    fontSize: 14,
    marginBottom: 8,
  },

  optionPost: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  coeur: {
    flexDirection: 'row',
  },
  actionCommentaire: {
    flexDirection: 'row',
  },
  photoArticle: {
    width: 200,
    height: 200,
  },
});
