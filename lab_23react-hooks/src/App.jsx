import Parent from "./components/useImperativeHandle/Parent";
import LayoutEffectDemo from "./components/useLayoutEffect/LayoutEffectDemo";
import PrimeSum from "./components/primesWithoutMemo/PrimeSum";
import PrimeSumWithMemo from "./components/primesWithMemo/PrimeSumWithMemo";

function App() {
  return (
    <div>
      <Parent />
      <hr />
      <LayoutEffectDemo />
      <hr />
      <PrimeSum />
      <hr />
      <PrimeSumWithMemo />
      <hr />
      <OptimisticDemo/>
    </div>
  );
}

export default App;