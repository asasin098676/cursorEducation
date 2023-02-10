import "./App.css";
import Comp from "./nav/Comp";

function App() {
  const ANAKIN_IMAGE =
    "https://cdn.mos.cms.futurecdn.net/6CV6TdhEBA4KQce3aNmmx6-1200-80.jpg";
  const RAY_IMAGE =
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

  return (
    <div>
      <Comp
        author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 февр."}
      />
    </div>
  );
}

export default App;
