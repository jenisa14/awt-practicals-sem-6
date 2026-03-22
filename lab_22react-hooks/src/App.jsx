import PropA from "./components/prop-drilling/A";
import ContextA from "./components/use-context/A";
import DebugDemo from "./components/use-debug-value/DebugDemo";
import DeferredDemo from "./components/use-deferred-value/DeferredDemo";

function App() {
  return (
    <div>
      <PropA />
      <hr />
      <ContextA />
      <hr />
      <DebugDemo />
      <hr />
      <DeferredDemo />
    </div>
  );
}

export default App;