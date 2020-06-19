export default {

    async subscribe(email){
        const mailjet = require ('node-mailjet')
            .connect(process.env.MJ_API_KEY, process.env.MJ_API_SECRET)

        const request = mailjet
            .post("contact")
            .request({
                "Email": email,
                "IsExcludedFromCampaigns":"false",
                "Name": email
            })
        request
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
            })

    }
}
