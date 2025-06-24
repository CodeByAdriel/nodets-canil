import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import router from './router'

dotenv.config()

const app = express()

app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, 'views'))
app.engine('mustache', mustache())

app.use(express.static(path.join(__dirname, '../public')))

app.use(router)
app.use((req, res) => {
    res.send('Página não encontrada.')
})

app.listen(process.env.PORT)

export default app