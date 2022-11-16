const page = Math.floor(Math.random() * (200 - 1) + 1)
const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=32`
const token = '563492ad6f917000010000010b6451c2d5cc476981aeeee4673a10f5'

module.exports = { url, token }
