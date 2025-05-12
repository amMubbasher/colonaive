import Fuse from 'fuse.js';

interface TermCorrection {
  misspelling: string;
  correction: string;
  description?: string;
  category?: string;
}

const termCorrections: TermCorrection[] = [
  // Hemorrhoids (High Priority)
  { 
    misspelling: 'piles',
    correction: 'hemorrhoids',
    description: 'swollen veins in the rectum/anus causing pain or bleeding',
    category: 'condition'
  },
  { 
    misspelling: 'hemmoroids',
    correction: 'hemorrhoids',
    description: 'swollen veins in the rectum/anus causing pain or bleeding',
    category: 'condition'
  },
  { 
    misspelling: 'hemoroids',
    correction: 'hemorrhoids',
    description: 'swollen veins in the rectum/anus causing pain or bleeding',
    category: 'condition'
  },
  { 
    misspelling: 'heamorroids',
    correction: 'hemorrhoids',
    description: 'swollen veins in the rectum/anus causing pain or bleeding',
    category: 'condition'
  },
  
  // Constipation
  { 
    misspelling: 'constip',
    correction: 'constipation',
    description: 'difficulty passing stools',
    category: 'symptom'
  },
  { 
    misspelling: 'hard stool',
    correction: 'constipation',
    description: 'difficulty passing stools',
    category: 'symptom'
  },
  { 
    misspelling: 'difficult poop',
    correction: 'constipation',
    description: 'difficulty passing stools',
    category: 'symptom'
  },

  // Polyps
  { 
    misspelling: 'polip',
    correction: 'colorectal polyps',
    description: 'small growths in the colon or rectum',
    category: 'condition'
  },
  { 
    misspelling: 'small growth',
    correction: 'colorectal polyps',
    description: 'small growths in the colon or rectum',
    category: 'condition'
  },
  { 
    misspelling: 'colon lump',
    correction: 'colorectal polyps',
    description: 'small growths in the colon or rectum',
    category: 'condition'
  },

  // Rectal Bleeding
  { 
    misspelling: 'bleeding from anus',
    correction: 'rectal bleeding',
    description: 'blood coming from the rectum',
    category: 'symptom'
  },
  { 
    misspelling: 'blood in stool',
    correction: 'rectal bleeding',
    description: 'blood coming from the rectum',
    category: 'symptom'
  },
  { 
    misspelling: 'bloody stool',
    correction: 'rectal bleeding',
    description: 'blood coming from the rectum',
    category: 'symptom'
  },
  { 
    misspelling: 'red stool',
    correction: 'rectal bleeding',
    description: 'blood coming from the rectum',
    category: 'symptom'
  },

  // Diarrhea
  { 
    misspelling: 'loose stools',
    correction: 'diarrhea',
    description: 'frequent loose or watery stools',
    category: 'symptom'
  },
  { 
    misspelling: 'watery poop',
    correction: 'diarrhea',
    description: 'frequent loose or watery stools',
    category: 'symptom'
  },
  { 
    misspelling: 'runs',
    correction: 'diarrhea',
    description: 'frequent loose or watery stools',
    category: 'symptom'
  },
  { 
    misspelling: 'diarea',
    correction: 'diarrhea',
    description: 'frequent loose or watery stools',
    category: 'symptom'
  },
  { 
    misspelling: 'diarya',
    correction: 'diarrhea',
    description: 'frequent loose or watery stools',
    category: 'symptom'
  }
];

const fuse = new Fuse(termCorrections, {
  keys: ['misspelling'],
  threshold: 0.3, // Lower threshold for stricter matching
  includeScore: true,
});

export const findCorrection = (term: string): TermCorrection | null => {
  const words = term.toLowerCase().split(' ');
  for (const word of words) {
    const result = fuse.search(word)[0];
    if (result && result.score < 0.3) {
      return result.item;
    }
  }
  return null;
};

export const generateCorrectionMessage = (correction: TermCorrection): string => {
  if (correction.description) {
    return `Champion, did you mean ${correction.correction} (${correction.description})? If yes, let's continue — I'm here to guide you!`;
  }
  return `Champion, did you mean ${correction.correction}? If yes, let's continue — I'm here to guide you!`;
};