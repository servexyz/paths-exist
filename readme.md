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

<details><summary><code>pathsExist(szPathToCheck)</code> - <b>Async</b></summary>
---
<b>Where</b>

<ul>
<li><em>szPathToCheck</em> is a string. </li>
</ul>

<b>Examples</b>
<code style="block">


</code>


---
</details>

<details><summary><code>pathsExist(arrPathToCheck) - <b>Async</b></summary>
---

---
</details>

