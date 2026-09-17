export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  github?: string;
  featured: boolean;
  status?: "ongoing" | "completed";
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
    github: "https://github.com/vincentaurellio/CS4246",
    featured: true,
    status: "completed",

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
    status: "completed",

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

  {
    slug: "word-embeddings",
    title: "Word Embeddings with LSTM",
    summary:
      "A deep learning project exploring sequence modeling and learned word representations using an LSTM-based architecture.",
    description:
      "Implemented an LSTM-based model to learn representations from sequential text data and explored how learned embeddings capture linguistic information.",
    tags: ["Deep Learning", "LSTM", "JAX", "NLP"],
    featured: false,
    overview:
      "Explored neural sequence modeling by training an LSTM-based architecture on text data. The project focused on learning useful word representations and understanding how recurrent models capture information across sequences.",
    approach: [
      "Prepared sequential text data for neural network training.",
      "Implemented an LSTM-based sequence model using JAX.",
      "Learned dense vector representations for words from training data.",
      "Evaluated the resulting embeddings to understand relationships between words.",
    ],
    results: [
      "Built an end-to-end sequence modeling pipeline using JAX.",
      "Generated learned word embeddings from the trained neural model.",
    ],
    lessons: [
      "Developed a deeper understanding of recurrent neural networks and sequence modeling.",
      "Explored how embedding spaces can represent relationships between words.",
    ],
  },
  
  {
    slug: "ddpm",
    title: "Denoising Diffusion Probabilistic Model",
    summary:
      "An implementation of a diffusion-based generative model for learning to generate data through iterative denoising.",
    description:
      "Implemented a Denoising Diffusion Probabilistic Model (DDPM) to explore the fundamentals of modern diffusion-based generative modeling.",
    tags: ["Deep Learning", "Diffusion Models", "PyTorch", "Generative AI"],
    featured: false,
    overview:
      "Explored diffusion-based generative modeling by implementing the forward noise process and learning a model to reverse the process through iterative denoising.",
    approach: [
      "Implemented the forward diffusion process that progressively adds noise to training data.",
      "Designed the reverse denoising process for reconstructing clean samples.",
      "Trained a neural network to predict the noise introduced during diffusion.",
      "Generated new samples by starting from noise and iteratively denoising.",
    ],
    results: [
      "Built a working diffusion-model training and sampling pipeline.",
      "Generated samples through the learned iterative denoising process.",
    ],
    lessons: [
      "Developed an understanding of the mathematical intuition behind diffusion models.",
      "Learned how the forward and reverse diffusion processes work together for generation.",
    ],
  },

  {
    slug: "pokemon-card-recognition",
    title: "Pokémon Card Recognition System",
    summary:
      "An automated pipeline for detecting and identifying Pokémon TCG cards from video using object detection and visual embeddings.",
    description:
      "Building an end-to-end system that detects cards from video, extracts the sharpest crops, and identifies cards using CLIP embeddings and FAISS.",
    tags: ["Computer Vision", "YOLO", "CLIP", "FAISS"],
    featured: true,
    status: "ongoing",

    overview:
      "This project aims to automate the process of recording cards pulled from Pokémon TCG packs. The system combines object detection, image processing, and visual retrieval to detect and identify individual cards.",

    approach: [
      "Use YOLO to detect cards in video frames.",
      "Use OpenCV to extract and track individual cards.",
      "Select the sharpest crop for each detected card.",
      "Generate CLIP embeddings for card images.",
      "Use FAISS to retrieve the closest matching card from a reference dataset.",
    ],

    lessons: [
      "Exploring how computer vision and image retrieval can be combined for fine-grained card recognition.",
      "Learning how to build an end-to-end pipeline connecting detection, tracking, image processing, and recognition.",
    ],
  },
];
