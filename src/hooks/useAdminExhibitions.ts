
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Exhibition {
  id: string;
  title: string;
  description?: string;
  start_date: string;
  end_date: string;
  image: string;
  status: 'current' | 'upcoming' | 'past';
  location: string;
  created_at: string;
  updated_at: string;
}

export const useCreateExhibition = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (exhibition: Omit<Exhibition, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('exhibitions')
        .insert([exhibition])
        .select()
        .single();
      
      if (error) {
        console.error('Error creating exhibition:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exhibitions'] });
    },
  });
};

export const useUpdateExhibition = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...exhibition }: Partial<Exhibition> & { id: string }) => {
      const { data, error } = await supabase
        .from('exhibitions')
        .update(exhibition)
        .eq('id', id)
        .select()
        .single();
      
      if (error) {
        console.error('Error updating exhibition:', error);
        throw error;
      }
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exhibitions'] });
    },
  });
};

export const useDeleteExhibition = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('exhibitions')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting exhibition:', error);
        throw error;
      }
      
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exhibitions'] });
    },
  });
};
