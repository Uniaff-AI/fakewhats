import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Логируем данные заявки
    console.log('[UROXEL Lead]', {
      serverTimestamp: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      calltime: data.calltime || data.callTime,
      reason: data.reason,
      videoWatchTime: data.videoWatchTime,
      userAgent: data.ua || data.userAgent,
      clientTimestamp: data.ts || data.timestamp
    });

    // Здесь можно добавить интеграцию с CRM системами
    // Например: отправка в Telegram, Email, CRM API и т.д.
    
    // Пример отправки в Telegram (раскомментировать и настроить при необходимости)
    /*
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      const message = `🔥 НОВАЯ ЗАЯВКА UROXEL!\n\n👤 Имя: ${data.name}\n📞 Телефон: ${data.phone}\n⏰ Время звонка: ${data.calltime || 'Не выбрано'}\n🎯 Источник: ${data.reason}\n⏱️ Время просмотра видео: ${data.videoWatchTime || 0} сек`;
      
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });
    }
    */

    return new Response(JSON.stringify({ 
      ok: true, 
      message: 'Заявка успешно отправлена',
      timestamp: new Date().toISOString()
    }), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (e) {
    console.error('[Postback Error]', e);
    return new Response(JSON.stringify({ 
      ok: false, 
      error: 'Ошибка обработки заявки',
      details: e instanceof Error ? e.message : 'Unknown error'
    }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};


