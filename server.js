import { serveDir } from  'jsr:@std/http/file-server'
Deno.serve(req => serveDir(req, { fsRoot: './web' }))
// should ensure that all website files can just be stored in /web