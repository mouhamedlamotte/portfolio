"use client";

import { toPng, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";


export const downloadAsImage = async (format: "png" | "svg", cardRef: React.RefObject<HTMLDivElement>, imgname : string = "card") => {
    if (!cardRef.current) return;

    try {
      let dataUrl;
      if (format === "png") {
        dataUrl = await toPng(cardRef.current);
      } else {
        dataUrl = await toSvg(cardRef.current);
      }
      const audio = new Audio("/mp3/cam_capture.mp3");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${imgname}.${format}`;
      audio.play();
      link.click();
    } catch (error) {
      console.error("Error capturing the card:", error);
    }
  };

export  const downloadAsPDF = async (cardRef: React.RefObject<HTMLDivElement>, pdfname : string = "card") => {
    if (!cardRef.current) return;


    try {
      const dataUrl = await toPng(cardRef.current);

      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${pdfname}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };