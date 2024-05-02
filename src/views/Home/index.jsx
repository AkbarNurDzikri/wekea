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
  ];

  const renderItem = ({ item }) => (
    <View style={{ marginTop: 15 }}>{item.component}</View>
  );

  return (
    <CustomSafeArea>
      <FlatList
        ListHeaderComponent={<MySearchbar />}
        data={data}
        renderItem={renderItem}
        ListFooterComponent={<CardProduct />}
      />
    </CustomSafeArea>
  );
};

export default Home;
