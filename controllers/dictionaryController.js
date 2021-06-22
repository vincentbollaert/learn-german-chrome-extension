import { notionClient } from "../app.js"

export function getDictionary(req, res, next) {
  notionClient.databases
    .query({
      database_id: process.env.NOTION_DICTIONARY_ID,
    })
    .then(({ results }) => {
      const randomWordIndex = Math.floor(Math.random() * (results.length - 0 + 1) + 0)
      const {
        properties: { word, meaning },
      } = results[randomWordIndex]
      const wordValue = word.title[0].text.content
      const meaningValue = meaning.rich_text[0].text.content

      console.log(wordValue, meaningValue)
      return res.send(`${wordValue}: ${meaningValue}`)
    })
}
