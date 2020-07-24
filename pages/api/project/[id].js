
export default (req, res) => {

    const {query:{id}} = req;


    let data = { 
        message: "hello",
        project: id
    }


    return res.status(200).json(data);
}