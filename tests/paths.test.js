import test from "ava";
import chalk from "chalk";
import { pathsExist } from "../src/index";

test("1 path does not exist", async t => {
  let path = "this/path/does/not/exist";
  await t.throwsAsync(async () => {
    await pathsExist(path);
  });
});
test("Multiple paths do not exist", async t => {
  let paths = ["this/path/does/not/exist", "this/path/also/does/not/exist"];
  await t.throwsAsync(pathsExist(paths));
});
test("throws", async t => {
  await t.throwsAsync(
    async () => {
      throw new TypeError("🦄");
    },
    { instanceOf: TypeError, message: "🦄" }
  );
});
// test("pathsExist", t => {});
//TODO: Consider adding a return value (or prom) so it can be caught inline
//TODO: Consider adding option to include printLine & printMirrors for success cases
//TODO: Convert below into unit test (should pass)
// let rightPath = [
//   {
//     dir: "sandbox/npm-starter-sample-module/src",
//     name: "npm-starter-sample-module"
//   }
// ];
// pathsExistSync(targets, "PTOWatcher failed to initialize properly <fs.access>");
//TODO: Convert below code into unit test (ie. should throw error)
// let wrongPathString = "foo"
// let wrongPathArray = [
//   {
//     foo: "bar"
//   }
// ];
// pathsExistSync(wrongPathArray, "PTOWatcher failed to initialize properly <fs.access>");
// pathsExistSync(wrongPathString, "PTOWatcher failed to initialize properly <fs.access>");
