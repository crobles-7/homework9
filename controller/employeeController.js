export const fetch = async(req, res) => {
    try {
        res.json("Hello Wolrd")
    } catch(error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}