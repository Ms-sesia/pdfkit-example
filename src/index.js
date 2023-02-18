const pdfDocument = require("pdfkit");
const fs = require("fs");
const { resolution } = require("./resolution");

let doc = new pdfDocument({ size: "A4" });

const status = "최종승인일";
const today = new Date();

doc.pipe(
  fs.createWriteStream(`안전시정조치요구서(${status})_${today.toISOString().split("T")[0].replaceAll(/-/g, "")}.pdf`)
);

doc.font("malgunbd.ttf").fontSize(18).text("SAFETY CORRECTIVE ACTION REQUEST", 40, 50);
doc.fontSize(14).text("안전시정조치요구서(최종완료)", 40, 75);

doc
  .font("malgun.ttf")
  .fontSize(9)
  .text("발행자 : PM본사 홍길동", 40, 200, { width: "200", align: "justify" })
  .text("Date(최종승인일) : 2023-02-18 15:46:55", 352, 200, { width: "200", align: "right" });

doc.fontSize(9).fillColor("blue").text("회람자 공유 링크", 40, 723, {
  link: "https://www.riskzero.ai/scar/share/report/id:1",
});

// 첫 색상 칸, 두 번째 색상 칸
doc.lineWidth(1).moveTo(40, 220).lineTo(150, 220).lineTo(150, 720).lineTo(40, 720).lineTo(40, 220).fill("#F9F9F9");
doc.moveTo(296, 220).lineTo(396, 220).lineTo(396, 510).lineTo(296, 510).lineTo(296, 220).fill("#F9F9F9");

// 가로줄
doc.lineWidth(2).moveTo(40, 220).lineTo(552, 220).stroke("black"); // 가로 첫 굵은 줄
doc.lineWidth(1).moveTo(40, 260).lineTo(552, 260).stroke("#DFDFDF");
doc.moveTo(40, 300).lineTo(552, 300).stroke("#DFDFDF");
doc.moveTo(40, 340).lineTo(552, 340).stroke("#DFDFDF");
doc.moveTo(40, 510).lineTo(552, 510).stroke("#DFDFDF");
doc.moveTo(40, 720).lineTo(552, 720).stroke("#DFDFDF");

/**-------------   표 내부 내용  -----------------*/
// 첫 타이틀 칸 텍스트
doc.fillColor("black").text("SCAR TITLE", 40, 235, { width: "110", align: "center" });
doc.text("Send To", 40, 275, { width: "110", align: "center" });
doc.text("Responsible", 40, 315, { width: "110", align: "center" });
doc.text("Safety Violation\nObserved\n(지적사항)", 40, 410, { width: "110", align: "center" });
doc.text("History", 40, 610, { width: "110", align: "center" });

// 두 번째 타이틀 칸 텍스트
doc.text("PROJECT NAME", 296, 235, { width: "100", align: "center" });
doc.text("Sent From", 296, 275, { width: "100", align: "center" });
doc.text("Issuer", 296, 315, { width: "100", align: "center" });
doc.text("Safety Violation\nResolved\n(조치사항)", 296, 410, { width: "100", align: "center" });

doc.text("HG-SCAR-001", 150, 235, { width: "146", align: "center" }); // SCAR TITLE
doc.text("한미글로벌", 150, 275, { width: "146", align: "center" }); // Send To
doc.text("PM현장 홍길동", 150, 315, { width: "146", align: "center" }); // Responsible
doc.text(
  "1층 가설사다리 용단작업시 작업장소 5m 이내에 대형 소화기 1개, 소형 소화기 2개, 확성기 미배치하여 소방법 위반",
  160,
  350,
  { width: "126", align: "justify" }
); //지적사항
doc.text(
  "발행완료 - PM본사 홍길동(2023-02-01 16:15:55)\n발행완료 - PM본사 홍길동(2023-02-01 16:15:55)\n발행완료 - PM본사 홍길동(2023-02-01 16:15:55)\n발행완료 - PM본사 홍길동(2023-02-01 16:15:55)\n발행완료 - PM본사 홍길동(2023-02-01 16:15:55)\n발행완료 - PM본사 홍길동(2023-02-01 16:15:55)\n",
  160,
  520,
  { width: "382", align: "justify" }
); // history

doc.text("양자유통 업무설비 공동집배송센터 이후 추가내용 있는 경우 두줄", 406, 228, { width: "136", align: "center" }); // PROJECT NAME
doc.text("한미글로벌", 406, 275, { width: "136", align: "center" }); // Sent From
doc.text("PM본사 철이", 406, 315, { width: "136", align: "center" }); // Issuer
doc.text("해당업체 관리자 교육 실시", 406, 350, { width: "136", align: "justify" }); // Safety Violation\nResolved\n(조치사항)

doc.image("images/hg_logo.png", 452, 765, { fit: [100, 30], align: "center", valign: "center" });

/**두 번째 페이지 */
doc.addPage();

doc.font("malgunbd.ttf").fontSize(18).text("SAFETY CORRECTIVE ACTION REQUEST", 40, 50);
doc.fontSize(14).text("안전시정조치요구서(최종완료)", 40, 75);

doc
  .font("malgun.ttf")
  .fontSize(9)
  .text("Date(최종승인일) : 2023-02-18 15:46:55", 352, 130, { width: "200", align: "right" });

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
doc.text("Violation Picture\n(지적사항 사진)", 40, 300, { width: "110", align: "center" });
doc.text("File Name", 40, 450, { width: "110", align: "center" });
doc.text("Resolution Picture\n(조치사항 사진)", 40, 585, { width: "110", align: "center" });

// 두 번째 타이틀 칸 텍스트
doc.text("Date", 296, 165, { width: "100", align: "center" });
doc.text("Date", 296, 450, { width: "100", align: "center" });

doc.text("위반 사진.jpg", 150, 165, { width: "146", align: "center" }); // File Name
doc.image("images/mustang.jpg", 160, 200, { fit: [385, 225], align: "center", valign: "center" }); // 이미지 1
doc.text("조치 사진1.jpg", 150, 450, { width: "146", align: "center" }); // File Name
doc.image("images/mustang.jpg", 160, 485, { fit: [385, 225], align: "center", valign: "center" }); // 이미지 2

doc.text("2023-02-18 15:46:55", 406, 165, { width: "136", align: "center" }); // Date1
doc.text("2023-02-19 11:05:12", 406, 450, { width: "136", align: "center" }); // Date2

doc.image("images/hg_logo.png", 452, 765, { fit: [100, 30], align: "center", valign: "center" });

const repeatPage = resolution(doc, status, "2023-02-18 15:46:55", {
  fileName1: "조치사진4.jpg",
  fileName2: "조치사진5.jpg",
  date1: "2023-02-18 15:46:55",
  date2: "2023-02-19 11:05:12",
});

repeatPage.end();
