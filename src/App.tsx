import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = process.env.REACT_APP_REDIRECT_LINK as string;
  });
  return <>Thuan Portfolio opening...</>;
}
export default App;
