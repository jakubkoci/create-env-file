const core = require("@actions/core");
const fs = require("fs");

function main() {
  try {
    const envKeys = core.getInput("variables", { required: true });
    const envFileName = core.getInput("env_type", { required: true });
    const envFileContent = createEnvFileContent(envKeys, process.env);
    
    core.info("envFileName", envFileName)
    core.info("envFileName value", process.env[envFileName])
    
    fs.writeFileSync(process.env[envFileName], envFileContent, { encoding: "utf-8" });
    fs.accessSync(process.env[envFileName]);
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
