const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3000;

// Configuração do MongoDB
const uri = "mongodb+srv://root:123@cluster0.44vuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Substitua pela sua conexão MongoDB
const client = new MongoClient(uri);

async function getImageFromDB(imageId) {
    try {
        await client.connect();
        console.log(client);
        const database = client.db("hackathon");
        const collection = database.collection("hackathon");

        // Buscar a imagem pelo ID
        const document = await collection.findOne({ _id: new ObjectId(imageId) });

        if (!document || !document.base64Data) {
            return null;
        }

        // Converter Base64 para Buffer
        return Buffer.from(document.base64Data, "base64");
    } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
        return null;
    }
}

// Rota para servir a imagem
app.get("/imagem/:id", async (req, res) => {
    const imageId = req.params.id;
    const imageBuffer = await getImageFromDB("67af215aecc2b73de62ed2a8");

    if (!imageBuffer) {
        return res.status(404).send("Imagem não encontrada.");
    }

    res.setHeader("Content-Type", "image/jpeg");
    res.send(imageBuffer);
});

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:${port}");
});
