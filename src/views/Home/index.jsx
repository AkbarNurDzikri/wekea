import CustomSafeArea from "../../components/CustomSafeArea";
import MySearchbar from "./Searchbar";
import MyCarousel from "./Carousel";

const Home = () => {
  return (
    <CustomSafeArea>
      <MySearchbar />
      <MyCarousel />
    </CustomSafeArea>
  );
};

export default Home;
