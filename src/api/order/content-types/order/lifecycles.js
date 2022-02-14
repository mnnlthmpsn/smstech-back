module.exports = {
    async afterCreate(event) {
        const { result, params } = event
        console.log('############# SENDING EMAIL ##########')

        const emailParams = {
            to: 'etntiamoah@st.ug.edu.gh',
            from: 'mnnlthmpsn@outlook.com',
            subject: 'A new order has been made',
            replyTo: 'noreply@smstechsolutions.com',
            html: "<p>An order has been made by ${result.firstname} ${result.lastname}. Please find a link below`</p>"
        }

        if (!!result.id) {
            try {
                await strapi.plugins['email'].services.email.send(emailParams)
                console.log('email sent')
            } catch (err) {
                console.log('an error occured sending email')
                console.log(err)
            }
        }
    }
}