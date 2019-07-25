const log = console.log;
import fs from "fs";
import { printMirror } from "tacker";
export async function pathsExist(arrPathsObj) {
  if (typeof arrPathsObj === undefined)
    throw new Error("arrPathsObj was undefined");
  if (Array.isArray(arrPathsObj)) {
    return await arrPathsObj.map(async pathToCheck => {
      log(`insideeee`);
      try {
        let res = await fs.access(pathToCheck);

        log(`insideeee 1A`);
        printMirror({ res }, "magenta", "grey");
        return res;
      } catch (err) {
        // let errString = `${pathToCheck} in ${JSON.stringify(
        //   arrPathsObj,
        //   null,
        //   2
        // )} was not accessible.\n${err}`;
        let errString = `${pathToCheck} was not accessible.\n${err}`;
        throw new Error(errString);
      }
    });
  } else {
    try {
      log(`insideeee2`);
      let res = await fs.access(arrPathsObj);

      log(`insideeee2 2A`);
      printMirror({ res }, "yellow", "grey");
      return res;
    } catch (err) {
      let errString = `${arrPathsObj} was not accessible.\n${err}`;
      throw new Error(errString);
    }
  }
}

// export async function pathsExistSync(
//   arrPathsObj,
//   szPreErrorMessage = "Path did not exist"
// ) {

//   if (Array.isArray(arrPathsObj)) {
//     let arrFilePaths = arrPathsObj.map(mTarget => {
//       if (typeof mTarget == "object") {
//         // * handle array of objects
//         // * (ie. default case; used for testing watcherConfig's "targets" array)

//         return Object.values(mTarget).map(pathToCheck => {
//           return pathToCheck;
//         });
//       } else {
//         // * handle array of strings
//         // * (ie. manually defined arrays with file paths)

//         return mTarget;
//       }
//     });
//     for (let pathToCheck of arrFilePaths) {
//       // ? Now iterate over the flattened map of paths (all should be strings)
//       try {
//         await fs.access(pathToCheck);
//       } catch (err) {
//         /*
//           TODO: Figure out why this is being thrown
//           ? Array of paths failed ----------------------------------------------------------- Path did not exist
//           ? TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be one of type string, Buffer, or URL. Received type object
//         */
//         log(
//           `${chalk.red("Array of paths failed")} ${printLine(
//             "red"
//           )} ${chalk.red(szPreErrorMessage)} \n ${chalk.grey(err)}`
//         );
//       }
//     }
//   } else if (typeof arrPathsObj == "string") {
//     // ? handle checking path of single string
//     try {
//       await fs.access(arrPathsObj);
//     } catch (err) {
//       printLine("red");
//       //TODO: Add a getLine() utility so that I can include in the middle of a log without needing to log inside of a log (which doesn't process stdout in proper order)
//       log(
//         `${chalk.red("Single string failed")} \n${chalk.red(
//           szPreErrorMessage
//         )} \n ${chalk.grey(err)}`
//       );
//       printLine("red");
//     }
//   }
// }
