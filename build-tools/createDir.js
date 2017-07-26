import fs from 'fs'
import { resolve, sep } from 'path'

export default function createDir(dirPath) {
    dirPath.split(sep).reduce((path, dir) => {
        if (!fs.existsSync(resolve(path, dir))) {
            fs.mkdirSync(resolve(path, dir))
        }

        return resolve(path, dir)
    }, sep)
}
