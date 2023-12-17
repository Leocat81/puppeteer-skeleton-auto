import puppeteer, { KnownDevices } from "puppeteer";
import dayjs from "dayjs";

const iPhone = KnownDevices["iPhone 12"];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-fullscreen", "--disable-javascript"], // 启动全屏模式
    devtools: true,
    executablePath: "/opt/homebrew/bin/chromium",
  });
  const page = await browser.newPage();
  await page.emulate(iPhone);
  // 启用 DevTools
  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  // 载入指定网页
  await page.goto("https://zzbdiscar.vercel.app");
  await page.evaluate(() => {
    debugger; // 这里添加了 debugger; 语句触发断点
  });

  // 等待页面元素渲染
  await page.waitForSelector("#recommend", { timeout: 0 });

  await new Promise((r) => setTimeout(r, 3000));

  // 修改图片元素的 src 属性（这里仅作示例，实际操作需要根据需求修改）
  await page.evaluate(() => {
    const imgElements = Array.from(document.querySelectorAll("img")); // 获取所有图片元素
    imgElements.forEach((img, index) => {
      img.width = img.width;
      img.height = img.height;
      // 在这里可以根据需要修改图片的 src 属性
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      img.style.backgroundColor = "#EEEEEE";
    });
  });

  // await new Promise((r) => setTimeout(r, 3000));

  // 截图并保存为 example.png 文件
  await page.screenshot({ path: `dist/example_${dayjs().format("YYYY-MM-DD HH:mm:ss")}.png` });

  await browser.close();
})();
