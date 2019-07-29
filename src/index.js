import fs from "fs-extra";

export async function pathsExist(mPaths, eFlag = fs.F_OK) {
  if (typeof mPaths === "undefined") return null;
  if (Array.isArray(mPaths)) {
    try {
      for await (let pathToCheck of mPaths) {
        await fs.access(pathToCheck, eFlag);
        return true;
      }
    } catch (err) {
      return false;
    }
  } else {
    try {
      await fs.access(mPaths, eFlag);
      return true;
    } catch (err) {
      return false;
    }
  }
}

export const { F_OK, R_OK, W_OK } = fs;
