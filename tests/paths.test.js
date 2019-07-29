const log = console.log;
import path from "path";
import test from "ava";
import { printMirror } from "tacker";
import { pathsExist, F_OK, R_OK, W_OK } from "../src/index";

test("pathsExist(undefined) :: returns null", async t => {
  t.is(await pathsExist(), null);
});
test("pathsExist(string) :: package.json exists - via relative path", async t => {
  let realPath = "package.json";
  t.true(await pathsExist(realPath));
});
test("pathsExist(string) :: package.json exists - via relative path - F_OK", async t => {
  let realPath = "package.json";
  t.true(await pathsExist(realPath, F_OK));
});

test("pathsExist(string) :: package.json exists - via absolute path", async t => {
  let realPath = path.join(process.cwd(), "package.json");
  t.true(await pathsExist(realPath));
});

test("pathsExist(array) :: package.json and readme.md both exist - via relative paths", async t => {
  let realPaths = ["package.json", "readme.md"];
  t.true(await pathsExist(realPaths));
});
test("pathsExist(array) :: package.json and readme.md both exist - via absolute paths", async t => {
  let absPathPkg = path.join(process.cwd(), "package.json");
  let absPathReadme = path.join(process.cwd(), "readme.md");
  let realPaths = [absPathPkg, absPathReadme];
  t.true(await pathsExist(realPaths));
});

test("pathsExist(string) :: fake path returns false", async t => {
  let fakePath = "this/path/does/not/exist";
  t.false(await pathsExist(fakePath));
});
test("pathsExist(array) :: fake paths returns false", async t => {
  let fakePaths = [
    "this/path/does/not/exist",
    "other/path/also/does/not/exist"
  ];
  t.false(await pathsExist(fakePaths));
});

const samples = path.join(process.cwd(), "samples");

const readYES = path.join(samples, "readYES");
const writeNO = path.join(samples, "writeNO");
const writeYES = path.join(samples, "writeYES");

test("pathsExist(string, F_OK) :: file is accessible", async t => {
  t.true(await pathsExist(readYES, F_OK));
});

/*
* To enable this test temporarily:
* 1. create a file named "readNO" in samples directory
* 2. set chmod to 000 ($ > chmod 000 readNO)
* 3. uncomment lines below

* To enable this test permanently
TODO: Add empty readNO file
TODO: Add test.before & test.after to toggle chmod from 000 to 600
? This will allow you to interface with git without getting a permissions error
*/

// const readNO = path.join(samples, "readNO");
// test("pathsExist(string, R_OK) :: file is not readable", async t => {
//   t.false(await pathsExist(readNO, R_OK));
// });

test("pathsExist(string, R_OK) :: file is readable", async t => {
  t.true(await pathsExist(readYES, R_OK));
});

test("pathsExist(string, W_OK) :: file is not writable", async t => {
  t.false(await pathsExist(writeNO, W_OK));
});

test("pathsExist(string, W_OK) :: file is writable", async t => {
  t.true(await pathsExist(writeYES, W_OK));
});

test("pathsExist(string, R_OK | W_OK) :: file is readable or writable", async t => {
  t.true(await pathsExist(writeYES, R_OK | W_OK));
});
