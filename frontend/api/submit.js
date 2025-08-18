export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzwjwp_v46Obe271VP-wvK-kmb2cnM27zhJwCO__lrRywpQaivgKFppXjHAk3VKjGZh/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to forward request", details: err });
  }
}
