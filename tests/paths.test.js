const log = console.log;
import test from "ava";
import { printMirror } from "tacker";
import { pathsExist } from "../src/index";

test("pathsExist :: package.json exists", async t => {
  let path = "package.json";
  let pkg = await pathsExist(path);
  printMirror({ pkg }, "magenta", "grey");
  t.pass();
});
test("pathsExist :: package.json and readme.md both exist", async t => {
  let paths = ["package.json", "readme.md"];
  let pkgReadme = await pathsExist(paths);
  printMirror({ pkgReadme }, "magenta", "grey");
  t.truthy(pkgReadme);
});

test("pathsExist :: Successfully throws because path does not exist", async t => {
  let path = "this/path/does/not/exist";
  await t.throwsAsync(async () => {
    await pathsExist(path);
  });
});
test.skip("pathsExist :: Successfully throws because multiple paths do not exist", async t => {
  let paths = ["this/path/does/not/exist", "other/path/also/does/not/exist"];
  await t.throwsAsync(async () => {
    await pathsExist(paths);
  });
});
test("pathsExist :: Successfully throws because no parameter provided", async t => {
  await t.throwsAsync(async () => {
    await pathsExist();
  });
});
