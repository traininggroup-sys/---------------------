// جميع الأسئلة لكل محور
// نوع السؤال: "mcq" = اختيارات، "tf" = صح/خطأ
// خيارات MCQ موجودة فقط للـ mcq
// للغة: ar / en

const questions = {
  behavior: [
    { type: "mcq", question_ar: "السلوكيات الجيدة تعكس شخصية الفرد", options_ar: ["صح", "خطأ"], answer_ar: "صح" },
    { type: "tf", question_ar: "الجدارات السلوكية مهمة فقط في العمل", answer_ar: "خطأ" },
    { type: "mcq", question_ar: "التعاون بين الزملاء يزيد من الإنتاجية", options_ar: ["صح","خطأ"], answer_ar:"صح" }
  ],
  language: {
    ar: [
      { type:"mcq", question_ar:"ما هو جمع كلمة كتاب؟", options_ar:["كتب","كتبا","كتبات"], answer_ar:"كتب" },
      { type:"tf", question_ar:"اللغة العربية تحتوي على 28 حرفاً", answer_ar:"صح" }
    ],
    en: [
      { type:"mcq", question_en:"What is the plural of 'book'?", options_en:["books","bookes","bookies"], answer_en:"books" },
      { type:"tf", question_en:"English has 26 letters", answer_en:"صح" }
    ]
  },
  knowledge: [
    { type:"mcq", question_ar:"مصر تقع في قارة؟", options_ar:["أفريقيا","آسيا","أوروبا"], answer_ar:"أفريقيا" },
    { type:"tf", question_ar:"القاهرة هي عاصمة مصر", answer_ar:"صح" }
  ],
  technology: {
    ar: [
      { type:"mcq", question_ar:"الـCPU هو؟", options_ar:["وحدة المعالجة المركزية","الذاكرة","الشاشة"], answer_ar:"وحدة المعالجة المركزية" },
      { type:"tf", question_ar:"RAM هي ذاكرة دائمة", answer_ar:"خطأ" }
    ],
    en: [
      { type:"mcq", question_en:"CPU stands for?", options_en:["Central Processing Unit","Random Access Memory","Hard Disk"], answer_en:"Central Processing Unit" },
      { type:"tf", question_en:"RAM is permanent memory", answer_en:"خطأ" }
    ]
  },
  education: [
    { type:"mcq", question_ar:"التربية تبدأ من؟", options_ar:["الأسرة","المدرسة","الجامعة"], answer_ar:"الأسرة" },
    { type:"tf", question_ar:"المعلم ليس له دور في التعليم", answer_ar:"خطأ" }
  ],
  specialization: [
    { type:"mcq", question_ar:"تخصص هندسة الكمبيوتر يدرس؟", options_ar:["البرمجة","الطب","الاقتصاد"], answer_ar:"البرمجة" },
    { type:"tf", question_ar:"التخصصات لا تؤثر على سوق العمل", answer_ar:"خطأ" }
  ]
};
