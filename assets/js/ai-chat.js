/* =========================================================
   CAREER QR — Trợ lý AI (dùng chung mọi trang)
   Phiên bản nâng cấp giao diện & trải nghiệm người dùng
   ========================================================= */

const AI_CONFIG = {
  API_KEY: "sk-4150297863e3eee405805e8609648e6c5cebb1b502ffb46e",
  API_ENDPOINT: "https://api.shopaikey.com/v1/chat/completions",
  MODELS: ["gpt-4.1-mini-2025-04-14", "gpt-4o-mini", "gpt-5-mini"]
};

let activeModelIndex = 0;

const AI_SYSTEM_PROMPT = `Bạn là trợ lý hướng nghiệp thông minh của CAREER QR, một công cụ giúp học sinh THPT tra cứu ngành học, trường đào tạo và tổ hợp xét tuyển.
Nhiệm vụ của bạn:
- Trả lời ngắn gọn, sinh động, dễ hiểu, dùng định dạng gạch đầu dòng rõ ràng.
- Giúp học sinh suy nghĩ rõ hơn về sở thích, năng lực, và các lựa chọn ngành/trường — KHÔNG quyết định thay các bạn.
- Khi học sinh hỏi thông tin tuyển sinh cụ thể (điểm chuẩn, chỉ tiêu, học phí...), nhắc các bạn kiểm tra lại trên website tuyển sinh chính thức của trường vì thông tin có thể thay đổi theo năm.
- Không đưa ra kết luận áp đặt "bạn nên chọn ngành X". Hãy gợi mở, phân tích ưu/nhược điểm và định hướng thực tế.
- Nếu học sinh căng thẳng, hãy động viên và khích lệ.
Trả lời bằng tiếng Việt, phong cách thân thiện, tràn đầy năng lượng như một người anh/chị cố vấn hướng nghiệp tận tâm.`;

async function careerAIChat(messages, opts = {}) {
  const models = AI_CONFIG.MODELS;

  for (let i = 0; i < models.length; i++) {
    const idx = (activeModelIndex + i) % models.length;
    const model = models[idx];

    try {
      const response = await fetch(AI_CONFIG.API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + AI_CONFIG.API_KEY
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: opts.temperature ?? 0.6
        })
      });

      if (response.status === 503) {
        console.warn("CAREER QR: model " + model + " đang quá tải (503), thử model kế tiếp...");
        continue;
      }

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Lỗi API (${response.status}): ${errText}`);
      }

      activeModelIndex = idx;
      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content?.trim();
      if (!reply) throw new Error("AI không trả về nội dung.");
      return reply;
    } catch (e) {
      if (i === models.length - 1) throw e;
    }
  }

  activeModelIndex = 0;
  throw new Error("Tất cả model AI đều đang quá tải (503)");
}

function parseAIJson(text) {
  const cleaned = text.replace(/```json/gi, "```").split("```").join("").trim();
  const start = cleaned.indexOf("{");
  const startArr = cleaned.indexOf("[");
  let from = start;
  if (start === -1 || (startArr !== -1 && startArr < start)) from = startArr;
  const jsonSlice = from >= 0 ? cleaned.slice(from) : cleaned;
  return JSON.parse(jsonSlice);
}

// Markdown parser đơn giản an toàn cho chat
function formatMessageContent(text) {
  if (!text) return "";
  let safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold **text**
  safe = safe.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  // Italic *text*
  safe = safe.replace(/\*(.*?)\*/g, "<em>$1</em>");
  // Bullet points
  safe = safe.replace(/(?:^|\n)[-•]\s+(.*?)(?=\n|$)/g, "<br>• $1");
  // Newlines
  safe = safe.replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
  return safe;
}

window.CareerAI = { chat: careerAIChat, parseJson: parseAIJson };

