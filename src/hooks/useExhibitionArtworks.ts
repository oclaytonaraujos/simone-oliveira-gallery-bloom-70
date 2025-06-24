
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ExhibitionArtwork {
  id: string;
  exhibition_id: string;
  artwork_id: string;
  created_at: string;
}

export const useExhibitionArtworks = (exhibitionId: string) => {
  return useQuery({
    queryKey: ['exhibition-artworks', exhibitionId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('exhibition_artworks')
        .select(`
          *,
          artwork:artworks(*)
        `)
        .eq('exhibition_id', exhibitionId);
      
      if (error) {
        console.error('Error fetching exhibition artworks:', error);
        throw error;
      }
      
      return data;
    },
    enabled: !!exhibitionId,
  });
};

export const useAddArtworkToExhibition = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ exhibition_id, artwork_id }: { exhibition_id: string; artwork_id: string }) => {
      const { data, error } = await supabase
        .from('exhibition_artworks')
        .insert([{ exhibition_id, artwork_id }])
        .select()
        .single();
      
      if (error) {
        console.error('Error adding artwork to exhibition:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['exhibition-artworks', data.exhibition_id] });
    },
  });
};

export const useRemoveArtworkFromExhibition = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { data: exhibitionArtwork, error: fetchError } = await supabase
        .from('exhibition_artworks')
        .select('exhibition_id')
        .eq('id', id)
        .single();
      
      if (fetchError) {
        console.error('Error fetching exhibition artwork:', fetchError);
        throw fetchError;
      }
      
      const { error } = await supabase
        .from('exhibition_artworks')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error removing artwork from exhibition:', error);
        throw error;
      }
      
      return { id, exhibition_id: exhibitionArtwork.exhibition_id };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['exhibition-artworks', data.exhibition_id] });
    },
  });
};
