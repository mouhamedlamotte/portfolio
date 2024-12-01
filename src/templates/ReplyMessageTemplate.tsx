import React from "react";
import Markdown from "react-markdown";

interface ReplyMessageTemplateProps {
  portfolioName?: string;
  recipientName: string;
  message: string;
  devisLink?: string;
  replyEmail?: string;
  preview?: boolean;
}

export const ReplyMessageTemplate: React.FC<ReplyMessageTemplateProps> = ({
  portfolioName = "Mouhamed Lamotte",
  recipientName,
  message,
  devisLink = `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/devis`,
  replyEmail = "mouhamedlamotte.dev",
  preview = true,
}) => {
  return (
    <div
      style={{
        backgroundColor: preview ? "transparent" : "#f4f4f7",
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <table
      className="!bg-background !text-foreground" 
        width="600"
        cellPadding="0"
        cellSpacing="0"
        border={0}
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          borderCollapse: "separate",
          margin: "0 auto",
          boxShadow: preview ? "none" : "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: "#4C8BF5",
                color: "#fff",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                padding: "20px 0",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                whiteSpace: "nowrap",
              }}
            >
              {portfolioName}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "20px",
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#444",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <h2 className="!text-white" style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>
                Bonjour {recipientName},
              </h2>
              <Markdown className="break-words max-w-[600px] !text-white">{message}</Markdown>
              <p className="!text-white" style={{ marginTop: "20px" }}>
                Si vous voulez discuter d&apos;un projet, vous pouvez directement demander un devis :
              </p>
              <p style={{ textAlign: "center", margin: "20px 0" }}>
                <a
                  href={devisLink}
                  style={{
                    display: "inline-block",
                    padding: "12px 24px",
                    backgroundColor: "#4C8BF5",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    maxWidth: "100%",
                  }}
                >
                  Demander un devis
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
                padding: "15px",
                fontSize: "12px",
                color: "#888",
                background: "#f4f4f7",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <p>
                Ce message vous a été envoyé par {portfolioName}. Si vous souhaitez répondre, veuillez écrire à{" "}
                <a
                  href={`mailto:${replyEmail}@gmail.com`}
                  style={{ color: "#4C8BF5", textDecoration: "none" }}
                >
                  {replyEmail}@gmail.com
                </a>.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};