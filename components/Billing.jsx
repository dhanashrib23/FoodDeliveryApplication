import { Button, DataTable, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import React from "react";

function Billing(props) {
  const cartItems = props.route.params?.cart || []; // Retrieve cart items passed from Menu

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, setItemsPerPage] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, cartItems.length);
  const visibleItems = cartItems.slice(from, to);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const handlePayment = () => {
    props.navigation.navigate("go-Pay", { total: totalPrice });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Cart Billing</Text>
      <View style={styles.tableWrapper}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Food Name</DataTable.Title>
            <DataTable.Title numeric>Price</DataTable.Title>
          </DataTable.Header>
          {visibleItems.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.title}</DataTable.Cell>
              <DataTable.Cell numeric>₹{item.price}</DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Row style={styles.totalRow}>
            <DataTable.Cell>Total</DataTable.Cell>
            <DataTable.Cell numeric>₹{totalPrice}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(cartItems.length / itemsPerPage)}
            onPageChange={(newPage) => setPage(newPage)}
            label={`${from + 1}-${to} of ${cartItems.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
            showFastPaginationControls
            selectPageDropdownLabel={"Rows per page"}
          />
        </DataTable>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={handlePayment}
        >
          Proceed to Pay ₹{totalPrice}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  tableWrapper: {
    width: "90%",
    padding: 16,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  totalRow: { backgroundColor: "#e0e0e0" },
  button: {
    marginTop: 20,
    alignSelf: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonText: { fontSize: 14 },
});

export default Billing;
