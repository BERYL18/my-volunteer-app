import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qqskcjjxdndvrvtbiytv.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxc2tjamp4ZG5kdnJ2dGJpeXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1OTc1NzYsImV4cCI6MjAzMzE3MzU3Nn0.TjceHAvWN2wI2Q3Gmax97MeZC23jSu98QoTGHV-niBM`;

export const supabase = createClient(supabaseUrl, supabaseKey);

const supabaseUploadFile= async(file)=>{
    const { data, error } = await supabase.storage
    .from('post')
    .upload('/filename.png', file)

    if (error) {
    console.error('Error uploading file:', error)
    } else {
        const { data: data2 } = supabase.storage.from('post').getPublicUrl(data.path)
      
      console.log('Public URL:', data2.publicUrl)
    }
}