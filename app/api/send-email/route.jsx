import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import Email from '../../../emails/index';

export const POST = async (req) => {
  try {
    const { userName, email, phone, productName, total, subTotal } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'tianmeds.business@gmail.com',
        pass: 'vjgj vpbm mwii lxxh',
      },
    });

    const emailHtml = render(<Email userName={userName} email={email} phone={phone} productName={productName} total={total} subTotal={subTotal} />);

    const options = {
      from: 'tianmeds.business@gmail.com',
      to: email,
      subject: 'Rene & Grace Order Confirmation',
      html: emailHtml,
    };

    await transporter.sendMail(options);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Error sending email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
