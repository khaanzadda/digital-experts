import { useEffect } from "react";

export function useMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (!description) return;
    const el = document.querySelector('meta[name="description"]');
    if (!el) return;
    el.setAttribute("content", description);
  }, [title, description]);
}

