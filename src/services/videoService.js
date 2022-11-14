import { createClient } from "@supabase/supabase-js"
 
const PROJECT_URL = "https://hphkwdwflbihvmgzcpws.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaGt3ZHdmbGJpaHZtZ3pjcHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTA3MTIsImV4cCI6MTk4Mzk2NjcxMn0.pMdeUwvdyOJnFoQKnUcd9oKjcUISjkAzExA-iMozwzo"
const supabase = createClient(PROJECT_URL,PUBLIC_KEY);

export function videoService(){
    return {
        getAllVideos(table, select){
            return supabase.from(table)
            .select(select)
        }
    }
}