import {promises as fs} from "fs"
import * as path from 'path'

export const listFileAsync = async (dirPath:string) : Promise<string[]> =>{
    try {
        const files= await fs.readdir(dirPath);
        return files.map(file=>path.join(dirPath, file))
    } catch (error) {
        console.log("erreur lors de la lecture du rep", error);
        return []
    }
}