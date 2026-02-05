import nodemailer from 'nodemailer'

export const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD // app password
  }
})
export const sendForgotPasswordEmail = async (to: string, token: string) => {
  const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`

  await mailTransporter.sendMail({
    from: `"Support" <${process.env.MAIL_USER}>`,
    to,
    subject: 'Reset your password',
    html: `
      <h2>Reset password</h2>
      <p>Click link below to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>Link expires in ${process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN} minutes</p>
    `
  })
}
