// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://qhywmeuqwquhlaryripu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoeXdtZXVxd3F1aGxhcnlyaXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MTA4MjEsImV4cCI6MjA4ODI4NjgyMX0.iN88OZWQg8MWeee1VU15g2bFMAJ-AC0v85w_8kH_ouc'
)
    