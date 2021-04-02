const core = require("@actions/core");
const fs = require("fs");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);

  console.log("process.env", process.env);
  const inputVariables = core.getInput("variables");

  const variables = inputVariables
    .split(",")
    .map((v) => v.trim())
    .map((v) => `${v}=${process.env[v]}`)
    .join("\n");

  fs.writeFileSync(".env", variables, { encoding: "utf-8" });
  console.log(fs.statSync(".env"));
} catch (error) {
  core.setFailed(error.message);
}
