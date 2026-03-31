/** @type {import('next').NextConfig} */
// #region agent log
fetch('http://127.0.0.1:7710/ingest/ad6744e7-9db0-45c9-a5cf-f861a5ebc74f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36abe8'},body:JSON.stringify({sessionId:'36abe8',runId:'pre-fix',hypothesisId:'H3',location:'next.config.js:2',message:'next config loaded for build',data:{nodeEnv:process.env.NODE_ENV ?? null,ci:process.env.CI ?? null},timestamp:Date.now()})}).catch(()=>{});
// #endregion
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig