import AnimatedImages from "./AnimateImage";

const images = [
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "/4.svg",
  "/5.svg",
  "/6.svg",
  "/7.svg",
  "/8.svg",
  "/9.svg",
  "/10.svg",
  "/11.svg",
  "/12.svg",
  "/14.svg",
  "/15.svg",
  "/16.svg",
  "/17.svg",
  // Add more image URLs
];

const App = () => (
  <div className="h-screen bg-blue-300 py-14">
    <AnimatedImages images={images} containerClass="my-custom-class" />
  </div>
);

export default App;
