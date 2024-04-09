import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = process.env.REACT_APP_REDIRECT_LINK as string;
  });
  return <>Please wait, Truc Uyen Portfolio opening...</>;
}
export default App;
