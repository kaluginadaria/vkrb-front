const port = '7000';
const host = '127.0.0.1';
const srcDir = 'src';
const distDir = 'public';


const proxy = {
  '/api': {
    target: 'http://127.0.0.1:8000/api',
    pathRewrite: { '^/api': '' },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Host', '127.0.0.1');
    },
  },
  '/media': {
    target: 'http://127.0.0.1:8000/media',
    pathRewrite: { '^/media': '' },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Host', '127.0.0.1');
    },
  }
};


export default {
  proxy,
  port,
  host,
  srcDir,
  distDir,
}