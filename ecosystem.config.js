module.exports = {
  apps: [
    {
      name: "staff-coop",
      cwd: "/home/ubuntu/source",
      script: "npm",
      args: "run start -- -p 3000",
      interpreter: "/home/ubuntu/.nvm/versions/node/v18.20.4/bin/node",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],

  deploy: {
    production: {
      key: "key.pem",
      user: "root",
      host: "196.45.48.166",
      ref: "origin/master",
      repo: "https://github.com/ridbay/unilag-staff-coop.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && nvm use 18.20.4 && cd /home/ubuntu/source && (npm ci || npm install) && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
