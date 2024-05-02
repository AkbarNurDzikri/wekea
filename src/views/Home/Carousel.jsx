import * as React from "react";
import { Dimensions, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const MyCarousel = () => {
  const width = Dimensions.get("window").width;
  const images = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1678565202188-f69b2e593998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel
        loop
        width={width - 30}
        height={width / 2}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default MyCarousel;
