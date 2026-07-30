import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/galerie",
        destination: "/exemples",
        statusCode: 301,
      },
      {
        source: "/presskit/artiste",
        destination: "/artiste",
        statusCode: 301,
      },
      {
        source: "/presskit/artiste-peintre",
        destination: "/artiste",
        statusCode: 301,
      },
      {
        source: "/presskit/chanteuse",
        destination: "/artiste",
        statusCode: 301,
      },
      {
        source: "/presskit/chanteur-rap",
        destination: "/artiste",
        statusCode: 301,
      },
      {
        source: "/presskit/chanteur",
        destination: "/artiste",
        statusCode: 301,
      },
      {
        source: "/presskit/dj",
        destination: "/dj",
        statusCode: 301,
      },
      {
        source: "/presskit/danseur",
        destination: "/danseur",
        statusCode: 301,
      },
      {
        source: "/presskit/photographe",
        destination: "/photographe",
        statusCode: 301,
      },
      {
        source: "/presskit/coach-sportif",
        destination: "/coach-sportif",
        statusCode: 301,
      },
      {
        source: "/presskit/make-up-artist",
        destination: "/make-up-artist",
        statusCode: 301,
      },
      {
        source: "/presskit/organisateur",
        destination: "/organisateur",
        statusCode: 301,
      },
      {
        source: "/presskit/organisateur-de-soiree",
        destination: "/organisateur",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
