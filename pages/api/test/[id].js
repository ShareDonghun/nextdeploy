// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { query } = req;
  const { id } = query;

  res.status(200).json({ name: "test", id });
}
