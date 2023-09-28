import React, { createContext, useContext, useState } from 'react';

type Candidate = {
  name: string;
  location: string;
  program: string;
  tags: string[];
  locations: string[];
  thumbnail: string;
  personal: any;
  experience: any;
  enrolled: any;
  education: any;
};

const CandidateContext = createContext<{
  candidate: Candidate | undefined;
  setCandidate: React.Dispatch<React.SetStateAction<Candidate | undefined>>;
}>({
  candidate: undefined,
  setCandidate: () => {}
});

export const CandidateProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [candidate, setCandidate] = useState<Candidate | undefined>(undefined);

  return (
    <CandidateContext.Provider value={{ candidate, setCandidate }}>
      {children}
    </CandidateContext.Provider>
  );
};

export const useCandidate = () => {
  return useContext(CandidateContext);
};
