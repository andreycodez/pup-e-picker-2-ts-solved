import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { ActiveTab } from '../types';

type TSectionContext = {
  activeSection: ActiveTab;
  setActiveSection: Dispatch<SetStateAction<ActiveTab>>;
};

const SectionContext = createContext({} as TSectionContext);

export const SectionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<ActiveTab>('all');

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionProvider = () => useContext(SectionContext);
