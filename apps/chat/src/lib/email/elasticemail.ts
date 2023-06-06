/**
 * Elastice Email sender
 */
const apiKey = process.env.ELASTICE_EMAIL_API_KEY!;
const senderEmail = process.env.ELASTICE_EMAIL_SENDER!;

export default async function sendEmail(to: string, code: string | number) {
  const params = {
    apikey: apiKey,
    from: senderEmail,
    template: "verification_code",
    merge_name:to,
    merge_code:code,
    to: to,
    // subject: "[ChatGPT-Admin-Web] 激活码",
    // bodyHtml: `您的激活码是：${code}`,
  };
  console.log("发送邮箱：",params)
  const formData = new FormData();
  for (const key in params) {
    // @ts-ignore
    formData.append(key, params[key]);
  }

  const response = await fetch("https://api.elasticemail.com/v2/email/send", {
    method: "POST",
    body: formData,
  });

  return response.ok;
}
