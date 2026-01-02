import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/api";
import { toast } from "sonner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const { data } = await api.get('/user/data');
            if (data.success) {
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Fetch user failed", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = async (email, password) => {
        const { data } = await api.post('/auth/login', { email, password });
        if (data.success) {
            await fetchUser();
            return data;
        } else {
            throw new Error(data.message);
        }
    };

    const signUp = async (name, email, password) => {
        const { data } = await api.post('/auth/register', { name, email, password });
        if (data.success) {
            await fetchUser(); // Some apps login immediately after register
            return data;
        } else {
            throw new Error(data.message);
        }
    };

    const logout = async () => {
        try {
            await api.post('/auth/logout');
            setUser(null);
            toast.success("Logged out successfully");
        } catch (error) {
            console.error("Logout Error:", error.message);
        }
    };

    const loginWithProvider = async (provider) => {
        // Placeholder for future implementation
        toast.info(`${provider} login coming soon!`);
        // Use Firebase here if hybrid, but for now we focus on pure custom auth reliability
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signUp, logout, loginWithProvider }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
