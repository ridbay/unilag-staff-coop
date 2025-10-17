module.exports = {
  apps: [
    {
      script: "staff-coop",
    },
  ],

  deploy: {
    production: {
      key: "key.pem",
      user: "root",
      host: "196.45.48.166",
      ref: "origin/master",
      repo: "https://github.com/chibuike-19/unilag-staff-coop.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
