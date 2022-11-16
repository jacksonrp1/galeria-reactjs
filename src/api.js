const page = Math.floor(Math.random() * (200 - 1) + 1)
const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=32`
const token = 'Sua chave Token'

module.exports = { url, token }
