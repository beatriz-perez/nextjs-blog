export default (req, res) => {
    let data = { message: "hello"}

    /*
    * Middleware included to parse the incoming request "req":
    * req.cookies
    * req.query
    * req.body
    */

    /*
     * Express-like helper functions for response "res":
     * res.status(200);
     * res.json({});
     * res.send("HTTP response")
     */

    return res.status(200).json(data);
}