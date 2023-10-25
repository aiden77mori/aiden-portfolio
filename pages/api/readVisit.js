import fs from "fs";

export default function handler(req, res) {
  try {
    // Read the JSON file and return the data
    const jsonData = JSON.parse(fs.readFileSync("visit.json", "utf-8"));
    res.status(200).json({ message: "success", data: jsonData });
  } catch (err) {
    const data = {
      visit: 0,
    };
    res.status(200).json({ message: "failed", data });
  }
}
