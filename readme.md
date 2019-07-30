# paths-exist

![CI status](https://travis-ci.org/servexyz/paths-exist.svg?branch=master)

## FAQ

<details><summary>Why</summary>
Sindre already has a small-bundled version for path-checking <a href="https://www.npmjs.com/package/path-exists">path-exists</a>. I wanted an API that was overloaded with the ability to check for an array of paths. While it would be quite simple to implement a factory, I ended up needing this functionality across a few different projects in a week and decided to abstract it.
</details>

<details><summary>How</summary>
File checks are done using <code>fs.access</code> with the default constant <code>fs.constants.F_OK</code>. In the future, will allow overloading of this constant.

<h3><a href="https://nodejs.org/api/fs.html#fs_file_access_constants">File Access Constant</a>: fs.constants.F_OK</h3>
<p>
"Flag indicating that the file is visible to the calling process. This is useful for determining if a file exists, but says nothing about rwx permissions. Default if no mode is specified."
</p>
</details>

## Getting Started

#### Install

```sh
npm install paths-exist
```

#### Add to source

```js
import { pathsExist } from 'paths-exist'
```

## API

<details><summary><code>pathsExist(&lt;String&gt; pathToCheck, &lt;fs.constants&gt; eFlag)</code> - <b>Async</b></summary>

<hr />
<b>Where</b>

<ul>
<li><code>pathToCheck</code> is a single path string you want to check.</li>
<li><code>eFlag</code> is an optional param where you can specify the expected file mode; F_OK is the default.</li>
</ul>

<b>Example</b>

<code style="display:block">import { R_OK, W_OK, F_OK, pathsExist } from "paths-exist"

  await pathsExist() // --> null (because path param is empty)

  await pathsExist("/real/file/path") // --> true

  await pathsExist("/real/file/path", F_OK) // --> true

  await pathsExist("/fake/file/path", F_OK) // --> false

  await pathsExist("/readable/path", R_OK) // --> true

  await pathsExist("/writeable/path", W_OK) // --> true
</code>

<hr />
</details>

<details><summary><code>pathsExist(&lt;Array&gt; pathToCheck, &lt;fs.constants&gt; eFlag)</code> - <b>Async</b></summary>

<hr />
<b>Where</b>

<ul>
<li><code>pathToCheck</code> is an array of path strings you want to check.</li>
<li><code>eFlag</code> is an optional param where you can specify the expected file mode; F_OK is the default.</li>
</ul>

<b>Example</b>

<code style="display:block"> import { R_OK, W_OK, F_OK, pathsExist } from "paths-exist"

  let realPaths = ["real/path", "other/real/path"];

  let fakePaths = ["fake/path", "other/fake/path"];

  let mixedPaths = ["real/path", "fake/path"];


  await pathsExist() // --> null (because path param is empty)

  await pathsExist(realPaths)  // --> true

  await pathsExist(fakePaths) // --> false

  await pathsExist(mixedPaths) // --> false
</code>

<hr />
</details>


#### fs.constants
| Name | Description | 
|:-----|:------------|
| `F_OK` | file is accessible | 
| `R_OK` | file is readable | 
| `W_OK` | file is writable | 
