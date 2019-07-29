import fs from "fs-extra";
//TODO: Add overload to allow specifying the file flag; currently using default F_OK. Explicitly stated as reminder to myself to allow overloading
//TODO: Consider creating variant which returns paths
//TODO: Consider creating variant which throws instead of returning false

export async function pathsExist(mPaths) {
  if (typeof mPaths === "undefined") return null;
  if (Array.isArray(mPaths)) {
    try {
      for await (let pathToCheck of mPaths) {
        await fs.access(pathToCheck, fs.constants.F_OK);
        return true;
      }
    } catch (err) {
      return false;
    }
  } else {
    try {
      await fs.access(mPaths, fs.constants.F_OK);
      return true;
    } catch (err) {
      return false;
    }
  }
}
