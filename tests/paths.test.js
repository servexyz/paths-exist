const log = console.log;
import path from "path";
import test from "ava";
import { printMirror } from "tacker";
import { pathsExist } from "../src/index";

test("pathsExist(undefined) :: returns null", async t => {
  t.is(await pathsExist(), null);
});
test("pathsExist(string) :: package.json exists - via relative path", async t => {
  let realPath = "package.json";
  t.true(await pathsExist(realPath));
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
