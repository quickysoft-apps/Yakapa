## Available Scripts

In the project directory, you can run:

### `lerna bootstrap`

Install all dependencies for all packages.<br>
**_Do not run npm install_**

### `npm start`

Run start scripts in parallel for all packages

### `npm run clean`

Run `lerna clean` and remove the node_module folder at root.

Under windows, you'll need to set up the script-shell first<br>
`npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"`

**_Note you need to have [git for windows installed](https://git-scm.com/download/win)_**

### `lernaupdate`

- Update dependencies across packages: search for and select the dependency to upgrade.
- Add new dependencies across packages: enter the name of a dependency not already in your project.
- Deduplicate dependencies across packages: run the command with the `--dedupe` option
