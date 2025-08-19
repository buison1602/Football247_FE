// pages/api/auth/logout.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    
    // 1. Lấy refresh token từ cookie để gửi cho backend
    const refreshToken = req.cookies.refreshToken;

    // 2. Gọi backend C# để vô hiệu hóa token (nếu cần)
    if (refreshToken) {
        try {
            await fetch('https://localhost:7087/api/Auth/Logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ refreshToken }) 
            });
            // Bỏ qua lỗi ở đây vì mục tiêu chính là xóa cookie
        } catch (error) {
            console.error("Failed to call backend logout, proceeding to clear cookie.", error);
        }
    }

    // 3. Xóa cookie bằng cách set một cookie mới với thời gian hết hạn trong quá khứ
    res.setHeader('Set-Cookie', serialize('refreshToken', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        path: '/',
        expires: new Date(0) // Set thời gian hết hạn về quá khứ
    }));

    res.status(200).json({ message: 'Successfully logged out' });
}