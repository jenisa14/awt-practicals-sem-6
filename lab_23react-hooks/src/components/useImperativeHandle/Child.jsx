import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} placeholder="Child input" />;
});

export default Child;