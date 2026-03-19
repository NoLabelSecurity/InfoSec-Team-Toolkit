export default async function handler(req, res) {
  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({ error: "Domain required" });
  }

  try {
    const response = await fetch(
      `https://crt.sh/?q=%25.${domain}&output=json`
    );

    const data = await response.json();

    const subdomains = [
      ...new Set(data.map((entry) => entry.name_value)),
    ];

    res.status(200).json({ subdomains });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch subdomains" });
  }
}
