import { join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";

export default function handler(req, res) {
  // Path to the public directory
  const filePath = join(process.cwd(), "public", "assets", "imgs", "logos.zip");

  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Disposition", "attachment; filename=logos.zip");
  const readStream = createReadStream(filePath);
  readStream.pipe(res);
}
