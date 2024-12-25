import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, Alert } from "react-native";
import { Button, Text, Card, Badge } from "react-native-paper";

function Menu(props) {
  const [menuItems] = useState([
    {
      id: 1,
      title: "Biryani",
      description: "Non-veg chicken Biryani",
      price: 100,
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    },
    {
      id: 2,
      title: "Pizza",
      description: "Tomato-onion Pizza",
      price: 80,
      image:
        "https://c8.alamy.com/comp/EHAN0P/pizza-with-tomato-salami-and-olives-EHAN0P.jpg",
    },
    {
      id: 3,
      title: "Paneer Masala",
      description: "Veg Paneer Masala",
      price: 120,
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2019/03/Easy-Butter-Paneer-Masala-Recipe.jpg",
    },
    {
      id: 4,
      title: "Pav Bhaji",
      description: "Red spicy Pav Bhaji",
      price: 50,
      image: "https://i.ytimg.com/vi/dz6eh3U5zEM/mqdefault.jpg",
    },
    {
      id: 5,
      title: "Chicken Tikka Masala",
      description: "Non-veg Chicken Tikka Masala",
      price: 150,
      image:
        "https://indisch-kochen.com/wp-content/uploads/2022/03/chicken-tikka-masala-haehnchen-tikka-masala.png",
    },
    {
      id: 6,
      title: "Dal Tadka Rice",
      description: "Veg Dal Rice with Tadka",
      price: 100,
      image:
        "https://vegecravings.com/wp-content/uploads/2018/01/Dal-Tadka-Recipe-Step-By-Step-Instructions.jpg",
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    Alert.alert("Added to Cart", `${item.title} has been added to your cart.`);
  };

  const goToBilling = () => {
    props.navigation.navigate("go-Bill", { cart }); // Pass cart as a parameter
  };

  const Profile = () => {
    props.navigation.navigate("go-Profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Food Menu</Text>
      <ScrollView>
        <View style={styles.menuItems}>
          {menuItems.map((item) => (
            <Card key={item.id} style={styles.card}>
              <Card.Content>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text variant="titleLarge" style={styles.itemTitle}>
                  {item.title}
                </Text>
                <Text variant="bodyMedium" style={styles.itemDescription}>
                  {item.description}
                </Text>
                <Text variant="bodyMedium" style={styles.price}>
                  ₹{item.price}
                </Text>
                <Button
                  mode="outlined"
                  style={styles.addButton}
                  onPress={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.button} onPress={Profile}>
          Profile
        </Button>
        <Button mode="contained" style={styles.button} onPress={goToBilling}>
          Billing
        </Button>
        <Badge style={styles.cartBadge}>{cart.length}</Badge>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8f9fa" },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  menuItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: { width: "47%", marginBottom: 12, borderRadius: 8, elevation: 2 },
  image: { width: "100%", height: 100, borderRadius: 8, marginBottom: 8 },
  itemTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 4 },
  itemDescription: { fontSize: 14, color: "#6c757d", marginBottom: 4 },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 8,
  },
  addButton: { marginTop: 8 },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: { flex: 1, marginHorizontal: 8, paddingVertical: 8 },
  cartBadge: {
    position: "absolute",
    top: -8,
    right: 16,
    backgroundColor: "#dc3545",
    color: "#fff",
    fontSize: 12,
  },
});

export default Menu;
