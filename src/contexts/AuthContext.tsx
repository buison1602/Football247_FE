// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { refreshToken, logoutUser } from '../services/authService';

// Định nghĩa kiểu dữ liệu cho user và response từ API
interface User {
  userId: string;
  fullName: string;
}

interface AuthResponse {
  userId: string;
  fullName: string;
  jwtToken: string;
}

// Định nghĩa kiểu dữ liệu cho Context
interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (authData: AuthResponse) => void;
  logout: () => void;
  loading: boolean; // Trạng thái loading ban đầu để kiểm tra session
}

// Tạo Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tạo Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Bắt đầu với trạng thái loading

  useEffect(() => {
    const restoreSession = async () => {
      try {
        // Chủ động gọi API refresh để lấy accessToken mới
        const data = await refreshToken();
        login(data); // Dùng lại hàm login để set state và localStorage
      } catch (error) {
        console.log("No valid session found.");
        // Nếu refresh thất bại, đảm bảo đã đăng xuất
        logout();
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = (authData: AuthResponse) => {

    const userData: User = {
      userId: authData.userId,
      fullName: authData.fullName
    };
    setUser(userData);
    setToken(authData.jwtToken);

    // Lưu vào localStorage để duy trì đăng nhập khi F5
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('jwtToken', authData.jwtToken);
  };

  const logout = () => {
    logoutUser().catch(error => {
        console.error("Logout API call failed", error);
    });

    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('jwtToken');
    // TODO: Gọi API logout để vô hiệu hóa refresh token trên server
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Tạo custom hook để sử dụng Context dễ dàng hơn
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};