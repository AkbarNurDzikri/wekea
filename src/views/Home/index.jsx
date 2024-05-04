import CustomSafeArea from "../../components/CustomSafeArea";
import MySearchbar from "./Searchbar";
import MyCarousel from "./Carousel";
import Category from "./Category";
import FlashSale from "./FlashSale";
import CardProduct from "./CardProduct";
import { FlatList, View } from "react-native";

const Home = () => {
  const data = [
    { key: "carousel", component: <MyCarousel /> },
    { key: "category", component: <Category /> },
    { key: "flashsale", component: <FlashSale /> },
    { key: "cardProduct", component: <CardProduct /> },
  ];

  const renderItem = ({ item }) => (
    <View style={{ marginTop: 15 }}>{item.component}</View>
  );

  return (
    <CustomSafeArea>
      <MySearchbar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        style={{ marginTop: 10 }}
      />
    </CustomSafeArea>
  );
};

export default Home;
