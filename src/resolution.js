// export default (doc, status, finalDate, { fileName1, fileName2, date1, date2 }) => {
exports.resolution = (doc, status, finalDate, { fileName1, fileName2, date1, date2 }) => {
  for (let i = 0; i < 2; i++) {
    doc.addPage();

    doc.font("malgunbd.ttf").fontSize(18).text("SAFETY CORRECTIVE ACTION REQUEST", 40, 50);
    doc.fontSize(14).text("안전시정조치요구서(최종완료)", 40, 75);

    doc
      .font("malgun.ttf")
      .fontSize(9)
      // .text("Date(최종승인일) : 2023-02-18 15:46:55", 352, 130, { width: "200", align: "right" });
      .text(`Date(${status}) : ${finalDate}`, 352, 130, { width: "200", align: "right" });

    doc.fontSize(9).fillColor("blue").text("회람자 공유 링크", 40, 723, {
      link: "https://www.riskzero.ai/scar/share/report/id:1",
    });

    // 첫 색상 칸, 두 번째, 세 번째 색상 칸
    doc.lineWidth(1).moveTo(40, 150).lineTo(150, 150).lineTo(150, 720).lineTo(40, 720).lineTo(40, 220).fill("#F9F9F9");
    doc.moveTo(296, 150).lineTo(396, 150).lineTo(396, 190).lineTo(296, 190).lineTo(296, 150).fill("#F9F9F9");
    doc.moveTo(296, 435).lineTo(396, 435).lineTo(396, 475).lineTo(296, 475).lineTo(296, 435).fill("#F9F9F9");

    // 가로줄
    doc.lineWidth(2).moveTo(40, 150).lineTo(552, 150).stroke("black"); // 가로 첫 굵은 줄
    doc.lineWidth(1).moveTo(40, 190).lineTo(552, 190).stroke("#DFDFDF");
    doc.moveTo(40, 435).lineTo(552, 435).stroke("#DFDFDF");
    doc.moveTo(40, 475).lineTo(552, 475).stroke("#DFDFDF");
    doc.moveTo(40, 720).lineTo(552, 720).stroke("#DFDFDF");

    /**-------------   표 내부 내용  -----------------*/
    // 첫 타이틀 칸 텍스트
    doc.fillColor("black").text("File Name", 40, 165, { width: "110", align: "center" });
    doc.text("Resolution Picture\n(조치사항 사진)", 40, 300, { width: "110", align: "center" });
    doc.text("File Name", 40, 450, { width: "110", align: "center" });
    doc.text("Resolution Picture\n(조치사항 사진)", 40, 585, { width: "110", align: "center" });

    // 두 번째 타이틀 칸 텍스트
    doc.text("Date", 296, 165, { width: "100", align: "center" });
    doc.text("Date", 296, 450, { width: "100", align: "center" });

    //   doc.text("조치 사진4.jpg", 150, 165, { width: "146", align: "center" }); // File Name
    doc.text(`${fileName1}`, 150, 165, { width: "146", align: "center" }); // File Name
    doc.image("images/mustang.jpg", 160, 200, { fit: [385, 225], align: "center", valign: "center" });

    // 이미지 1
    //   doc.text("조치 사진5.jpg", 150, 450, { width: "146", align: "center" }); // File Name
    doc.text(`${fileName2}`, 150, 450, { width: "146", align: "center" }); // File Name
    doc.image("images/mustang.jpg", 160, 485, { fit: [385, 225], align: "center", valign: "center" }); // 이미지 2

    //   doc.text("2023-02-18 15:46:55", 406, 165, { width: "136", align: "center" }); // Date1
    //   doc.text("2023-02-19 11:05:12", 406, 450, { width: "136", align: "center" }); // Date2
    doc.text(`${date1}`, 406, 165, { width: "136", align: "center" }); // Date1
    doc.text(`${date2}`, 406, 450, { width: "136", align: "center" }); // Date2

    doc.image("images/hg_logo.png", 452, 765, { fit: [100, 30], align: "center", valign: "center" });
  }

  return doc;
};
