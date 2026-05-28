import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

let bandwidth = 80;
let quality = "1080p";
let status = "Healthy";

setInterval(() => {
    bandwidth = Math.floor(Math.random() * 100);

    if (bandwidth > 70) {
        quality = "1080p";
        status = "Healthy";
    } else if (bandwidth > 30) {
        quality = "720p";
        status = "Stable";
    } else {
        quality = "480p";
        status = "Buffering Risk";
    }

    console.log({ bandwidth, quality, status });
}, 2000);

app.get("/", (req, res) => {
    res.render("dashboard", {
        bandwidth: 80,
        quality: "1080p",
        status: "Healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});