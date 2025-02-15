import { useCallback } from "react";
import { useRoute } from "./hooks/useRoute";
import One from "./route/one";
import Two from "./route/two";
import Three from "./route/three";

import "./App.css";
import Four from "./route/four";

const App = () => {
  const { path, navigate } = useRoute();

  const Outlet = useCallback(() => {
    switch (path) {
      case "/":
        return (
          <div>
            <h1>Home</h1>
            <button onClick={() => navigate("/one")}>Go to One</button>
            <button onClick={() => navigate("/two")}>Go to Two</button>
            <button onClick={() => navigate("/three")}>Go to Three</button>
            <button onClick={() => navigate("/four")}>Go to Four</button>
          </div>
        );
      case "/one":
        return <One />;
      case "/two":
        return <Two />;
      case "/three":
        return <Three />;
      case "/four":
        return <Four />;
      case "/about":
        return (
          <div>
            <h1>About</h1>
            <button onClick={() => navigate("/")}>Go to Home</button>
          </div>
        );
      default:
        return <div>Not Found</div>;
    }
  }, [path, navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default App;
