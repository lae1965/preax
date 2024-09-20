import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import clsx from "./utils/clsx";
import useWeather from "./hooks/useWeather";

function App() {
  const { isPanelOpen, data } = useWeather();

  return (
    <div className="app">
      <div className={clsx("content", isPanelOpen && "panelOpened")}>
        <Header />
        <Main data={data} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
