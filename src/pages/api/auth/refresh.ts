// pages/api/auth/refresh.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // 1. Lấy refresh token từ cookie mà trình duyệt gửi đến
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token not found' });
    }

    try {
        // 2. Gọi đến backend C# từ server Next.js
        const backendResponse = await fetch('https://localhost:7087/api/Auth/Refresh', {
            method: 'POST',
            headers: {
                // Gửi cookie nhận được đến backend
                'Cookie': `refreshToken=${refreshToken}`
            }
        });

        if (!backendResponse.ok) {
            const errorData = await backendResponse.json();
            return res.status(backendResponse.status).json(errorData);
        }

        // 3. Lấy token mới từ backend và cookie mới
        const newTokens = await backendResponse.json();
        const newRefreshTokenCookie = backendResponse.headers.get('set-cookie');

        // 4. Gửi lại cookie mới về cho trình duyệt
        if (newRefreshTokenCookie) {
            res.setHeader('Set-Cookie', newRefreshTokenCookie);
        }

        // 5. Gửi dữ liệu token mới về cho client
        res.status(200).json(newTokens);

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}