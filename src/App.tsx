import { useCallback } from "react";
import { useRoute } from "./hooks/useRoute";
import One from "./route/one";
import Two from "./route/two";

import "./App.css";

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
          </div>
        );
      case "/one":
        return <One />;
      case "/two":
        return <Two />;
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
