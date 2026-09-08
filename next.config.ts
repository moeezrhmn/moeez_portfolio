import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  /**
   * node-postgres opens real TCP sockets and must not be bundled into the
   * server build. Keeping it external also means it resolves correctly inside
   * the standalone output that deploy.sh ships.
   */
  serverExternalPackages: ["pg"],

  /**
   * /projects duplicated /work, and /blog was an empty placeholder. Both are
   * gone; these keep any existing links and indexed URLs alive.
   */
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/blog", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
