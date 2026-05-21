# YukGrow Watch Atelier

Static landing page untuk marketplace jam tangan mewah autentik.

## Stack
- HTML + Tailwind CSS (CDN)
- Vanilla JS (interaction layer)
- Nginx (production)
- Cormorant Garamond + Inter (Google Fonts)

## Pages
- `/` — Homepage (hero, featured collection, authentication, services, testimonial, CTA)
- `/collection` — Product grid + filters (brand, harga, kondisi, kelengkapan, size, movement)
- `/product` — Product detail (gallery, specs, authentication report, includes, related)
- `/about` — Heritage, values, 47-point authentication process, team
- `/contact` — Contact form, methods (WA/email/atelier), FAQ

## Local Dev
```bash
cd public && python3 -m http.server 8765
# http://localhost:8765
```

## Production (Docker)
```bash
docker build -t watch-yukgrow .
docker run -p 80:80 watch-yukgrow
```

## Deployment
Deployed to Dokploy → `watch.yukgrow.com`
