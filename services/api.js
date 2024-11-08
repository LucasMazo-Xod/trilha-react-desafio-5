import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://puxtarrtmgbcgurxnbfr.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1eHRhcnJ0bWdiY2d1cnhuYmZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMjI0NTEsImV4cCI6MjA0NjU5ODQ1MX0.Jr-bYdRldoKEPWzMQ4StQa6Dr36irFc38QwlKBqiBqE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1eHRhcnJ0bWdiY2d1cnhuYmZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMjI0NTEsImV4cCI6MjA0NjU5ODQ1MX0.Jr-bYdRldoKEPWzMQ4StQa6Dr36irFc38QwlKBqiBqE"
    }
})