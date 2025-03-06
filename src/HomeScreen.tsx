import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, FlatList, View, StyleSheet, ActivityIndicator, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Search, ChefHat } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const API_KEY = '7b2f8ee613474c0fba65b45ed5b08a97';

const HomeScreen = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const fetchRecipesFromSpoonacular = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);
    setError('');

    const ingredientsList = ingredients.split(',').map(item => item.trim()).join(',');

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientsList}&number=10`
      );
      const data = await response.json();

      if (response.ok && data.length > 0) {
        setRecipes(data);
      } else {
        setError('No recipes found. Try different ingredients.');
      }
    } catch (err) {
      setError('Unable to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={80} // Klavyenin giriş alanını kapatmaması için ekstra kaydırma
      enableAutomaticScroll={true} // iOS için otomatik kaydırmayı etkinleştirir
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.inner}>
          <View style={styles.header}>
            <ChefHat size={32} color="#FFFFFF" />
            <Text style={styles.title}>What's Cooking?</Text>
          </View>

          <View style={styles.searchContainer}>
            <Search size={20} color="#9CA3AF" style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter ingredients (e.g., chicken, tomato, basil)"
              value={ingredients}
              onChangeText={setIngredients}
              placeholderTextColor="#9CA3AF"
              onSubmitEditing={fetchRecipesFromSpoonacular}
              returnKeyType="search"
            />
          </View>

          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#4CAF50" />
              <Text style={styles.loadingText}>Finding recipes...</Text>
            </View>
          ) : (
            <FlatList
              data={recipes}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.recipeList}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
                >
                  <Image source={{ uri: item.image }} style={styles.cardImage} />
                  <View style={styles.cardOverlay} />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  inner: {
    flex: 1,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#FFFFFF',
    fontSize: 16,
  },
  recipeList: {
    padding: 24,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#1F2937',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#9CA3AF',
    marginTop: 12,
    fontSize: 16,
  },
  errorContainer: {
    backgroundColor: '#991B1B',
    marginHorizontal: 24,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default HomeScreen;
