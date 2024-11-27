import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587,
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_STMP_USERNAME ,
      pass: process.env.NEXT_PUBLIC_GMAIL_STMP_PW, 
    },
  });


export const sendEmail = async (to: string, subject: string, html: string) => {
    
    
    const mailOptions = {
      from:process.env.NEXT_PUBLIC_GMAIL_STMP_USERNAME,
      to: to,
      subject: subject,
      html,
    };
    await transporter.sendMail(mailOptions);
  };


