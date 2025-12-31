import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Auth Context - Prepared for Firebase/Supabase Integration
 * 
 * This context provides authentication state management.
 * Replace the mock implementations with actual Firebase or Supabase calls.
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'team' | 'enterprise';
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithGitHub: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Local storage keys
const AUTH_USER_KEY = 'autofounder_user';
const AUTH_TOKEN_KEY = 'autofounder_token';

/**
 * FIREBASE INTEGRATION
 * 
 * To integrate with Firebase:
 * 1. npm install firebase
 * 2. Create a firebaseConfig.ts file with your credentials
 * 3. Replace mock functions below with Firebase Auth calls
 * 
 * Example:
 * import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
 * const auth = getAuth();
 * 
 * signIn: async (email, password) => {
 *   const result = await signInWithEmailAndPassword(auth, email, password);
 *   // Handle result
 * }
 */

/**
 * SUPABASE INTEGRATION
 * 
 * To integrate with Supabase:
 * 1. npm install @supabase/supabase-js
 * 2. Create a supabaseClient.ts file with your credentials
 * 3. Replace mock functions below with Supabase Auth calls
 * 
 * Example:
 * import { createClient } from '@supabase/supabase-js';
 * const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 * 
 * signIn: async (email, password) => {
 *   const { data, error } = await supabase.auth.signInWithPassword({ email, password });
 *   // Handle data/error
 * }
 */

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  // Load user from storage on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = localStorage.getItem(AUTH_USER_KEY);
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setState({
            user,
            isLoading: false,
            isAuthenticated: true,
          });
        } else {
          setState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Error loading user:', error);
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };

    loadUser();
  }, []);

  // Mock sign in - REPLACE WITH FIREBASE/SUPABASE
  const signIn = async (email: string, password: string): Promise<void> => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user - replace with actual auth
    const user: User = {
      id: `user_${Date.now()}`,
      email,
      name: email.split('@')[0],
      plan: 'free',
      createdAt: new Date(),
    };

    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    localStorage.setItem(AUTH_TOKEN_KEY, `mock_token_${Date.now()}`);

    setState({
      user,
      isLoading: false,
      isAuthenticated: true,
    });
  };

  // Mock sign up - REPLACE WITH FIREBASE/SUPABASE
  const signUp = async (email: string, password: string, name: string): Promise<void> => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user: User = {
      id: `user_${Date.now()}`,
      email,
      name,
      plan: 'free',
      createdAt: new Date(),
    };

    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    localStorage.setItem(AUTH_TOKEN_KEY, `mock_token_${Date.now()}`);

    setState({
      user,
      isLoading: false,
      isAuthenticated: true,
    });
  };

  // Mock sign out - REPLACE WITH FIREBASE/SUPABASE
  const signOut = async (): Promise<void> => {
    localStorage.removeItem(AUTH_USER_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  // Mock Google sign in - REPLACE WITH FIREBASE/SUPABASE
  const signInWithGoogle = async (): Promise<void> => {
    setState(prev => ({ ...prev, isLoading: true }));
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const user: User = {
      id: `google_${Date.now()}`,
      email: 'user@gmail.com',
      name: 'Google User',
      avatar: 'https://ui-avatars.com/api/?name=Google+User',
      plan: 'free',
      createdAt: new Date(),
    };

    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    setState({ user, isLoading: false, isAuthenticated: true });
  };

  // Mock GitHub sign in - REPLACE WITH FIREBASE/SUPABASE
  const signInWithGitHub = async (): Promise<void> => {
    setState(prev => ({ ...prev, isLoading: true }));
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const user: User = {
      id: `github_${Date.now()}`,
      email: 'user@github.com',
      name: 'GitHub User',
      avatar: 'https://ui-avatars.com/api/?name=GitHub+User',
      plan: 'free',
      createdAt: new Date(),
    };

    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    setState({ user, isLoading: false, isAuthenticated: true });
  };

  // Mock password reset - REPLACE WITH FIREBASE/SUPABASE
  const resetPassword = async (email: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Password reset email sent to:', email);
  };

  // Mock profile update - REPLACE WITH FIREBASE/SUPABASE
  const updateProfile = async (data: Partial<User>): Promise<void> => {
    if (!state.user) return;
    
    const updatedUser = { ...state.user, ...data };
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(updatedUser));
    setState(prev => ({ ...prev, user: updatedUser }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        signInWithGitHub,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
