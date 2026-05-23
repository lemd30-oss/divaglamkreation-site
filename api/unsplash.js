export default async function handler(req, res) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return res.status(500).json({
      error: "Missing UNSPLASH_ACCESS_KEY environment variable. Add it in Vercel Project Settings before using this route."
    });
  }

  const allowedQueries = [
    "sunday reset",
    "gentle reset routine",
    "faith journaling",
    "self care journal",
    "printable reset journal",
    "cozy morning journal",
    "quiet morning coffee",
    "neutral stationery",
    "candle journal coffee"
  ];

  const rawQuery = String(req.query.query || "cozy morning journal").toLowerCase().trim();
  const query = allowedQueries.includes(rawQuery) ? rawQuery : "cozy morning journal";
  const perPage = Math.min(Number(req.query.per_page || 6), 12);

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape&content_filter=high`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
          "Accept-Version": "v1"
        }
      }
    );

    if (!response.ok) {
      const details = await response.text();
      return res.status(response.status).json({ error: "Unsplash request failed", details });
    }

    const data = await response.json();

    const photos = data.results.map((photo) => ({
      id: photo.id,
      alt: photo.alt_description || photo.description || query,
      image: photo.urls.regular,
      thumb: photo.urls.small,
      photographer: photo.user.name,
      photographer_url: `${photo.user.links.html}?utm_source=divaglamkreation&utm_medium=referral`,
      unsplash_url: `${photo.links.html}?utm_source=divaglamkreation&utm_medium=referral`
    }));

    return res.status(200).json({ query, photos });
  } catch (error) {
    return res.status(500).json({ error: "Unable to load Unsplash images", details: error.message });
  }
}
