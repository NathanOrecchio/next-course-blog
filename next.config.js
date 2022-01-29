const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Admin_Nate",
        mongodb_password: "Orecchio9",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Admin_Nate",
      mongodb_password: "Orecchio9",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};
