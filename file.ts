// Read File Content
const file = Bun.file(".env");
const content = await file.text();
console.log(content);

// Write File Content
await Bun.write(".env.test", content);
