# Gift

A static anniversary site for Vercel.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server.

## Saving

Movie additions and uploaded Pluto photos save to the visitor's browser with `localStorage`.

## Shared Supabase Save

1. Create a Supabase project.
2. Open the SQL editor and run `supabase-schema.sql`.
3. Copy your Project URL and anon/public key into `supabase-config.js`.
4. Commit and push `supabase-config.js`.

After that, movies, Pluto uploads, things to try, and bucket list checks sync through Supabase.
