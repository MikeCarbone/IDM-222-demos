// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const x = 1;
export default function handler(req, res) {
  x++;
  res.status(200).json({ name: 'John Doe', x: x })
}
