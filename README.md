# useragent-faker

## Up to date simple useragent faker

`useragent-faker` is an NPM package that gives you a real useragent string for your needs.
Be it for web scraping or other automation jobs.

### Installation

leaked requires [Node.js](https://nodejs.org/) v8+ to run.

```sh
$ npm install useragent-faker
```

### Supported browsers

![](https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_chrome-512.png =64x64) ![](https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_edge-512.png =64x64) ![](https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_firefox-512.png =64x64) ![](https://cdn1.iconfinder.com/data/icons/logotypes/32/internet-explorer-512.png =64x64) ![](https://cdn1.iconfinder.com/data/icons/logotypes/32/opera-512.png =64x64)![](https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_safari-512.png =64x64)

### Usage

```javascript
const ua = require('useragent-faker');

console.log(ua.random());
>>> Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10

console.log(ua.chrome());
>>> Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1623.0 Safari/537.36

console.log(ua.edge());
>>> Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36 Edge/14.14359

console.log(ua.firefox());
>>> Mozilla/5.0 (X11; Linux i686; rv:30.0) Gecko/20100101 Firefox/30.0

console.log(ua.ie());
>>> Mozilla/5.0 (IE 11.0; Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C; rv:11.0) like Gecko

console.log(ua.opera());
>>> Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36 OPR/32.0.1948.25

console.log(ua.safari());
>>> Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13) AppleWebKit/603.1.13 (KHTML, like Gecko) Version/10.1 Safari/603.1.13
```

### Todos

- Add more browsers
- Updates

## License

MIT

**Free Software, Yes!**
