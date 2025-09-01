const addBtn = document.getElementById("add-btn");
const buttonRow = document.getElementById("button-row"); 
const mainBtn = document.getElementById("main-btn");
const overlay = document.getElementById("overlay");
const draggables = document.querySelectorAll(".draggable");

if (addBtn && buttonRow && mainBtn && overlay && draggables.length > 0) {

  let isSelectingMode = false;
  let hasImage = false;
  let selectedImageSrc = "";

  function enterSelectingMode() {
    isSelectingMode = true;
    overlay.classList.add("active");
    draggables.forEach(d => {
      d.classList.add("clickable");
      d.addEventListener("click", handleImageClick);
    });
  }

  function exitSelectingMode() {
    isSelectingMode = false;
    overlay.classList.remove("active");
    draggables.forEach(d => {
      d.classList.remove("clickable");
      d.removeEventListener("click", handleImageClick);
    });
    if (!hasImage) addBtn.innerHTML = '+';
  }

  function handleImageClick(e) {
    e.preventDefault();
    const img = this.querySelector("img");
    if (!img) return;
    addBtn.innerHTML = '';
    const cloned = img.cloneNode(true);
    cloned.style.width = "100%";
    cloned.style.height = "100%";
    cloned.style.objectFit = "contain";
    addBtn.appendChild(cloned);
    hasImage = true;
    selectedImageSrc = img.getAttribute("src"); // บันทึกชื่อรูป
    exitSelectingMode();
  }

  addBtn.addEventListener("click", () => {
    if (isSelectingMode) exitSelectingMode();
    else if (hasImage) { addBtn.innerHTML = '+'; hasImage = false; selectedImageSrc = ""; }
    else enterSelectingMode();
  });

  overlay.addEventListener("click", exitSelectingMode);

  mainBtn.addEventListener("click", e => {
    if (isSelectingMode) e.preventDefault();
  });

  draggables.forEach((el, idx) => {
    el.id = "drag" + idx;
    el.addEventListener("dragstart", e => {
      if (isSelectingMode) e.preventDefault();
    });
  });

}

// ====== VS Toggle + Typewriter ======
const img = document.getElementById("image");
const text = document.getElementById("text");
const btn = document.getElementById("toggleBtn");
let showingImage = true;

