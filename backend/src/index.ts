export default {
	async fetch(request: Request): Promise<Response> {
	  const cacheUrl = new URL(request.url);
	  cacheUrl.search = ''; // Ignore query parameters
  
	  const cache = caches.default;
	  let response = await cache.match(cacheUrl);
  
	  if (!response) {
		response = new Response("<h1>Hello from Cloudflare with Full Page Caching!</h1>", {
		  headers: {
			"Content-Type": "text/html",
			"Cache-Control": "public, max-age=86400, s-maxage=86400, immutable",  // 1-day caching
			"CF-Cache-Status": "HIT" // Help track cache status
		  },
		});
  
		await cache.put(cacheUrl.toString(), response.clone());
	  }
  
	  return response;
	},
  };
  
  