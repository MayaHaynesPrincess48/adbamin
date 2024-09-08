import { VercelRequest, VercelResponse } from "@vercel/node";
import puppeteer from "puppeteer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { searchParams } = new URL(req.url!, `http://${req.headers.host}`);
    const title = searchParams.get("title") ?? "Default Title";
    const description =
      searchParams.get("description") ?? "Default Description";

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const content = `
      <html>
        <body style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #f4f4f4; font-size: 32px; font-weight: 600;">
          <div style="margin-bottom: 20px;">${title}</div>
          <div style="font-size: 18px; font-weight: 400;">${description}</div>
        </body>
      </html>
    `;

    await page.setContent(content);
    const screenshot = await page.screenshot({ type: "png" });

    await browser.close();

    res.setHeader("Content-Type", "image/png");
    res.status(200).send(screenshot);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(`Failed to generate image: ${error.message}`);
    res.status(500).send("Internal Server Error");
  }
}
