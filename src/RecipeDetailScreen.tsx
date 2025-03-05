import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView, ActivityIndicator, TouchableOpacity, Platform } from 'react-native';
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const API_KEY = '7b2f8ee613474c0fba65b45ed5b08a97';

const RecipeDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { recipe } = route.params;
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecipeInstructions();
  }, []);

  const fetchRecipeInstructions = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${API_KEY}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setInstructions(data[0].steps);
      }
    } catch (error) {
      console.error('Failed to fetch instructions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
 

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{recipe.title}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Clock size={20} color="#9CA3AF" />
              <Text style={styles.metaText}>30 min</Text>
            </View>
            <View style={styles.metaItem}>
              <Users size={20} color="#9CA3AF" />
              <Text style={styles.metaText}>4 servings</Text>
            </View>
            <View style={styles.metaItem}>
              <ChefHat size={20} color="#9CA3AF" />
              <Text style={styles.metaText}>Easy</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients You Have</Text>
            <View style={styles.ingredientsList}>
              {recipe.usedIngredients.map((ing, index) => (
                <View key={index} style={styles.ingredient}>
                  <Text style={styles.ingredientText}>{ing.name}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Ingredients Needed</Text>
            <View style={styles.ingredientsList}>
              {recipe.missedIngredients.map((ing, index) => (
                <View key={index} style={styles.ingredient}>
                  <Text style={styles.ingredientText}>{ing.name}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Instructions</Text>
            {loading ? (
              <ActivityIndicator size="large" color="#4CAF50" />
            ) : (
              <View style={styles.instructionsList}>
                {instructions.map((step) => (
                  <View key={step.number} style={styles.instructionItem}>
                    <Text style={styles.stepNumber}>{step.number}</Text>
                    <Text style={styles.instructionText}>{step.step}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 48 : 24,
    left: 16,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'semibold',
    color: '#f7f7f7',
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  metaText: {
    fontSize: 14,
    color: '#f7f7f7',
    marginLeft: 8,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  ingredientsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  ingredient: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 4,
  },
  ingredientText: {
    fontSize: 14,
    color: '#f7f7f7',
  },
  instructionsList: {
    gap: 20,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepNumber: {
    fontSize: 20,
    color: '#4CAF50',
    width: 32,
  },
  instructionText: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
    lineHeight: 24,
  },
});

export default RecipeDetailScreen;
