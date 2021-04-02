const core = require("@actions/core");
const fs = require("fs");

function main() {
  try {
    const envKeys = core.getInput("variables", { required: true });
    const envFileContent = createEnvFileContent(envKeys, process.env);
    fs.writeFileSync(".env", envFileContent, { encoding: "utf-8" });
    fs.accessSync(".env");
  } catch (error) {
    core.setFailed(error.message);
  }
}

function createEnvFileContent(envKeys, env) {
  return envKeys
    .split(",")
    .map((v) => v.trim())
    .map((v) => `${v}=${env[v]}`)
    .join("\n");
}

main();
