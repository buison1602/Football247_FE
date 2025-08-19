// services/authService.ts

const API_BASE_URL = 'https://localhost:7087/api/Auth';

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/Login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    // Giả sử server trả về lỗi dưới dạng JSON
    try {
        const errorData = await response.json();
        throw new Error(errorData.errors?.Password?.[0] || errorData.message || 'Login failed');
    } catch {
        throw new Error('An unexpected error occurred during login.');
    }
  }

  return response.json();
};

export const registerUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/Register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  // SỬA ĐỔI: Xử lý response tương tự như hàm login
  // Vì API Register bây giờ cũng trả về đầy đủ token
  if (!response.ok) {
    try {
        // API của bạn có thể trả về lỗi validation theo format khác nhau
        const errorData = await response.text(); // Đọc lỗi dạng text trước
        try {
            const errorJson = JSON.parse(errorData); // Thử parse sang JSON
            // Lỗi từ Identity thường có format này
            const firstError = errorJson.errors?.[Object.keys(errorJson.errors)[0]]?.[0];
            throw new Error(firstError || 'Registration failed.');
        } catch {
            throw new Error(errorData || 'Registration failed.'); // Nếu không phải JSON, trả về text
        }
    } catch (e) {
        throw new Error('An unexpected error occurred during registration.');
    }
  }

  // Trả về trực tiếp JSON chứa token, không cần gọi lại loginUser nữa.
  return response.json();
};

export const refreshToken = async () => {
  // Hàm này sẽ gọi đến API Route của Next.js, không phải backend C#
  const response = await fetch('/api/auth/refresh', {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  return response.json();
};

export const logoutUser = async () => {
    // Gọi đến API Route logout của Next.js
    await fetch('/api/auth/logout', {
        method: 'POST',
    });
};