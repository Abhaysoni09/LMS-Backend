const {ImageKit} = require("@imagekit/nodejs")

const client = new ImageKit({
    privateKey=process.env.PRIVATE_KEY
})

async function upload(buffer){
    const result = await client.files.upload({
        ImageKit:buffer.toString("base64"),
        fileName:"course_image.jpg"
    })
    return result
}

module.exports = upload