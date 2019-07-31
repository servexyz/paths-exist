# paths-exist

![CI status](https://travis-ci.org/servexyz/paths-exist.svg?branch=master)


## Getting Started

#### Install

```sh
npm install paths-exist -S
```

#### Add to source

```js
import { pathsExist } from 'paths-exist'
```

## API

<details>
<summary><b>pathsExist(&lt;String&gt; pathToCheck, &lt;fs.constants&gt; fsFlag)</b></summary>

<hr />
<b>Where</b>

<ul>
<li><code>pathToCheck</code> is a single path string you want to check.</li>
<li><code>fsFlag</code> is an optional param where you can specify the expected file mode; F_OK is the default.</li>
</ul>

</details>

```js
import { R_OK, W_OK, F_OK, pathsExist } from "paths-exist"

(async () => {
  await pathsExist();
  // --> return null (because path param is empty)
  await pathsExist("/real/file/path");
  // --> return true
  await pathsExist("/real/file/path", F_OK);
  // --> return true
  await pathsExist("/fake/file/path", F_OK);
  // --> return false
  await pathsExist("/readable/path", R_OK);
  // --> return true
  await pathsExist("/writeable/path", W_OK);
  // --> return true
});
```

---

<details>
<summary><b>pathsExist(&lt;Array&gt; pathsToCheck, &lt;fs.constants&gt; fsFlag)</b></summary>

<hr />
<b>Where</b>

<ul>
<li><code>pathsToCheck</code> is an array of path strings you want to check.</li>
<li><code>fsFlag</code> is an optional param where you can specify the expected file mode; F_OK is the default.</li>
</ul>
</details>

```js
import { R_OK, W_OK, F_OK, pathsExist } from "paths-exist"

(async () => {
  await pathsExist();
  // --> return null (because path param is empty)
  await pathsExist(["readable/path", "second/readable/path"]);
  // --> return true
  await pathsExist(["readable/path", "second/readable/path"], F_OK);
  // --> return true
  await pathsExist(["readable/path", "second/readable/path"], R_OK);
  // --> return true
  await pathsExist(["unwritable/path", "other/unwritable/path"], W_OK);
  // --> return false
  await pathsExist(["real/path", "fake/path"]);
  // --> return false
});
```
---

## FAQ

<details><summary>Why</summary>
Sindre already has a small-bundled version for path-checking: <a href="https://www.npmjs.com/package/path-exists">path-exists</a>. I wanted an API that was overloaded with the ability to check for an array of paths. While it would be quite simple to implement a factory, I ended up needing this functionality across a few different projects in a week and decided to abstract it.
</details>

<details><summary>How</summary>
File checks are done using <code>fs.access</code> with the default constant <code>fs.constants.F_OK</code>. You can overload this file constant with <code>F_OK</code>, <code>W_OK</code> or <code>R_OK</code> (as well as pairings eg. <code>W_OK | R_OK</code>).

You can read more about the file constants here: <a href="https://nodejs.org/api/fs.html#fs_file_access_constants">File Access Constant</a>: fs.constants (F_OK, W_OK, R_OK)
</details>


#### fs.constants

| Name   | Description        |
|:-------|:-------------------|
| `F_OK` | file is accessible |
| `R_OK` | file is readable   |
| `W_OK` | file is writable   |
