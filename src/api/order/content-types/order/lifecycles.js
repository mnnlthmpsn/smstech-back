module.exports = {
    async afterCreate(event) {
        const { result, params } = event
        console.log('############# SENDING EMAIL ##########')

        const emailTemplate = {
            subject: 'NEW ORDER ALERT!!!',
            text: 'A new order has been placed. Please check pending orders on the admin portal',
            html: `<h1>A new order has been placed. Please check pending orders on the admin portal</h1>`
          };

        if (!!result.id) {
            try {
                await strapi.plugins['email'].services.email.sendTemplatedEmail(
                    { to: 'etntiamoah@st.ug.edu.gh' },
                    emailTemplate
                )
                console.log('email sent')
            } catch (err) {
                console.log('an error occured sending email')
                console.log(err)
            }
        }
    }
}