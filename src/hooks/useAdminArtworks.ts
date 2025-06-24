
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Artwork } from './useArtworks';

export const useCreateArtwork = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (artwork: Omit<Artwork, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('artworks')
        .insert([artwork])
        .select()
        .single();
      
      if (error) {
        console.error('Error creating artwork:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artworks'] });
    },
  });
};

export const useUpdateArtwork = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...artwork }: Partial<Artwork> & { id: string }) => {
      const { data, error } = await supabase
        .from('artworks')
        .update(artwork)
        .eq('id', id)
        .select()
        .single();
      
      if (error) {
        console.error('Error updating artwork:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artworks'] });
    },
  });
};

export const useDeleteArtwork = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('artworks')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting artwork:', error);
        throw error;
      }
      
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artworks'] });
    },
  });
};
