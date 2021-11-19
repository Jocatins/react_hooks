import { useEffect } from "react";

function useDocTitleHook(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocTitleHook;
