module.exports = {
  apps: [{
    name: 'joaopanoias-cv-tailotek',  // A unique name to identify your application
    script: 'npm',
    args: 'start',
    cwd: '/var/www/tailotek.dev/joaopanoias-cv',  // The directory where your application is located
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: 'joaopanoias-cv.tailotek.dev'
    },
    autorestart: true,  // Automatically restart if the application crashes
    watch: false,       // Don't watch for file changes in production
    max_memory_restart: '1G'  // Restart if memory exceeds 1GB
  }]
}
