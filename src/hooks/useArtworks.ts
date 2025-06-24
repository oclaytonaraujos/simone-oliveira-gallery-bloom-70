
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Artwork {
  id: string;
  title: string;
  image: string;
  year: string;
  medium: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export const useArtworks = () => {
  return useQuery({
    queryKey: ['artworks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('artworks')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching artworks:', error);
        throw error;
      }
      
      return data as Artwork[];
    },
  });
};
