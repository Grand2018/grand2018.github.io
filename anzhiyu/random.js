var posts=["2025/01/16/cloudflare R2/","2025/01/08/openclash/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };