import { useSearchParams } from "react-router-dom";

export function useDepotParam(): [string | null, (depot: string | null) => void] {
  const [params, setParams] = useSearchParams();
  const set = (depot: string | null) => {
    if (depot) params.set("depot", depot);
    else params.delete("depot");
    setParams(params);
  };
  return [params.get("depot"), set];
}
