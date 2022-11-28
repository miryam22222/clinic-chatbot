import { CONTACT_FORM_TABLE_NAME } from "../../config";
import { client } from "../../datastore";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Unsupported request method' })
    return
  }
  const { name, email, comment } = req.body;
  try {
    await client.from(CONTACT_FORM_TABLE_NAME).insert({ name, email, comment });
    console.log("added");
    res.status(200).json({message: "Success"})
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" })
  }
}