export const projects = [
    {
        title: "LMAOCaT: Low-rank Mamba and gated Attention Optimization",
        date: "Oct 2024 - Dec 2024",
        description: [
          "Recreated LoLCATs and developed a hybrid attention framework integrating Gated Linear Attention and Mamba blocks into Llama 3.2 1B, achieving O(n) inference scaling while maintaining 34.5% accuracy on HellaSwag",
          "Implemented attention transfer and Low-Rank Adaptation (LoRA) for efficient fine-tuning, demonstrating superior performance of hybrid configurations over linear-only substitutions"
        ],
        github: "https://github.com/shitanshubhushan/Linearizing-Llama-3.2-1B/tree/main",
        tags: ["Machine Learning", "NLP", "PyTorch"],
        featured: true
      },
      {
        title: "DSA Cognitive Tutor for Binary Trees",
        date: "Sep 2024 - Dec 2024",
        description: [
          "Engineered a Flask-based intelligent tutoring system for data structures, implementing cognitive models derived from CTA to deliver adaptive learning paths and personalized feedback using GPT.",
          "Designed question generation system spanning multiple knowledge types, with dynamic difficulty adjustment based on Bloom's taxonomy proficiency tracking and spaced repetition algorithms.",
          "Built interactive visualizations and code analysis tools for tree traversal concepts, achieving significant improvements with 4/5 users reaching 100% post-test scores."
        ],
        github: "https://github.com/DdIiVvYyAaMm/DSA-Tutor-App",
        tags: ["Flask", "Python", "GPT", "Data Structures"],
        featured: true
      },
      {
        title: "Offline Reinforcement Learning for Autonomous Driving",
        date: "Feb 2024 - May 2024",
        description: [
          "Reinforcement learning project to use soft-actor critic conservative Q-learning implementation to clone human driving behavior and predict vehicle trajectories in complex roundabout scenarios.",
          "Leveraged the INTERACTION dataset to preprocess real-world driving data into {State, Action, Reward, Next State} tuples for training reinforcement learning agents. Developed a custom reward function that combines positional, velocity, and collision metrics to simulate human-like driving behavior."
        ],
        tags: ["Reinforcement Learning", "Python", "Autonomous Driving"],
        featured: false
      },
      {
        title: "Multilabel chest X-ray classification using PCA+FCN and EfficientNeXtV2",
        date: "Oct 2023 - Dec 2023",
        description: [
          "Proposed two machine learning methods to classify chest X-rays for pneumonia detection to help doctors make quicker judgement. Dataset used was ChestX-ray14, comprising of 112,120 chest X-rays.",
          "Introduced a new deep-learning efficientNet architecture called EfficientNeXtV2 - a hybrid of EfficientNet and EfficientNetV2 with a Gaussian error linear unit (GELU) as an activation function. For training, we used SGD with momentum as our optimizer and as we had an imbalanced data ratio, we used Focal loss. The model was implemented using PyTorch."
        ],
        tags: ["Deep Learning", "PyTorch", "Computer Vision", "Healthcare"],
        featured: false
      }
]; 