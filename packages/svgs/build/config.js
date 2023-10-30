import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../')
export default rootDir
export const icon = {
        // directory to get all icons
    input: ['assets/icons/**/*.svg'],
        // exclude icons to be build
    exclude: [],
        // output directory 
    output: path.resolve(rootDir, 'components/icons'),
        //  alert if the icon size exceed the value in bytes
    maxSize: 1000,
}