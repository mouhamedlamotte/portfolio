import {promises as fs} from "fs"
import * as path from 'path'
import { kdebug } from "./kdebug";

export const listFileAsync = async (dirPath:string) : Promise<string[]> =>{
    try {
        const files= await fs.readdir(dirPath);
        return files.map(file=>path.join(dirPath, file))
    } catch (error) {
        kdebug("erreur lors de la lecture du rep", error);
        return []
    }
}