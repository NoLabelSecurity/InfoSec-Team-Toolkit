import whois from "whois-json";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { domain } = req.body;

    if (!domain) {
      return res.status(400).json({ error: "Domain required" });
    }

    const data = await whois(domain);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Lookup failed" });
  }
}
