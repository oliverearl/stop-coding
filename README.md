!['No Coding!'](./publicity/stop-coding-1400x560.png)

## Introduction

Does the word 'coding' bother you as much as it bothers me? With this Chrome plugin, you can automatically replace it with the word 'programming' instead.

You can download the browser extension here:
- [Google Chrome Web Store](https://chrome.google.com/webstore/detail/stop-coding/jhbaiepgbgcfkackgplaopofiiidkpil)
- Firefox Marketplace - *pending approval!*

Upcoming functionaliy is planned, including:
- Custom word replacements
- Drastic code improvements (time permitting)
- A German language translation

## Installation from Source

***tl;dr** Clone the repo, `npm install`, `npm run build`, and add the `dist` folder to your browser.*

## Detailed Instructions

- Clone the Git repository using `git clone` and the link provided, or just download and uncompress the .zip archive.
- You will need [**Node.js** and **npm**](https://www.nodejs.org) to download software depencencies and run the compiler. Grab those if you haven't already.
- Open a terminal window in the directory of the projcet and run `npm run build` to fire up Webpack. This will minify code and markdown, compile styling, and relocate files as necessary. You'll end up with a `dist` folder upon completion.
- **In Google Chrome / Chromium**, this can be run by navigating to the Extensions page (chrome://extensions), enabling *Developer Mode* in the top-right of the interface, and clicking the *Load unpacked* button. Navigate to the aforementioned `dist` folder and click on any file. This will load the extension.
- **In Firefox Developer Edition**, open the Debugging page (about:debugging), click on the *This Firefox* tab on the left side, click the *Load Temporary Add-on* button, and select a file in the `dist` folder that you just compiled. This will load the addon into Firefox.

From here, you can run `npm run build` to fire up Webpack. By default, it will move images from the images folder, compile SCSS and minify all available source code / markup.

If you want to run it in Chrome / Chromium, activate *Developer Mode* and open the unpacked `dist` directory to add the plugin to your browser.

## Contributing
Contributions and translations are more than welcome and really appreciated. Please ensure you've read the [Code of Conduct](./CODE_OF_CONDUCT.md) and kindly drop a pull request!

## License

Unlicensed. Do whatever you want with it! You're free to contribute to this project, fork it, steal it, make it half decent, whatever. It's completely libre.

## Support
I'm a grad student with little funds. If you really like this extension, by all means please consider buying me a [coffee](https://www.buymeacoffee.com/oliverearl). Thank you!
