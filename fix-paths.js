import fs from "fs/promises";
import path from "path";

async function fixPaths() {
    try {
        const indexPath = "dist/index.html";
        console.log("Fixing the absolute paths script is running");
        const data = await fs.readFile(indexPath, "utf8");

        const updatedData = data.replace(/\/assets/g, "assets");
        console.log("DONE !!!");

        await fs.writeFile(indexPath, updatedData, "utf8");
        console.log(`Fixed paths in ${indexPath}`);

        const assetsDir = "dist/assets";
        console.log("Fixing the absolute paths in asset files...");
        const assetFiles = await fs.readdir(assetsDir);
        for (const file of assetFiles) {
            const filePath = path.join(assetsDir, file);
            const data = await fs.readFile(filePath, "utf8");
            const updatedData = data.replace(/\/assets/g, "assets");
            await fs.writeFile(filePath, updatedData, "utf8");
            console.log(`Fixed paths in ${filePath}`);
        }

        console.log("All paths fixed successfully!");
    } catch (err) {
        console.error("Error:", err);
        throw err;
    }
}

fixPaths();
