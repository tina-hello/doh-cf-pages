# doh-cf-pages
A very minimalist DNS-over-HTTPS proxy on Cloudflare Pages.

Clone this repo on your own GitHub account, sign up for a free [Cloudlare Pages](https://pages.cloudflare.com) account, create a new project, connect to git, choose your cloned project and you're done. Use the address anywhere DoH is accepted (AdGuard, browsers secure DNS settings, YogaDNS, Intra, Nebulo etc).

Feel free to replace the `doh` variable inside [index.js](/functions/index.js) with [any DNS-over-HTTPS server you want](https://github.com/curl/curl/wiki/DNS-over-HTTPS). Confirmed to work with Cloudflare itself, Google, and NextDNS. The rarely supported [JSON API](https://developers.google.com/speed/public-dns/docs/doh/json) is available through the `dohjson` variable. Some providers use identical URL (Cloudlfare, NextDNS), some use `/resolve` instead of `/dns-query` for path (Google, AdGuard).

Why? In case ISPs start banning known DoH providers, you can use your own proxy. Even if they block pages.dev wholesale, you can use your own domain, either hosted on Cloudflare, or any provider with CNAME record, including free subdomains from [FreeDNS](https://freedns.afraid.org/) (free account must login once each 6 months to maintain subdomain). Daily request on free tier is limited to 100 thousands, should be enough for most personal use, or even a family.

This project is based on my [doh-cf-workers](https://github.com/tina-hello/doh-cf-workers), the difference is while you don't even need a GitHub account on the Workers version, custom domain must be hosted on Cloudflare.
