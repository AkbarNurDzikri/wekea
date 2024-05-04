import { StyleSheet, View, Image, Pressable } from "react-native";
import CustomSafeArea from "../../components/CustomSafeArea";
import { Divider, Text } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import dummyDataTransaction from "../../utils/dummyDataTransaction";
import currencyFormatter from "../../utils/currencyFormatter";

const Transaction = () => {
  return (
    <CustomSafeArea>
      <View>
        <Searchbar style={styles.searchbar} placeholder="Mau cari apa?" />

        <FlatList
          style={{ marginTop: 10 }}
          showsVerticalScrollIndicator={false}
          data={dummyDataTransaction}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.container} key={index}>
                <View style={styles.transHeader}>
                  <Text>{item.date}</Text>
                  <View style={styles.transStatus}>
                    <Text style={styles.transStatusText}>{item.status}</Text>
                  </View>
                </View>
                {item?.items?.map((i, index) => (
                  <View style={styles.transBodyContainer} key={index}>
                    <View style={styles.transBody}>
                      <Image
                        source={{ uri: i.image }}
                        style={styles.transBodyImage}
                      />
                      <View style={{ justifyContent: "center" }}>
                        <Text style={styles.transBodyTitle}>{i.name}</Text>
                        <Text>Qty: {i.qty}</Text>
                      </View>
                    </View>
                    <View>
                      <Text>{currencyFormatter(i.price)}</Text>
                    </View>
                  </View>
                ))}
                <Divider />
                <View style={styles.transBodyFooter}>
                  <Pressable>
                    <View style={styles.transBodyFooterButton}>
                      <Text>Lacak</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            );
          }}
        />
      </View>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  container: {
    backgroundColor: "white",
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  transHeader: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transStatus: {
    borderWidth: 1,
    borderColor: "orange",
    padding: 2,
    borderRadius: 5,
  },
  transStatusText: {
    color: "orange",
  },
  transBodyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  transBody: {
    flexDirection: "row",
    gap: 10,
  },
  transBodyTitle: {
    fontWeight: "bold",
  },
  transBodyImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  transBodyFooter: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  transBodyFooterButton: {
    borderWidth: 1,
    borderColor: "green",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
});

export default Transaction;
