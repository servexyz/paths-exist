import fs from "fs-extra";
//TODO: Create promisified version of fs instead of importing fs-extra
export async function pathsExist(arrPathsObj) {
  if (typeof arrPathsObj === undefined)
    throw new Error("arrPathsObj was undefined");
  if (Array.isArray(arrPathsObj)) {
    let paths;
    try {
      paths = arrPathsObj.map(async pathToCheck => {
        await fs.access(pathToCheck, fs.constants.F_OK);
        return pathToCheck;
      });
    } catch (err) {
      let errString = `${pathToCheck} was not accessible.\n${err}`;
      throw new Error(errString);
    }
    if (typeof paths !== undefined) {
      let awaitedPaths = [];
      for await (let p of paths) {
        awaitedPaths.push(p);
      }
      return awaitedPaths;
    } else {
      console.warn("Paths were undefined. Returning un-awaited paths");
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
