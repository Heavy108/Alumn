// src/app/api/Alumniverification/route.js
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const { id, verification } = await req.json();

    const filePath = path.join(process.cwd(), "src/Js/AlumniData.js");
    let fileContent = fs.readFileSync(filePath, "utf-8");

    // Extract the array of objects from the file content
    let dataArray = fileContent.match(/\[.*\]/s)[0];
    dataArray = JSON.parse(dataArray.replace(/'/g, '"'));

    // Update the verification value
    const updatedData = dataArray.map((item) =>
      item._id.$oid === id ? { ...item, verification } : item
    );

    // Replace the array in the file content with the updated array
    const updatedContent = fileContent.replace(
      /\[.*\]/s,
      JSON.stringify(updatedData, null, 2)
    );

    fs.writeFileSync(filePath, updatedContent);

    return new Response(
      JSON.stringify({ message: "Verification updated successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "An error occurred", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
