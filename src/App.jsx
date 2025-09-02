import { useState } from "react";
import Navbar from "./Component/Navbar";
import LoadingBar from "./Component/LoadingBar";
import useNewApi from "./hooks/useNewApi";
import News from "./pages/News";
function App() {
  const [newstype, setNewstype] = useState("general");
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  const handleSetType = (type) => {
    setNewstype(type);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  const dataa = useNewApi(newstype);
  return (
    <>
      <LoadingBar load={loading} />
      <Navbar setnewstype={handleSetType} />
      <News newdata={dataa} />
    </>
  );
}

export default App;
