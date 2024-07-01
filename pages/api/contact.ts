require("dotenv").config();
const PASSWORD = process.env.PASSWORD;
const PASSWORD2 = process.env.PASSWORD2;
const GMAIL = process.env.GMAIL;
const GMAIL_FROM = process.env.GMAIL_FROM;

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    let nodemailer = require("nodemailer");
    const tranportInbox = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: GMAIL_FROM,
        pass: PASSWORD,
      },
      secure: true,
    });
  
    const tranportOutbox = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: GMAIL,
        pass: PASSWORD2,
      },
      secure: true,
    });
  
    const mailData = {
      from: GMAIL_FROM,
      to: GMAIL,
      subject: `Message From ${req.body.full_name}`,
      text:
        "Budget: " +
        req.body.budget +
        " | For project: " +
        req.body.project +
        " | Sent from: " +
        req.body.email +
        " | With phone: " +
        req.body.phone,
      html: `
          <div>
              <h1>Name: ${req.body.full_name}</h1>
              <ul>
                  <li><b>Phone: ${req.body.phone}</b></li>
                  <li><b>Budget: ${req.body.budget}</b></li>
                  <li><b>Project: ${req.body.project}</b></li>
                  <li><b>Email: ${req.body.email}</b></li>
  
              </ul>
          </div>
         `,
    };
  
    const fromAlbert = {
      from: GMAIL,
      to: req.body.email,
      subject: `From Albert, about your project: ${req.body.project}`,
      text: `Hello ${req.body.full_name}, \n Thank you for visiting my website and leaving me a message. I have received your message about the project ${req.body.project}, I will reach you back within 48 hours from now to have an official talk about your message. \n Cheers, \n Albert Mwasisoba.`,
      html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>
      
          <style type="text/css">
            @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }
      
        .u-row .u-col-100 {
          width: 600px !important;
        }
      
      }
      
      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }
      
      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }
      
      p {
        margin: 0;
      }
      
      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }
      
      * {
        line-height: inherit;
      }
      
      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }
      
      table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 64% !important; } }
          </style>
      
      
      
      <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
      
      </head>
      
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
      
      
      <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dcdcdc;">
          <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image: url('https://albizzy.github.io/portfolio-assets/images/email/header.png');background-repeat: no-repeat;background-position: center;background-color: transparent; background-size: cover;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-image: url('images/image-5.png');background-repeat: no-repeat;background-position: center top;background-color: #dcdcdc;"><![endif]-->
      
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="height: 100%;width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
      <table id="u_content_image_1" style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:67px 11px 11px;font-family:'Cabin',sans-serif;" align="left">
      
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
            <div style="height: 30px;"></div>
      
          </td>
        </tr>
      </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 225px;font-family:'Cabin',sans-serif;" align="left">
      
        <div style="line-height: 140%; text-align: center; word-wrap: break-word; color: white">
          <p style="line-height: 140%; font-size: 14px;"><span style="font-size: 30px; line-height: 42px;"><strong>Direct from <span style="font-family: 'Open Sans', sans-serif; font-size: 30px; line-height: 42px;">Albert!</span></strong></span></p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
      
      <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #fcf9f8;">
          <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #fcf9f8;"><![endif]-->
      
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="height: 100%;width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
      <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:44px 10px 14px;font-family:'Cabin',sans-serif;" align="left">
      
        <div style="line-height: 140%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Cabin, sans-serif; font-size: 14px; line-height: 19.6px;"><span style="font-size: 26px; line-height: 36.4px;"><strong><span style="line-height: 36.4px; font-size: 26px;">Hello ${
            req.body.full_name
          }</span></strong></span></span></p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:4px 55px 10px;font-family:'Cabin',sans-serif;" align="left">
      
        <div style="line-height: 170%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 170%;"><span style="font-family: Cabin, sans-serif; font-size: 18px; line-height: 30.6px;">Thank you for visiting my website and leaving me a message. I have received your message about the project ${
            req.body.project.length > 0 ? '"' + req.body.project + '"' : ""
          }, I will contact you again within 48 hours from now for an official talk about your message.</span></p>
        </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:4px 55px 10px;font-family:'Cabin',sans-serif;" align="left">
      
        <div style="line-height: 170%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 170%;"><span style="font-family: Cabin, sans-serif; font-size: 16px; line-height: 27.2px;"><span style="font-size: 18px; line-height: 30.6px;">You can also schedule an appointment, by clicking the schedule an appointment button.</p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 55px;font-family:'Cabin',sans-serif;" align="left">
      
        <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
      <div align="center">
        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:45px; v-text-anchor:middle; width:212px;" arcsize="9%"  stroke="f" fillcolor="#fecaca"><w:anchorlock/><center style="color:#ef4444;font-family:'Cabin',sans-serif;"><![endif]-->
          <a href="https://calendly.com/albertmwasisoba/lets-talk" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: rgb(29 78 216); background-color: rgb(147 197 253); border-radius: 16px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
            <span style="display:block;padding:13px 55px;line-height:120%;"><span style="font-family: Cabin, sans-serif; font-size: 16px; line-height: 19.2px;"><span style="line-height: 19.2px; font-size: 16px;">schedule an appointment</span></span></span>
          </a>
        <!--[if mso]></center></v:roundrect><![endif]-->
      </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
      
      <div class="u-row-container" style="padding: 0px 0px 17px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
          <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 0px 17px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="height: 100%;width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
      <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:23px 10px 10px;font-family:'Cabin',sans-serif;" align="left">
      
      <div align="center">
        <div style="display: table; max-width:149px;">
        <!--[if (mso)|(IE)]><table width="149" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:149px;"><tr><![endif]-->
      
      
          <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 18px;" valign="top"><![endif]-->
          <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 18px">
            <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
              <a href="https://github.com/albizzy" title="GitHub" target="_blank">
                <img src="https://innocentmasuki.github.io/portfolio-assets/images/social/github.png" alt="GitHub" title="GitHub" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
              </a>
            </td></tr>
          </tbody></table>
          <!--[if (mso)|(IE)]></td><![endif]-->
      
          <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 18px;" valign="top"><![endif]-->
          <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 18px">
            <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
              <a href="https://www.instagram.com/iambizzy19/" title="Instagram" target="_blank">
                <img src="https://innocentmasuki.github.io/portfolio-assets/images/social/instagram.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
              </a>
            </td></tr>
          </tbody></table>
          <!--[if (mso)|(IE)]></td><![endif]-->
      
          <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
          <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
            <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
              <a href="https://twitter.com/Iambizzy19" title="Twitter" target="_blank">
                <img src="https://innocentmasuki.github.io/portfolio-assets/images/social/twitter.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
              </a>
            </td></tr>
          </tbody></table>
          <!--[if (mso)|(IE)]></td><![endif]-->
      
      
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
      
        <div style="color: #9ca3af; line-height: 170%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 170%;">Thank you for visiting <a rel="noopener" style="color:#93c5fd;" href="https://albert-mwasisoba.vercel.app/" target="_blank">albertmwasisoba.me</a></p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
      
      </html>
  
         `,
    };
  
    tranportInbox.sendMail(mailData, function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error sending email' });
      }
      tranportOutbox.sendMail(fromAlbert, function (err) {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error sending confirmation email' });
        }
        return res.status(200).json({ message: 'Emails sent successfully' });
      });
    });
  }