module.exports = {
  apps: [
    {
      name: "proxy",
      script: './index.js',
      instances: 1,
      env_production: {
        NODE_ENV: "production",
        PORT: 4000,
      },
    },
  ],
};
