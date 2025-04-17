/** next.config.js */
const nextConfig = {
  // 1. Generación estática compatible con App Router
  output: 'export',

  // 2. Prefijo de ruta y de activos para GitHub Pages
  basePath: '/n8ntestesite',
  assetPrefix: '/n8ntestesite/',

  // 3. Generar carpetas con index.html para cada ruta anidada
  trailingSlash: true,

  // 4. Opcional: deshabilitar optimizaciones de imágenes si no usas Image Optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
