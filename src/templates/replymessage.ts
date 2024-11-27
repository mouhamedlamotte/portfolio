export const replyMessageTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Réponse à votre Message</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f7;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #333;
    }

    table {
      border-spacing: 0;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    td {
      padding: 20px;
    }

    .header {
      background-color: #4C8BF5;
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      padding: 20px 0;
    }

    .body {
      padding: 20px;
      font-size: 16px;
      line-height: 1.6;
      color: #444;
    }

    .body h2 {
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
    }

    .button-container {
      text-align: center; /* Centre le bouton */
    }

    .button {
      display: inline-block; 
      padding: 12px 24px;
      background-color: #4C8BF5;
      color: #fff !important; 
      text-decoration: none !important;
      border-radius: 6px;
      font-weight: bold;
      font-size: 16px;
    }

    .footer {
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #888;
      background: #f4f4f7;
    }

    .footer a {
      color: #4C8BF5;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <td class="header">
        {{portfolio_name}}
      </td>
    </tr>
    <tr>
      <td class="body">
        <h2>Bonjour {{recipient_name}},</h2>
        {{message}}
        <p>Si vous voulez discuter d'un projet, vous pouvez directement demander un devis :</p>
        <div class="button-container">
          <a href="{{devis_link}}" class="button">Demander un devis</a>
        </div>
      </td>
    </tr>
    <tr>
      <td class="footer">
        <p>Ce message vous a été envoyé par {{portfolio_name}}. Si vous souhaitez répondre, veuillez écrire à <a href="mailto:{{reply_email}}">{{reply_email}}</a>.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;


