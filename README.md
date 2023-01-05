# craft-ddev-vite

A demonstration of [Craft CMS](https://craftcms.com/) on [Vite](https://vitejs.dev/) in [DDEV](https://ddev.com/), with [Tailwind CSS](https://tailwindcss.com/) and [Stimulus](https://stimulus.hotwired.dev/).

## Initial setup

Install DDEV: https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/

## Development

1. Start DDEV: `ddev start`
1. The first time you run the app, and thereafter if dependencies have changed: `ddev npm install`
1. Start Vite: `ddev npm run dev`
1. After adding new asset files to `src/public`, restart Vite: <kbd>Ctrl</kbd><kbd>c</kbd> then `ddev npm run dev`
1. When done, stop DDEV: either `ddev stop` to stop this project, or `ddev poweroff` to shut down DDEV entirely.

## Building

1. Start DDEV: `ddev start`
1. Build Vite: `ddev npm run build`
1. When done, stop DDEV: either `ddev stop` to stop this project, or `ddev poweroff` to shut down DDEV entirely.