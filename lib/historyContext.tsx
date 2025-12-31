import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StartupPlan } from '../types';

/**
 * History Context - Chat/Blueprint History Management
 * 
 * Stores user's generated blueprints locally or in the cloud.
 * Prepared for Firebase/Supabase integration.
 */

export interface HistoryItem {
  id: string;
  title: string;
  idea: string;
  sector: string;
  plan: StartupPlan;
  createdAt: Date;
  updatedAt: Date;
  isFavorite: boolean;
  tags: string[];
}

export interface HistoryState {
  items: HistoryItem[];
  isLoading: boolean;
  activeItemId: string | null;
}

export interface HistoryContextType extends HistoryState {
  addItem: (idea: string, sector: string, plan: StartupPlan) => string;
  updateItem: (id: string, updates: Partial<HistoryItem>) => void;
  deleteItem: (id: string) => void;
  getItem: (id: string) => HistoryItem | undefined;
  setActiveItem: (id: string | null) => void;
  toggleFavorite: (id: string) => void;
  searchItems: (query: string) => HistoryItem[];
  clearHistory: () => void;
  exportHistory: () => string;
  importHistory: (data: string) => void;
}

const HistoryContext = createContext<HistoryContextType | null>(null);

const HISTORY_STORAGE_KEY = 'autofounder_history';
const MAX_HISTORY_ITEMS = 100;

/**
 * FIREBASE INTEGRATION
 * 
 * Replace localStorage with Firestore:
 * 
 * import { collection, addDoc, updateDoc, deleteDoc, query, where, onSnapshot } from 'firebase/firestore';
 * 
 * addItem: async (idea, sector, plan) => {
 *   const docRef = await addDoc(collection(db, 'blueprints'), {
 *     userId: auth.currentUser.uid,
 *     idea, sector, plan,
 *     createdAt: serverTimestamp()
 *   });
 *   return docRef.id;
 * }
 */

/**
 * SUPABASE INTEGRATION
 * 
 * Replace localStorage with Supabase:
 * 
 * import { supabase } from './supabaseClient';
 * 
 * addItem: async (idea, sector, plan) => {
 *   const { data, error } = await supabase
 *     .from('blueprints')
 *     .insert({ user_id: user.id, idea, sector, plan })
 *     .select()
 *     .single();
 *   return data.id;
 * }
 */

export const HistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<HistoryState>({
    items: [],
    isLoading: true,
    activeItemId: null,
  });

  // Load history from storage on mount
  useEffect(() => {
    const loadHistory = () => {
      try {
        const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          // Convert date strings back to Date objects
          const items = parsed.map((item: any) => ({
            ...item,
            createdAt: new Date(item.createdAt),
            updatedAt: new Date(item.updatedAt),
          }));
          setState({ items, isLoading: false, activeItemId: null });
        } else {
          setState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Error loading history:', error);
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };

    loadHistory();
  }, []);

  // Save history to storage whenever items change
  useEffect(() => {
    if (!state.isLoading) {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, state.isLoading]);

  const addItem = (idea: string, sector: string, plan: StartupPlan): string => {
    const id = `blueprint_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date();
    
    // Extract name from assets or use default
    const planName = plan.assets?.brandNames?.[0] || `Blueprint ${state.items.length + 1}`;
    
    const newItem: HistoryItem = {
      id,
      title: planName,
      idea,
      sector,
      plan,
      createdAt: now,
      updatedAt: now,
      isFavorite: false,
      tags: [sector],
    };

    setState(prev => ({
      ...prev,
      items: [newItem, ...prev.items].slice(0, MAX_HISTORY_ITEMS),
      activeItemId: id,
    }));

    return id;
  };

  const updateItem = (id: string, updates: Partial<HistoryItem>) => {
    setState(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id
          ? { ...item, ...updates, updatedAt: new Date() }
          : item
      ),
    }));
  };

  const deleteItem = (id: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id),
      activeItemId: prev.activeItemId === id ? null : prev.activeItemId,
    }));
  };

  const getItem = (id: string): HistoryItem | undefined => {
    return state.items.find(item => item.id === id);
  };

  const setActiveItem = (id: string | null) => {
    setState(prev => ({ ...prev, activeItemId: id }));
  };

  const toggleFavorite = (id: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      ),
    }));
  };

  const searchItems = (query: string): HistoryItem[] => {
    const lowercaseQuery = query.toLowerCase();
    return state.items.filter(
      item =>
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.idea.toLowerCase().includes(lowercaseQuery) ||
        item.sector.toLowerCase().includes(lowercaseQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  const clearHistory = () => {
    setState({ items: [], isLoading: false, activeItemId: null });
    localStorage.removeItem(HISTORY_STORAGE_KEY);
  };

  const exportHistory = (): string => {
    return JSON.stringify(state.items, null, 2);
  };

  const importHistory = (data: string) => {
    try {
      const imported = JSON.parse(data);
      if (Array.isArray(imported)) {
        const items = imported.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt),
          updatedAt: new Date(item.updatedAt),
        }));
        setState({ items, isLoading: false, activeItemId: null });
      }
    } catch (error) {
      console.error('Error importing history:', error);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        ...state,
        addItem,
        updateItem,
        deleteItem,
        getItem,
        setActiveItem,
        toggleFavorite,
        searchItems,
        clearHistory,
        exportHistory,
        importHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = (): HistoryContextType => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};

export default HistoryContext;
