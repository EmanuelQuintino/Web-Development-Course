import fs from "fs";
import path from "path";
import { UPLOADS_FOLDER } from "./uploadConfigs";

export const diskStorage = {
  async deleteFile(file: string) {
    try {
      const filePath = path.resolve(UPLOADS_FOLDER, file);
      await fs.promises.stat(filePath);
      await fs.promises.unlink(filePath);
    } catch (error) {
      return;
    }
  },
};
