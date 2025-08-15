"use server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "giovanni@wowmi.us",
        pass: "brgh dddn gjxi wvcj",
    },
});

export async function sendContactEmail(email: string, name: string, message: string) {
    const mailOptions: Mail.Options = {
        from: "giovanni@wowmi.us",
        to: email,
        subject: "Contato",
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(error);
    }
}