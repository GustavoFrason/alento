"use client";
import { useEffect, useRef } from "react";
import { gaEvent } from "@/lib/analytics";

type Props = { listId: string; once?: boolean };

export default function ViewListTracker({ listId, once = true }: Props) {
  const sent = useRef(false);

  useEffect(() => {
    const el = document.getElementById(listId);
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && (!once || !sent.current)) {
          gaEvent("view_item_list", { item_list_id: listId });
          sent.current = true;
        }
      },
      { root: null, threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [listId, once]);

  return null;
}