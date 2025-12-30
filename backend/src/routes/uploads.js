const router = require("express").Router();
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const ACCOUNT_ID = process.env.CF_IMAGES_ACCOUNT_ID;
const ACCOUNT_HASH = process.env.CF_IMAGES_ACCOUNT_HASH;
const API_TOKEN = process.env.CF_IMAGES_API_TOKEN;

router.get("/image-direct", async (_req, res) => {
  if (!ACCOUNT_ID || !ACCOUNT_HASH || !API_TOKEN) {
    return res.status(500).json({
      message:
        "Cloudflare Images тохиргоо дутуу байна. CF_IMAGES_ACCOUNT_ID / CF_IMAGES_ACCOUNT_HASH / CF_IMAGES_API_TOKEN утгуудыг .env файлаас шалгана уу.",
    });
  }

  try {
    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v2/direct_upload`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      }
    );

    if (!cfRes.ok) {
      const text = await cfRes.text();
      return res
        .status(500)
        .json({ message: "Cloudflare upload URL авахад алдаа гарлаа.", error: text });
    }

    const data = await cfRes.json();
    const uploadURL = data?.result?.uploadURL;
    const imageId = data?.result?.id;

    if (!uploadURL || !imageId) {
      return res
        .status(500)
        .json({ message: "Upload URL эсвэл ID буцааж ирсэнгүй, тохиргоог шалгана уу." });
    }

    const publicURL = `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/public`;
    res.json({ uploadURL, publicURL });
  } catch (err) {
    res.status(500).json({ message: "Cloudflare руу хандахад алдаа гарлаа.", error: err.message });
  }
});

module.exports = router;
