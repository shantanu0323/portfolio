import fs from 'fs/promises';

async function fixPaths() {
  try {
    const indexPath = 'dist/index.html';
    console.log("Fixing the absolute paths script is running");
    const data = await fs.readFile(indexPath, 'utf8');

    const updatedData = data.replace(/\/assets/g, 'assets');
    console.log("DONE !!!");

    await fs.writeFile(indexPath, updatedData, 'utf8');
    console.log(`Fixed paths in ${indexPath}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

fixPaths();