# icon-library
Icon library for use in LDaCA projects

# How to Use
1. Ensure you have NPM installed
2. Navigate to your project root
3. Run `npm i manku_icons`

# Using the Icon Library within a Vue Project
## You can view [App.vue](https://github.com/Language-Research-Technology/icon-library/blob/main/App.vue) and [Icons.vue](https://github.com/Language-Research-Technology/icon-library/blob/main/Icons.vue) for an example of implementation.
1. Navigate to the root of your Vue project
2. Install the [vite svg loader](https://www.npmjs.com/package/vite-svg-loader) and follow the Setup process
3. Within your vue project, navigate to your assets folder
4. Install the icon library by running `npm i ldaca_icons` in the terminal
5. Install the Icon component at the top of the App.vue file?
6. 
7. Create an Icon component with a name property that equals 'the name of the icon'


# Manipulating the icons within a Vue Project
- The styling of the icons can be changed either in a css class that can be applied to the Vue component or the styling can be directly applied to the component. 
- The color of an icon can be changed using `fill: ;` e.g. `fill: red;`
- The size of an icon can be changed using `width: ;` and `height: ;` values, e.g. `width: 100px;`

# Adding an icon to the package
1. Add icon to the repository `packages\svgs\assets\icons\`
2. Optimize and generate the Icon by running command line
3. Preview the icon in the documentation that automatically generated
4. If they are happy with the new/modified icon, they can create a merge request to the main branch to be published in the npm package

# How to Update the Package
1. Navigate to the root directory
2. Increase the "version" in package.json
3. Add changes to git, commit, pull and push to main
4. Run `npm publish`