const mapping = {
  "logo6.png": "No",
  "logo4.png": "ครึ่งแรกเกมเริ่มต้น The Kingdom ใช้พละกำลังและทักษะการเล่นที่หนักหน่วง กดดัน Inazuma Japan อย่างต่อเนื่องInazuma Japan พยายามใช้เทคนิคพิเศษ เช่น The Wall, Spinning Cut ป้องกัน แต่ถูกเจาะทะลุRonijo ยิงประตูขึ้นนำให้ The Kingdom 1–0 ด้วยท่าไม้ตายพลังยิงหนัก (Hammer Fury V2) ซึ่ง Endou (โกเอนจิ) รับไม่ไหวครึ่งแรกจบลงโดย Inazuma Japan ตามหลัง 0–1ครึ่งหลังInazuma Japan กลับมาเล่นด้วยใจที่ยึดสู้ ใช้ การประสานงานและท่าไม้ตายหลายแบบFubuki, Gouenji และ Hiroto ประสานงานกัน ใช้ท่าไม้ตายทีมเวิร์ก เช่น Cross Fire และ The Earth ในการทำประตูInazuma Japan ยิ่งตีเสมอ 1-1จากนั้นยังคงกดดันต่อเนื่อง ยิงประตูเพิ่มเป็น 2-1The Kingdom ไม่ยอมแพ้ ใช้ Ronijo ยิงคืน 2-2 (RH Program ถูกเร่งให้เขายิงอีก)ท้ายเกม Inazuma Japan รวมพลังอีกครั้ง ยิง ประตูตัดสินเป็น3-2 ", 
  "logo3.png": "ครึ่งแรกเกมเริ่มต้นที่สนามอุมิฮะบิ ในรอบแบ่งกลุ่มของรายการฟุตบอลโลกฝั่งทีมอังกฤษใช้แท็กติกแนวรับ Absolute Knights ซึ่งทำให้การเจาะแนวรับเป็นไปได้ยากสำหับทีมญี่ปุ่นฝั่งอังกฤษเปิดเกมรุกด้วยลูกยิงระยะไกลที่มีพลังอันร้ายกาจชื่อว่า Excalibur เมื่อยิงจากระยะไกล พลังของลูกยิงจะยิ่งเพิ่มมากขึ้นทีมญี่ปนพยายามต้านด้วยการผสมผสานเทคนิค แต่ไม่สามารถรับมือได้หมด จนในที่สุด Excalibur ยิงเข้าประตูผ่านการป้องกัน → ทีมอังกฤษขึ้นนำไป 1–0ครึ่งหลังความพ่ายแพ้ในช่วงแรกกระตุ้นให้ทีมญี่ปุ่นต้องการหาแนวทางใหม่ผู้รักษาประตูของญี่ปุ่นจึงออกแบบท่าไม้ตายใหม่ชื่อว่า Ijigen The Hand มาใช้เพื่อรับมือ Excaliburผลปรากฏว่าเทคนิคนี้สามารถเซฟลยิงระยะไกลของอังกฤษได้สำเร็จ ทำให้เกมกลับสู่อีกมิติหลังจากนั้น ทีมญี่ปุ่นเปิดเกมรุกด้วยท่าไม้ตายชื่อ Tiger Storm แล้วสามารถยิงตีเสมอได้ → สกอร์กลับมาที่ 1–1สรุปผลการแข่งขันทีมอังกฤษขึ้นนำก่อน 1–0 จากลูกยิงพลัง Excaliburทีมญี่ปุ่นตอบโต้และตีเสมอ 1–1 ด้วยการพัฒนาทักษะป้องกัน (Ijigen The Hand) และลูกยิงทีม (Tiger Storm)สุดท้ายจบเกมด้วยผล เสมอ 1–1",
  "logo2.png": "แมตช์รอบชิงชนะเลิศเริ่มขึ้นระหว่าง Inazuma Japan และ Little Gigant Inazuma Japan เปิดเกมด้วย hissatsu แต่ Rococo ป้องกันไว้ได้ด้วย God Hand X อย่างง่ายดาย ต่อมา Rococo ยิงจากระยะไกล แต่ Endou สามารถเซฟได้ และเริ่มรู้ว่าเป็นความท้าทายจาก Rococo จากนั้น Drago ใช้ท่า Double Jaw ยิงให้ Little Gigant ขึ้นนำ 1–0 Little Gigant เปิดฉากโจมตีอย่างต่อเนื่องด้วย hissatsu หลายรูปแบบจน Endou รับไม่ไหว แม้เพื่อนร่วมทีมจะตั้งแนวรับเป็นวงป้องกัน แต่หลายคนได้รับบาดเจ็บ โค้ช Kudou เตือน Endou ว่าเขาคือ “กัปตัน” — หลังจากนั้น Endou สามารถใช้ hissatsu ใหม่ God Catch ได้สำเร็จ ต่อมา Hiroto เปิดตัว teknik ใหม่ชื่อ Tenkuu Otoshi ทำประตูให้ Inazuma Japan ตีเสมอ 1–1 ครึ่งแรกจบลงที่สกอร์ 1–1 ระหว่างทั้งสองทีมครึ่งหลังเริ่มด้วย Kidou ตัดบอลจาก Little Gigant และต่อให้ Gouenji, Toramaru, Hiroto ประสานพลังใช้ Grand Fire G2 ยิงเข้าประตู แต่ถูกเซฟโดยผู้รักษาประตูใหม่ของ Little Gigant ด้วย God Hand X 改 บรรยากาศเกมอยู่ในช่วงที่ทั้งสองทีมผลัดกันบุก และ hissatsu ใหม่ๆ ถูกใช้ต่อเนื่อง Rococo ยิง X Blast แต่ Endou เซฟได้ด้วย hissatsu ที่พัฒนาแล้ว God Catch Inazuma Japan ยิงตีเสมอ Big Bang crushing 真 God Hand X Rococo กลับไปเล่นในตำแหน่งผู้รักษาประตูอีกคร้ง และเซฟ Big Bang ด้วย hissatsu ใหม่ Tamashii The Hand จุดไคลแมกซ์ในช่วงท้าย: Rococo พยายามยิงด้วย X Blast V2 — ลูกยิงทะลุ God Catch G2 แต่บอลชนเสา และ Endou เซฟทัน พลาดประตูไปอย่างหวุดหวิด ท้ายที่สุด Inazuma Japan พลิกมาใช้ท่า Jet Stream โดยครั้งนี้ Endou เป็นคนยิง (แทน Fudou Akio) — ลูกยิงทะลุ Tamashii The Hand G2 และทำประตูชัยให้ Inazuma Japan พลิกชนะ 3–2 ",
  "logo5.png": "เริ่มเกมOrpheus (ทีมชาติอิตาลี) เปิดเกมด้วยกลยุทธ์ Catenaccio Counter ซึ่งเน้นเกมรับเหนียวแน่น และสวนกลับอย่างมีระบบInazuma Japan พยายามบุก แต่ทุกการจ่ายถูกอ่านทางได้หมดOrpheus ขึ้นนำFidio (กัปตัน Orpheus) ฉวยโอกาสสวนกลับ ใช้ท่าไม้ตาย Odin Sword ยิงทะลุแนวรับบอลพุ่งแรงจน Endou ป้องกันไม่ทัน → Orpheus ขึ้นนำ 1–0Inazuma Japan กดดันGouenji, Kidou, Fubuki พยายามประสานงาน แต่ทุกการโจมตีเจอการป้องกันแบบ Catenaccioจบครึ่งแรก Orpheus นำ 1–0ครึ่งหลังจุดเปลี่ยน: Hide Nakata กลับมาNakata (อดีตกัปตัน Orpheus) กลับมาร่วมทีมอย่างไม่คาดคิดทำให้ Orpheus มีพลังใจและการเล่นประสานงานดียิ่งขึ้นโอกาสของ OrpheusNakata ได้บอล ใช้ท่า Brave Shot ยิงเต็มแรงEndou ใช้ท่าไม้ตายใหม่ Ijigen The Hand Kai ป้องกันได้สำเร็จInazuma Japan ตีเสมอToramaru, Gouenji, Fubuki ประสานพลัง ใช้ท่ารวม Koutei Penguin 3gou ยิงบอลพลังเพนกวินใส่ประตูผู้รักษาประตู Orpheus รับไม่ไหว → Inazuma Japan ตีเสมอ 1–1ช่วงท้ายเกมทั้งสองทีมผลัดกันรุกและับ ใช้ hissatsu หลายแบบ แต่ไม่มีทีมไหนยิงเพิ่มได้จบเกมด้วยผล เสมอ 1–1",
};

