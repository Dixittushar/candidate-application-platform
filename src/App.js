import "./App.css";
import Jobs from "./pages/Jobs";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Jobs />
    </Provider>
  );
}

export default App;
