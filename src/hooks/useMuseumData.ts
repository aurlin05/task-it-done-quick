import { useState, useEffect } from "react";
import { MuseumMetadata } from "@/types/museum";
import museumMetadata from "@/data/mcn_museum_metadata.json";

export const useMuseumData = () => {
  const [data, setData] = useState<MuseumMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      // Load the metadata directly from the imported JSON
      setData(museumMetadata as MuseumMetadata);
      setLoading(false);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
