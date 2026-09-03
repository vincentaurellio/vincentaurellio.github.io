export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  github?: string;
  featured: boolean;
  overview: string;
  approach: string[];
  results?: string[];
  lessons?: string[];
}

export const projects: Project[] = [
  {
    slug: "adversarial-rl-gridworld",
    title: "Adversarial Reinforcement Learning GridWorld",
    summary:
      "A dynamic GridWorld environment where the maze changes after every move, trained using Actor-Critic and PPO.",
    description:
      "Built a reinforcement learning environment where walls are rearranged after every agent action while maintaining a valid path to the goal.",
    tags: ["Reinforcement Learning", "PPO", "PyTorch", "Gym"],
    featured: true,

    overview:
      "This project explores reinforcement learning in an environment where the state dynamics change after every action. The agent must continuously adapt its policy while navigating a changing maze.",

    approach: [
      "Designed a procedurally generated maze with a guaranteed valid path to the goal.",
      "Rearranged walls after each agent action to create a dynamically changing environment.",
      "Implemented Actor-Critic and Proximal Policy Optimization (PPO).",
      "Used parallel environments with AsyncVectorEnv to accelerate training.",
    ],

    results: [
      "Successfully trained agents to navigate dynamically changing environments.",
      "Designed reward shaping using maze dimensions and Manhattan distance.",
    ],

    lessons: [
      "Explored how changing environment dynamics affect exploration and policy learning.",
      "Gained practical experience implementing and training PPO agents.",
    ],
  },

  {
    slug: "ai-chat-survey",
    title: "AI Chat Survey Platform",
    summary:
      "An AI-powered conversational survey platform with retrieval-augmented generation and document workflows.",
    description:
      "Built a full-stack conversational survey platform using React and TypeScript, with retrieval-augmented generation for document-aware interactions.",
    tags: ["React", "TypeScript", "RAG", "AWS"],
    github: "https://github.com/vincentaurellio/ai-chat-survey",
    featured: true,

    overview:
      "Built a business-facing AI chatbot platform designed to support conversational interactions and automate document-based workflows.",

    approach: [
      "Built the frontend from scratch using React and TypeScript.",
      "Implemented state management and API communication using Redux and Axios.",
      "Integrated retrieval-augmented generation to support document-aware responses.",
      "Used AWS and Docker to support deployment and application infrastructure.",
    ],

    results: [
      "Delivered a working full-stack AI chatbot platform.",
      "Automated document-based workflows through RAG pipelines.",
    ],

    lessons: [
      "Learned how to structure a production-oriented AI application across frontend, backend, and cloud infrastructure.",
      "Gained practical experience integrating RAG into a business-facing application.",
    ],
  },

  {
    slug: "malware-classification",
    title: "Malware Classification",
    summary:
      "A machine learning pipeline for classifying malware using byte-code and assembly-level features.",
    description:
      "Developed a malware classification pipeline using raw byte and assembly files across nine malware classes.",
    tags: ["Machine Learning", "Python", "Classification", "Data Processing"],
    featured: true,

    overview:
      "Developed a machine learning pipeline for malware classification using information extracted from both byte-code and assembly representations.",

    approach: [
      "Preprocessed raw byte files and assembly files into model-ready representations.",
      "Addressed class imbalance through undersampling.",
      "Constructed a dataset covering nine malware classes.",
      "Trained and evaluated classification models on the processed dataset.",
    ],

    results: [
      "Built a complete preprocessing and classification pipeline across multiple malware representations.",
      "Balanced the dataset across nine malware classes for model training.",
    ],

    lessons: [
      "Learned how representation choices affect machine learning pipelines for binary and assembly data.",
      "Gained experience handling class imbalance in a multi-class classification problem.",
    ],
  },
];