const port = '7000';
const host = '127.0.0.1';
const srcDir = 'src';
const distDir = 'public';


const proxy = {
  '/api': {
    target: 'http://dev.app.konget.dev.ktsstudio.ru/api',
    pathRewrite: { '^/api': '' },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Host', 'dev.app.konget.dev.ktsstudio.ru');
    },
  },
  '/media': {
    target: 'http://dev.app.konget.dev.ktsstudio.ru/media',
    pathRewrite: { '^/media': '' },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Host', 'dev.app.konget.dev.ktsstudio.ru');
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