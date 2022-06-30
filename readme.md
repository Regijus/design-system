# Startup guide

Install the correct Node version (which is defined in `.nvmrc`). You can do so by using `n` package. You might need to use `sudo` to install the global package, depends on your account permissions.
```
npm install -g n
```
To install the correct version of Node, you need to execute `n auto`.
```
n auto
```
If you're missing permissions to execute `n auto`, you can also execute `sudo n auto` or give permissions for the package following this small guide: https://github.com/tj/n#installation.

After installing the correct Node version you're ready to install the project packages.
```
npm install
```

After installing the project packages you can start the project.
```
npm start
```