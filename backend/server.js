const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Gene cloning steps
const cloneSteps = [
  {
    title: "Gene Mapping",
    description: "Identify the gene of interest within the DNA sequence."
  },
  {
    title: "DNA Extraction",
    description: "Extract DNA from the organism."
  },
  {
    title: "Restriction Digestion",
    description: "Cut DNA using restriction enzymes."
  },
  {
    title: "Vector Preparation",
    description: "Prepare plasmid vector."
  },
  {
    title: "Ligation",
    description: "Insert gene into vector using ligase."
  },
  {
    title: "Transformation",
    description: "Insert recombinant DNA into host cell."
  },
  {
    title: "Selection",
    description: "Select successfully cloned cells."
  }
];

// API route
app.get("/api/clone", (req, res) => {
  res.json(cloneSteps);
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
