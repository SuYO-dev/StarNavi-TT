import { FC, PropsWithChildren, createContext, useState } from "react";

export interface ICellInterface {
    cellHistory: string[];
    addHistory: (newValue: string) => void;
    clearHistory: () => void;
}
const initialValue: ICellInterface = {
    cellHistory: [],
    addHistory: (newValue: string) => { },
    clearHistory: () => { }
}
export const CellContext = createContext<ICellInterface>(initialValue);


export const Context: FC<PropsWithChildren> = ({ children }) => {
    const [cellHistory, setCellHistory] = useState<string[]>([]);

    const addHistory = (newItem: string): void => {
        let arr: string[] = [...cellHistory, newItem]
        arr = arr.length > 5 ? arr.slice(1) : arr
        setCellHistory(arr);
    }
    const clearHistory = (): void => {
        setCellHistory([]);
    }

    const value = {
        cellHistory,
        addHistory,
        clearHistory
    }


    return (
        <CellContext.Provider value={value}>{children}</CellContext.Provider>
    )
}
