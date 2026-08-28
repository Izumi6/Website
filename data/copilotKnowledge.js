// =========================================================
// SUYASH AI COPILOT — COMPLETE OFFLINE KNOWLEDGE BASE
// Zero API cost. Instant responses. Pattern-matched queries.
// =========================================================

const PORTFOLIO_KNOWLEDGE = {
  identity: {
    name: 'Suyash Vakhariya',
    role: 'AI Engineer & Technical Product Manager',
    location: 'Pune, India',
    email: 'vakhariyasuyash@gmail.com',
    github: 'github.com/Izumi6',
    linkedin: 'linkedin.com/in/suyashvakhariya',
    resume: '/Suyash_Vakhariya_Resume.pdf',
    website: 'suyashvakhariya.in',
    availability: 'Open to AI engineering roles and TPM opportunities',
  },

  research: {
    title: 'FAMM: Future-Aware Adaptive Memory Management Framework for Long-Term Autonomous LLM Agents',
    authors: 'Suyash Vakhariya, Asmita Ipper',
    publisher: 'Zenodo (Preprint, 2025)',
    doi: '10.5281/zenodo.21168000',
    pdfUrl: 'https://zenodo.org/records/21168000/files/main.pdf',
    summary: 'A novel memory management framework for long-term autonomous LLM agents that solves context window overflow through adaptive memory organization, future-aware context prioritization, intelligent retrieval, and dynamic memory optimization. Achieves 68% token savings with 99.2% recall accuracy.',
  },

  projects: [
    {
      id: 'agent-fence',
      name: 'AgentFence',
      type: 'AI Security & Developer Tooling',
      desc: 'Local security gate for AI coding agents. Detects secret leaks (API keys, tokens), intercepts destructive commands (rm -rf, force-push), and blocks unsafe network egress BEFORE execution. Supports Model Context Protocol (MCP) server natively.',
      stack: ['Node.js', 'MCP Protocol', 'AI Security', 'DevSecOps', 'CLI'],
      live: 'https://izumi6.github.io/agent-fence/',
      github: 'https://github.com/Izumi6/agent-fence',
      section: '#projects',
    },
    {
      id: 'cloud-secure',
      name: 'CloudSecure',
      type: 'Cloud Security',
      desc: 'Enterprise cloud security platform with real-time threat monitoring, compliance dashboards, AES-256-CBC chunk-level encryption, and automated incident response workflows.',
      stack: ['JavaScript', 'React', 'Cloud Security'],
      live: 'https://cloud-secure-c411.vercel.app',
      github: 'https://github.com/Izumi6/cloud-secure',
      section: '#projects',
    },
    {
      id: 'worksphere',
      name: 'WorkSphere OS',
      type: 'Full-Stack SaaS',
      desc: 'Enterprise workflow and team management platform with task tracking, internal messaging, knowledge base, scheduling, and role-based user management with JWT auth and MongoDB.',
      stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      live: 'https://worksphere-os.vercel.app',
      github: 'https://github.com/Izumi6/Worksphere-os',
      section: '#projects',
    },
    {
      id: 'price-pulse',
      name: 'PricePulse',
      type: 'Consumer App',
      desc: 'Smart electronics price comparison across Amazon, Flipkart & Croma. Search, filter, sort, and find the best deals in India.',
      stack: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
      live: 'https://izumi6.github.io/Price-Pulse/',
      github: 'https://github.com/Izumi6/Price-Pulse',
      section: '#projects',
    },
    {
      id: 'smart-study',
      name: 'Smart Study Planner',
      type: 'EdTech & Productivity',
      desc: 'All-in-one smart study workspace with Pomodoro focus timer, AI revision schedule generator, active recall flashcard vault, and GPA tracker.',
      stack: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API'],
      live: 'https://izumi6.github.io/Smart-Study-Planner/',
      github: 'https://github.com/Izumi6/Smart-Study-Planner',
      section: '#projects',
    },
    {
      id: 'edunet',
      name: 'EduNet',
      type: 'EdTech & AI Systems',
      desc: 'Interactive engineering & AI learning ecosystem with 8 curriculum tracks, real-time algorithm visualizer sandbox, AI copilot, code playground, and certified skill quizzes.',
      stack: ['JavaScript', 'HTML5', 'CSS3', 'Algorithms'],
      live: 'https://izumi6.github.io/edunet/',
      github: 'https://github.com/Izumi6/edunet',
      section: '#projects',
    },
    {
      id: 'snn',
      name: 'Neuromorphic Computing SNN',
      type: 'AI/ML Research',
      desc: 'Bio-inspired spiking neural network architecture mimicking biological neuronal firing patterns using the Leaky Integrate-and-Fire (LIF) model for ultra-efficient signal classification.',
      stack: ['Python', 'TensorFlow', 'Neural Networks', 'SNN'],
      github: 'https://github.com/Izumi6/neuromorphic-computing-snn',
      section: '#projects',
    },
    {
      id: 'fake-news',
      name: 'Fake News Detection',
      type: 'NLP / AI',
      desc: 'NLP-powered misinformation classifier using text analysis and machine learning to identify fake news articles with high precision.',
      stack: ['Python', 'NLP', 'ML', 'Classification'],
      github: 'https://github.com/Izumi6/Fake-News-Detection-System',
      section: '#projects',
    },
    {
      id: 'spam',
      name: 'Email Spam Detection',
      type: 'AI/ML',
      desc: 'ML model trained to classify and block spam emails using NLP techniques and probabilistic filtering.',
      stack: ['Python', 'Scikit-learn', 'NLP', 'ML'],
      github: 'https://github.com/Izumi6/Email-Spam-Detection-System-',
      section: '#projects',
    },
    {
      id: 'rfid',
      name: 'RFID Car Ignition System',
      type: 'IoT/Embedded',
      desc: 'NFC/RFID-based smart ignition system allowing vehicles to start using an encrypted identity card with secure multi-factor authentication.',
      stack: ['C++', 'RFID', 'Embedded Systems', 'Arduino'],
      github: 'https://github.com/Izumi6/RFID-Based-Car-Ignition-System',
      section: '#projects',
    },
    {
      id: 'intrusion',
      name: 'Network Intrusion Detection',
      type: 'AI Cybersecurity',
      desc: 'ML-powered cybersecurity monitor classifying anomalous DDoS and network intrusion traffic patterns.',
      stack: ['Python', 'ML', 'Cybersecurity'],
      github: 'https://github.com/Izumi6/-Network-Intrusion-Detection-System',
      section: '#projects',
    },
  ],

  skills: {
    'AI/ML': ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'Neural Networks', 'SNN Research', 'Jupyter', 'Data Science'],
    'Frontend': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Three.js', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Express', 'REST APIs', 'JWT', 'PostgreSQL', 'MongoDB'],
    'Cloud/Infra': ['AWS', 'Docker', 'Vercel', 'Git'],
    'Embedded': ['C++', 'RFID/NFC', 'Arduino', 'Embedded C'],
    'Product': ['Agile/Scrum', 'PRD Writing', 'Analytics', 'Technical Leadership'],
  },

  stats: {
    aiProjects: '6+',
    deployedApps: '8+',
    githubRepos: '22+',
    researchPapers: '1 (published on Zenodo)',
  },
}

