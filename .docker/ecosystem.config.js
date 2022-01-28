module.exports = {
  apps: [
    {
      name: 'video-beta.tvonenews.com',
      port: 4444,
      // exec_mode: 'cluster',
      instances: '1',
      cwd: '/opt/www/tvonenews-frontend',
      script: './node_modules/nuxt/bin/nuxt.js',
      max_memory_restart: '800M',
      exp_backoff_restart_delay: 100,
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
      error_file: '/var/log/pm2-error.log',
      out_file: '/var/log/pm2-out.log',
      log_file: '/var/log/pm2-combined.log',
    },
  ],
};
