const log = console.log;
import fs from "fs-extra";
import chalk from "chalk";
import { printMirror } from "tacker";

export async function pathsExist(arrPathsObj) {
  if (typeof arrPathsObj === undefined)
    throw new Error("arrPathsObj was undefined");
  let paths;
  if (Array.isArray(arrPathsObj)) {
    // try {
    paths = arrPathsObj.map(async pathToCheck => {
      await fs.access(pathToCheck, fs.constants.F_OK).catch(err => {
        let errString = `${pathToCheck} was not accessible.\n${err}`;
        throw new Error(errString);
      });
      printMirror({ pathToCheck }, "magenta", "grey");
      return pathToCheck;
    });
    // } catch (err) {
    //   let errString = `${pathToCheck} was not accessible.\n${err}`;
    //   throw new Error(errString);
    // }
    if (typeof paths !== undefined) {
      let awaitedPaths = [];
      for await (let p of paths) {
        awaitedPaths.push(p);
      }
      return awaitedPaths;
    } else {
      console.warn(
        `${chalk.red("Paths were undefined. Returning un-awaited paths")}`
      );
      return paths;
    }
  } else {
    try {
      await fs.access(arrPathsObj);
      return arrPathsObj;
    } catch (err) {
      let errString = `${arrPathsObj} was not accessible.\n${err}`;
      throw new Error(errString);
    }
  }
}
