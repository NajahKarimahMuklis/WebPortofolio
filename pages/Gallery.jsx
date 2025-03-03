import CircularGallery from "../src/components/CircullarGallery";

function Gallery() {
  return (
    <div className="">
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={0.01} textColor="#ffffff" borderRadius={0.07} />
      </div>
    </div>
  );
}
export default Gallery  
