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

# Design system components

## Carousel

Carousel component is named `rb-carousel` and is used along with `rb-carousel-item` components like this:
```
<rb-carousel>
	<rb-carousel-item></rb-carousel-item>
	<rb-carousel-item></rb-carousel-item>
	...
	<rb-carousel-item></rb-carousel-item>
</rb-carousel>
```

### `rb-carousel` props

- `size` - determines the size of the carousel component.
  - Optional.
  - Available values: `small`, `medium`, `large`.
  - Default value: `medium`.
- `slide-interval-time` - the time period at which the slides should auto-switch.
  - Optional (the carousel will not auto-switch if value is not provided).

### `rb-carousel-item` props

- `image-url` - direct URL to the image that should be displayed.
  - Required.
- `image-alt` - text that is displayed as image's alt.
  - Optional.