btn.addEventListener("click", () => {
  if (showingImage) {
    // เลื่อนโลโก้หลักออกซ้าย
    img.classList.add("slide-left");

    setTimeout(() => {
      img.classList.add("hidden");

      // หาข้อความจากรูปที่วางใน addBtn
      let message = "inazuma"; // default
      const placedImg = addBtn.querySelector("img");
      if (placedImg) {
        const src = placedImg.getAttribute("src").split("/").pop(); // เอาเฉพาะชื่อไฟล์
        if (mapping[src]) message = mapping[src];
      }

      // เคลียร์ข้อความเก่า
      text.innerHTML = "";
      text.classList.remove("hidden");
      text.classList.add("fade-in", "typewriter");

      // typewriter effect
      let i = 0;
      function typeWriter() {
        if (i < message.length) {
          text.innerHTML = message.substring(0, i+1) + "<span></span>";
          i++;
          setTimeout(typeWriter, 50);
        } else {
          text.innerHTML = message; // ลบ cursor ตอนจบ
        }
      }
      typeWriter();

    }, 800);
  } else {
    // ซ่อนข้อความ
    text.classList.add("hidden");
    text.classList.remove("fade-in", "typewriter");
    text.innerHTML = "";

    // แสดงโลโก้กลับมา
    img.classList.remove("hidden", "slide-left");
  }

  showingImage = !showingImage;
});