import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://dkeslpgottexhfprixrk.supabase.co'

// This lab is for experimentation, in a real-world application the Supabase key should never be so accessible
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZXNscGdvdHRleGhmcHJpeHJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2Mjc1NTAsImV4cCI6MjA1NzIwMzU1MH0.pzGqmG3NdBCqnN8g_fbQzUTY_pm-yFT4M2DarZrO0bI'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  let bookList = document.getElementById('books');
  
  for (let book of books) {
     bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
   }
}

getbooks();