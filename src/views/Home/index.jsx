import CustomSafeArea from "../../components/CustomSafeArea";
import MySearchbar from "./Searchbar";
import MyCarousel from "./Carousel";
import Category from "./Category";
import CardProduct from "./CardProduct";

const Home = () => {
  return (
    <CustomSafeArea>
      <MySearchbar />
      <MyCarousel />
      <Category />
      <CardProduct />
    </CustomSafeArea>
  );
};

export default Home;
