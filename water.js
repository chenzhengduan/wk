const fetch = require('node-fetch');
const notionToken = 'secret_nQaS11XErjplQlmTWzy1g1Gq5ZvY0IUh4pQLaxfwpWY';  // Notion token

  // 企业微信 Webhook 发送消息
  const webhookUrl = 'http://111.230.107.130:8005/tansci/auth/webhook?key=2abc957c-2501-4467-9220-6efc5f12228e';
  const message = {
    msgtype: 'text',
    text: {
      content: `该喝水了`,
    },
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  }).then(response => response.json())
.then(data => {
  if (data.errcode === 0) {
    console.log('消息发送成功');
  } else {
    console.log('消息发送失败', data);
  }
})
.catch(error => {
  console.error('请求失败', error);
});
