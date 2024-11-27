import { ReplyMessageTemplate } from "@/templates/ReplyMessageTemplate";
import ReactDOMServer from "react-dom/server";

interface ReplyMessageTemplateProps {
  portfolioName?: string ;
  recipientName: string;
  message: string;
  devisLink?: string;
  replyEmail?: string;
  preview? : boolean
}

export const generateEmailHtml =  (props: ReplyMessageTemplateProps) => {
  return  ReactDOMServer.renderToStaticMarkup(<ReplyMessageTemplate {...props} />);
} ;