// Query matching engine — finds the best answer for a given query
const RESPONSE_PATTERNS = [
  {
    keywords: ['who', 'about', 'introduce', 'tell me about suyash', 'background'],
    response: () => {
      const p = PORTFOLIO_KNOWLEDGE.identity
      return {
        text: `Suyash Vakhariya is an **AI Engineer & Technical Product Manager** based in Pune, India. He builds production AI systems — from ML pipelines, spiking neural networks, and NLP classifiers to full-stack deployed web applications. He has published research on LLM agent memory management (FAMM framework) and has ${PORTFOLIO_KNOWLEDGE.stats.deployedApps} live deployed apps and ${PORTFOLIO_KNOWLEDGE.stats.githubRepos} public GitHub repositories.`,
        actions: [
          { type: 'JUMP', label: 'Jump to About', target: '#about' },
          { type: 'RESUME', label: 'Download Resume', target: p.resume },
        ],
      }
    },
  },
  {
    keywords: ['agentfence', 'agent fence', 'agent-fence', 'security gate', 'mcp'],
    response: () => {
      const p = PORTFOLIO_KNOWLEDGE.projects.find(x => x.id === 'agent-fence')
      return {
        text: `**AgentFence** is Suyash's AI security tool — a local security gate for AI coding agents. It intercepts destructive shell commands (like \`rm -rf\` or \`git push --force\`), detects leaked API keys and tokens, and blocks unsafe network egress *before* execution. It natively supports the **Model Context Protocol (MCP)** server, making it plug-and-play with AI coding assistants.\n\nBuilt with: ${p.stack.join(', ')}`,
        actions: [
          { type: 'LIVE', label: 'View Live Demo', target: p.live },
          { type: 'GITHUB', label: 'Open on GitHub', target: p.github },
          { type: 'JUMP', label: 'Jump to Projects', target: '#projects' },
        ],
      }
    },
  },
  {
    keywords: ['famm', 'memory management', 'llm agent', 'research', 'paper', 'published', 'zenodo'],
    response: () => {
      const r = PORTFOLIO_KNOWLEDGE.research
      return {
        text: `Suyash co-authored **"${r.title}"** published on Zenodo (2025).\n\n${r.summary}\n\nCo-author: Asmita Ipper · DOI: ${r.doi}`,
        actions: [
          { type: 'PAPER', label: 'Read the Paper', target: r.pdfUrl },
          { type: 'JUMP', label: 'Jump to Research', target: '#research' },
        ],
      }
    },
  },
  {
    keywords: ['cloudsecure', 'cloud secure', 'cloud security', 'hdfs', 'aes'],
    response: () => {
      const p = PORTFOLIO_KNOWLEDGE.projects.find(x => x.id === 'cloud-secure')
      return {
        text: `**CloudSecure** is an enterprise cloud security platform featuring real-time threat monitoring, compliance dashboards, AES-256-CBC chunk-level encryption, and automated incident response workflows.\n\nBuilt with: ${p.stack.join(', ')}`,
        actions: [
          { type: 'LIVE', label: 'View Live Demo', target: p.live },
          { type: 'GITHUB', label: 'Open on GitHub', target: p.github },
        ],
      }
    },
  },
  {
    keywords: ['snn', 'spiking', 'neuromorphic', 'neuron', 'lif', 'integrate-and-fire'],
    response: () => {
      const p = PORTFOLIO_KNOWLEDGE.projects.find(x => x.id === 'snn')
      return {
        text: `Suyash built a **bio-inspired Spiking Neural Network (SNN)** architecture mimicking biological neuronal firing patterns using the **Leaky Integrate-and-Fire (LIF)** model. Unlike traditional ANNs that use continuous activations, SNNs communicate via discrete sparse spikes, enabling ultra-low-power inference on neuromorphic hardware.\n\nYou can interact with a live SNN simulator in the **AI Architecture Lab** section on this site!\n\nBuilt with: ${p.stack.join(', ')}`,
        actions: [
          { type: 'JUMP', label: 'Try the Lab', target: '#lab' },
          { type: 'GITHUB', label: 'Open on GitHub', target: p.github },
        ],
      }
    },
  },
  {
    keywords: ['resume', 'cv', 'download', 'pdf'],
    response: () => ({
      text: `You can download Suyash's latest resume as a PDF. It covers his AI engineering experience, published research (FAMM), deployed projects, and technical skill stack.`,
      actions: [
        { type: 'RESUME', label: 'Download Resume', target: PORTFOLIO_KNOWLEDGE.identity.resume },
        { type: 'CONTACT', label: 'Send an Email', target: `mailto:${PORTFOLIO_KNOWLEDGE.identity.email}` },
      ],
    }),
  },
  {
    keywords: ['hire', 'available', 'job', 'open to', 'looking', 'opportunity', 'work with', 'contact', 'email', 'reach'],
    response: () => ({
      text: `Yes! Suyash is currently **open to AI engineering roles and Technical Product Manager opportunities**. He's based in Pune, India and open to remote positions.\n\nBest way to reach him: **${PORTFOLIO_KNOWLEDGE.identity.email}**`,
      actions: [
        { type: 'CONTACT', label: 'Send an Email', target: `mailto:${PORTFOLIO_KNOWLEDGE.identity.email}` },
        { type: 'RESUME', label: 'Download Resume', target: PORTFOLIO_KNOWLEDGE.identity.resume },
        { type: 'JUMP', label: 'Jump to Contact', target: '#contact' },
      ],
    }),
  },
  {
    keywords: ['python', 'ml project', 'machine learning', 'ai project', 'tensorflow'],
    response: () => {
      const aiProjects = PORTFOLIO_KNOWLEDGE.projects.filter(p =>
        p.stack.some(s => ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'ML', 'Neural Networks', 'SNN'].includes(s))
      )
      const list = aiProjects.map(p => `• **${p.name}** — ${p.desc.split('.')[0]}`).join('\n')
      return {
        text: `Suyash has built ${aiProjects.length} AI/ML projects in Python:\n\n${list}`,
        actions: [
          { type: 'JUMP', label: 'Jump to Projects', target: '#projects' },
          { type: 'GITHUB_ALL', label: 'View All Repos', target: 'https://github.com/Izumi6?tab=repositories' },
        ],
      }
    },
  },
  {
    keywords: ['security', 'cybersecurity', 'intrusion', 'security tool'],
    response: () => {
      const secProjects = PORTFOLIO_KNOWLEDGE.projects.filter(p =>
        p.type.toLowerCase().includes('security') || p.id === 'intrusion'
      )
      const list = secProjects.map(p => `• **${p.name}** — ${p.desc.split('.')[0]}`).join('\n')
      return {
        text: `Suyash has built ${secProjects.length} security-focused tools:\n\n${list}`,
        actions: [
          { type: 'JUMP', label: 'Jump to Projects', target: '#projects' },
        ],
      }
    },
  },
  {
    keywords: ['skill', 'stack', 'tech', 'technology', 'what does he know', 'language'],
    response: () => {
      const skills = PORTFOLIO_KNOWLEDGE.skills
      const formatted = Object.entries(skills).map(([cat, list]) => `**${cat}:** ${list.join(', ')}`).join('\n')
      return {
        text: `Here's Suyash's full technical skill stack:\n\n${formatted}`,
        actions: [
          { type: 'JUMP', label: 'Jump to Skills', target: '#skills' },
          { type: 'RESUME', label: 'Download Resume', target: PORTFOLIO_KNOWLEDGE.identity.resume },
        ],
      }
    },
  },
  {
    keywords: ['stat', 'number', 'how many', 'count', 'repo'],
    response: () => {
      const s = PORTFOLIO_KNOWLEDGE.stats
      return {
        text: `Here are Suyash's key stats:\n\n• **AI/ML Projects:** ${s.aiProjects}\n• **Deployed Live Apps:** ${s.deployedApps}\n• **GitHub Repositories:** ${s.githubRepos}\n• **Research Papers:** ${s.researchPapers}`,
        actions: [
          { type: 'GITHUB_ALL', label: 'View All Repos', target: 'https://github.com/Izumi6?tab=repositories' },
        ],
      }
    },
  },
  {
    keywords: ['worksphere', 'workflow', 'team management', 'saas'],
    response: () => {
      const p = PORTFOLIO_KNOWLEDGE.projects.find(x => x.id === 'worksphere')
      return {
        text: `**WorkSphere OS** is Suyash's enterprise SaaS platform. It features task tracking, internal messaging, a knowledge base, scheduling, and role-based user management — all secured with JWT authentication and backed by MongoDB.\n\nBuilt with: ${p.stack.join(', ')}`,
        actions: [
          { type: 'LIVE', label: 'View Live Demo', target: p.live },
          { type: 'GITHUB', label: 'Open on GitHub', target: p.github },
        ],
      }
    },
  },
  {
    keywords: ['location', 'where', 'based', 'city', 'country', 'pune'],
    response: () => ({
      text: `Suyash is based in **Pune, Maharashtra, India**. He's open to remote positions globally.`,
      actions: [
        { type: 'CONTACT', label: 'Send an Email', target: `mailto:${PORTFOLIO_KNOWLEDGE.identity.email}` },
      ],
    }),
  },
  {
    keywords: ['pricepulse', 'price pulse', 'price comparison', 'shopping'],
    response: () => {
      const p = PORTFOLIO_KNOWLEDGE.projects.find(x => x.id === 'price-pulse')
      return {
        text: `**PricePulse** is a smart electronics price comparison tool that searches across Amazon, Flipkart, and Croma to find the best deals in India. Features instant search, category filtering, and multi-store comparison.\n\nBuilt with: ${p.stack.join(', ')}`,
        actions: [
          { type: 'LIVE', label: 'View Live Demo', target: p.live },
          { type: 'GITHUB', label: 'Open on GitHub', target: p.github },
        ],
      }
    },
  },
  {
    keywords: ['edunet', 'learning', 'education', 'algorithm visualizer'],
    response: () => {
      const p = PORTFOLIO_KNOWLEDGE.projects.find(x => x.id === 'edunet')
      return {
        text: `**EduNet** is an interactive engineering & AI learning ecosystem with 8 curriculum tracks, a real-time algorithm visualizer sandbox, AI study copilot, code playground, and certified skill quizzes.\n\nBuilt with: ${p.stack.join(', ')}`,
        actions: [
          { type: 'LIVE', label: 'View Live Demo', target: p.live },
          { type: 'GITHUB', label: 'Open on GitHub', target: p.github },
        ],
      }
    },
  },
]

