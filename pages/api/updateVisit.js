import fs from "fs";

export default function updateVisit(req, res) {
  try {
    if (req.method === "POST") {
      const rec = req.body;
      const data = {
        visit: rec.updatedCount,
      };
      fs.writeFileSync("visit.json", JSON.stringify(data));
      res.status(200).json({ message: "success", data: data.visit });
    }
  } catch (err) {
    res.status(500).json({ message: "failed", data: err.message });
  }
}
