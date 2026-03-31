import { supabase } from '@utils/supabaseClient';
import React from 'react';

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setIsAuth(!!session);
            setIsLoading(false);
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const value = {
        isAuth,
        user,
        isLoading
    };

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => React.useContext(AuthContext);