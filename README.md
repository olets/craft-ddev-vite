# craft-ddev-vite

A demonstration of [Craft CMS](https://craftcms.com/) on [Vite](https://vitejs.dev/) in [DDEV](https://ddev.com/), with [Tailwind CSS](https://tailwindcss.com/) and [Stimulus](https://stimulus.hotwired.dev/).

## Initial setup

Install DDEV: https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/

## Development

1. Start DDEV, install Composer and npm dependencies, and start Vite: `ddev start`
1. After adding new asset files to `src/public`, build Vite: in a separate terminal from where Vite is running, `ddev npm run build`
1. When done, stop DDEV: either `ddev stop` to stop this project, or `ddev poweroff` to shut down DDEV entirely.

## Building

1. Start DDEV: `ddev start`
1. Build Vite: `ddev npm run build`
1. When done, stop DDEV: either `ddev stop` to stop this project, or `ddev poweroff` to shut down DDEV entirely.