(function () {
  let conversationHistory = [{ role: "system", content: buildSystemPrompt() }];
  let panelBuilt = false;

  function buildSystemPrompt() {
    const extra = window.CAREERQR_AI_CONTEXT
      ? `\n\nBối cảnh trang hiện tại: ${window.CAREERQR_AI_CONTEXT}`
      : "";
    return AI_SYSTEM_PROMPT + extra;
  }

  function mount() {
    const widgetWrap = document.createElement("div");
    widgetWrap.className = "ai-chat-widget-wrap";

    // Invitation Tooltip
    const tooltip = document.createElement("div");
    tooltip.className = "ai-chat-tooltip";
    tooltip.innerHTML = `<span>✨ Cần gợi ý ngành? Hỏi AI ngay!</span>`;

    const launcher = document.createElement("button");
    launcher.id = "ai-chat-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Mở trợ lý AI hướng nghiệp");
    launcher.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`;

    widgetWrap.appendChild(tooltip);
    widgetWrap.appendChild(launcher);

    const panel = document.createElement("div");
    panel.id = "ai-chat-panel";
    panel.innerHTML = `
      <div class="chat-head">
        <div class="chat-head-info">
          <div class="chat-avatar-dot"></div>
          <div>
            <strong>Trợ lý AI Hướng nghiệp</strong>
            <span>Đồng hành cùng học sinh THPT 24/7</span>
          </div>
        </div>
        <button class="chat-close" type="button" aria-label="Đóng trợ lý">×</button>
      </div>
      <div class="chat-body" id="ai-chat-body">
        <div class="chat-msg bot">Chào bạn! 👋 Mình là trợ lý AI của CAREER QR. Bạn đang băn khoăn về sở thích cá nhân, cách chọn ngành hay trường nào phù hợp? Cứ hỏi mình nhé!</div>
      </div>
      <div class="chat-quick-prompts" id="chat-quick-prompts">
        <button type="button" class="chat-chip" data-q="Em thích sáng tạo và công nghệ thì nên học ngành gì?">🎨 Sáng tạo & Công nghệ</button>
        <button type="button" class="chat-chip" data-q="Tổ hợp A01 và D01 có những ngành nào dễ xin việc?">⚡ Ngành hot khối A01/D01</button>
        <button type="button" class="chat-chip" data-q="Làm sao biết mình thực sự hợp với một ngành học?">🎯 Cách chọn đúng ngành</button>
      </div>
      <div class="chat-input">
        <textarea id="ai-chat-input" placeholder="Hỏi AI bất kỳ điều gì về ngành, trường..." rows="1"></textarea>
        <button id="ai-chat-send" type="button">Gửi</button>
      </div>
    `;

    document.body.appendChild(widgetWrap);
    document.body.appendChild(panel);

    function toggleOpen() {
      const willOpen = !panel.classList.contains("open");
      panel.classList.toggle("open", willOpen);
      launcher.classList.toggle("is-hidden", willOpen);
      tooltip.style.display = willOpen ? "none" : "";
      if (willOpen) {
        document.getElementById("ai-chat-input").focus();
      }
    }

    launcher.addEventListener("click", toggleOpen);
    tooltip.addEventListener("click", toggleOpen);

    panel.querySelector(".chat-close").addEventListener("click", () => {
      panel.classList.remove("open");
      launcher.classList.remove("is-hidden");
      tooltip.style.display = "";
    });

    const input = document.getElementById("ai-chat-input");
    const sendBtn = document.getElementById("ai-chat-send");

    sendBtn.addEventListener("click", () => sendMessage());
    input.addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Quick prompt clicks
    panel.querySelectorAll(".chat-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const q = chip.dataset.q;
        if (q) {
          input.value = q;
          sendMessage();
        }
      });
    });

    panelBuilt = true;
  }

  function appendMessage(text, cls, isHtml = false) {
    const body = document.getElementById("ai-chat-body");
    const div = document.createElement("div");
    div.className = "chat-msg " + cls;
    if (isHtml) {
      div.innerHTML = text;
    } else {
      div.innerHTML = formatMessageContent(text);
    }
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  }

  async function sendMessage() {
    const input = document.getElementById("ai-chat-input");
    const sendBtn = document.getElementById("ai-chat-send");
    const text = input.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    conversationHistory.push({ role: "user", content: text });
    input.value = "";
    sendBtn.disabled = true;

    // Typing dots animation
    const typingEl = appendMessage('Đang suy nghĩ <span></span><span></span><span></span>', "bot typing", true);

    try {
      const reply = await careerAIChat(conversationHistory);
      typingEl.remove();
      appendMessage(reply, "bot");
      conversationHistory.push({ role: "assistant", content: reply });
    } catch (err) {
      typingEl.remove();
      appendMessage("Xin lỗi bạn, kết nối tới trợ lý AI đang bị gián đoạn (" + err.message + "). Bạn thử gửi lại câu hỏi hoặc tham khảo thêm với thầy cô nhé!", "error");
      console.error(err);
    } finally {
      sendBtn.disabled = false;
      input.focus();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!panelBuilt) mount();
  });
})();