// Default fallback response
const FALLBACK_RESPONSE = {
  text: `I don't have a specific answer for that, but here are the best ways to learn more about Suyash:\n\n• Browse his **Projects** section for deployed apps and AI tools\n• Read his **FAMM research paper** on LLM memory management\n• Check out his **GitHub** for all 22+ repositories\n• Or just **email him** directly!`,
  actions: [
    { type: 'JUMP', label: 'Jump to Projects', target: '#projects' },
    { type: 'GITHUB_ALL', label: 'View All Repos', target: 'https://github.com/Izumi6?tab=repositories' },
    { type: 'CONTACT', label: 'Send an Email', target: `mailto:${PORTFOLIO_KNOWLEDGE.identity.email}` },
  ],
}

export function queryPortfolioAI(query) {
  const q = query.toLowerCase().trim()

  // Find best matching pattern
  let bestMatch = null
  let bestScore = 0

  for (const pattern of RESPONSE_PATTERNS) {
    let score = 0
    for (const keyword of pattern.keywords) {
      if (q.includes(keyword)) {
        score += keyword.length // longer keyword matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = pattern
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response()
  }

  return FALLBACK_RESPONSE
}

export const SUGGESTED_PROMPTS = [
  { icon: '🛡️', label: 'What is AgentFence?' },
  { icon: '🧠', label: 'Tell me about FAMM' },
  { icon: '☁️', label: 'CloudSecure overview' },
  { icon: '📄', label: 'Get his resume' },
  { icon: '💼', label: 'Is Suyash available to hire?' },
  { icon: '🔬', label: 'SNN research explained' },
  { icon: '🐍', label: 'What Python projects has he built?' },
  { icon: '🔒', label: 'What security tools has he built?' },
  { icon: '📊', label: 'What are his stats?' },
]
