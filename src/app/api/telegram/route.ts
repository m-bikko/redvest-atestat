import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            return NextResponse.json(
                { error: 'Telegram credentials missing in environment variables' },
                { status: 500 }
            );
        }

        // Format the message
        let message = `🔔 *Новая заявка с лендинга (Аттестат)*\n\n`;

        if (data.name) message += `👤 Имя: ${data.name}\n`;
        if (data.phone) message += `📞 Телефон: ${data.phone}\n`;
        if (data.email) message += `📧 Email: ${data.email}\n`;
        if (data.company) message += `🏢 Компания: ${data.company}\n`;

        // For Quiz data
        if (data.quizAnswers) {
            message += `\n📝 *Ответы на квиз:*\n`;
            Object.entries(data.quizAnswers).forEach(([question, answer]) => {
                message += `- ${question}: ${answer}\n`;
            });
        }

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Telegram API error:', errorData);
            throw new Error('Failed to send message to Telegram');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
