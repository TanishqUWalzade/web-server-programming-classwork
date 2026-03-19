/*
Users Controller
*/

import { Router } from "express"

const app = Router();

app.get("/", (_req, res) => {
    res.send([
    {id: 1, name: 'John Doe', email:"john.doe@example.com"},
    {id: 2, name: 'Jane Smith', email:"jane.smith@example.com"}
  ])
})
    .get("/:id", (req, res) => {
    const { id } = req.params;
    res.send({id, name: `User ${id}`, email: `user.${id}@example.com`})
  })
    .post("/", (req, res) =>


export default app;