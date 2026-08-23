export const blogPosts = [
  {
    id: 'spiking-neural-networks',
    title: 'Building Spiking Neural Networks: A Practical Guide',
    excerpt: 'How bio-inspired computing architectures can achieve energy-efficient AI — from theory to implementation with Python and TensorFlow.',
    date: '2026-07-15',
    readTime: '8 min read',
    category: 'AI/ML Research',
    tags: ['SNN', 'Neuromorphic', 'TensorFlow', 'Python'],
    featured: true,
    content: `
## Why Spiking Neural Networks Matter

Traditional artificial neural networks (ANNs) process information using continuous-valued activations. But biological neurons communicate through discrete electrical pulses — **spikes**. Spiking Neural Networks (SNNs) are the third generation of neural networks that model this temporal spike-based communication.

### The Energy Problem

Modern deep learning models like GPT-4 and Llama consume enormous amounts of energy. A single training run can emit as much CO₂ as five cars over their lifetimes. SNNs offer a fundamentally different approach:

- **Event-driven computation** — neurons only fire when needed, not every forward pass
- **Temporal encoding** — information is encoded in spike timing, not just magnitude
- **Hardware synergy** — designed for neuromorphic chips like Intel's Loihi and IBM's TrueNorth

## Building an SNN from Scratch

### 1. The Leaky Integrate-and-Fire (LIF) Model

The LIF neuron is the workhorse of SNNs. It accumulates input current over time, and when the membrane potential crosses a threshold, it fires a spike and resets.

\`\`\`python
import numpy as np

class LIFNeuron:
    def __init__(self, tau=20, v_rest=-65, v_thresh=-50, v_reset=-65):
        self.tau = tau          # membrane time constant (ms)
        self.v_rest = v_rest    # resting potential (mV)
        self.v_thresh = v_thresh # spike threshold (mV)
        self.v_reset = v_reset  # reset potential (mV)
        self.v = v_rest         # current membrane potential
    
    def step(self, current, dt=1.0):
        # Leaky integration
        dv = (-(self.v - self.v_rest) + current) / self.tau
        self.v += dv * dt
        
        # Check for spike
        if self.v >= self.v_thresh:
            self.v = self.v_reset
            return True  # spike!
        return False
\`\`\`

### 2. Poisson Encoding

To feed real-world data into an SNN, we convert continuous values into spike trains using Poisson encoding:

\`\`\`python
def poisson_encode(data, duration=100, max_rate=100):
    """Convert continuous data to Poisson spike trains."""
    spike_trains = np.zeros((duration, len(data)))
    for t in range(duration):
        rates = data * max_rate
        spikes = np.random.rand(len(data)) < (rates / 1000)
        spike_trains[t] = spikes
    return spike_trains
\`\`\`

### 3. Network Architecture

For my neuromorphic computing project, I built a multi-layer SNN:

\`\`\`
Input Layer (784 neurons) → Poisson Encoding
    ↓ [spike trains]
Hidden Layer (256 LIF neurons) → Lateral Inhibition
    ↓ [spike trains]  
Output Layer (10 LIF neurons) → Rate Decoding
    ↓
Classification Decision
\`\`\`

### 4. Training with STDP

Unlike backpropagation, SNNs can be trained with **Spike-Timing Dependent Plasticity (STDP)** — a biologically plausible learning rule:

- If a pre-synaptic spike arrives **before** the post-synaptic spike → **strengthen** the connection
- If it arrives **after** → **weaken** the connection

This mimics Hebbian learning: "neurons that fire together, wire together."

## Results and Observations

After training on the MNIST dataset:
- **Accuracy**: ~92% (competitive with simple ANNs)
- **Energy**: ~10x fewer operations than equivalent ANN
- **Latency**: Classification in ~50 spike timesteps

## Key Takeaways

1. **SNNs are not a replacement for ANNs** — they excel in specific domains like edge computing, robotics, and always-on sensors
2. **The tooling is improving** — frameworks like Norse, snnTorch, and Brian2 make SNN development accessible
3. **Neuromorphic hardware is the real game-changer** — Intel's Loihi 2 can run SNNs 1000x more efficiently than GPUs

The future of AI might not be bigger models — it might be smarter, more energy-efficient ones.

---

*This post is based on my [Neuromorphic Computing SNN](https://github.com/Izumi6/neuromorphic-computing-snn) project. Check out the code on GitHub.*
    `,
  },
  {
    id: 'ml-spam-detector',
    title: 'How I Built an ML-Powered Email Spam Detector',
    excerpt: 'A deep dive into NLP preprocessing, feature engineering, and probabilistic classification — achieving high-accuracy spam detection from scratch.',
    date: '2026-06-28',
    readTime: '6 min read',
    category: 'Machine Learning',
    tags: ['NLP', 'Scikit-learn', 'Classification', 'Python'],
    featured: true,
    content: `
## The Problem

Email spam is one of the oldest problems in computer science, yet it remains incredibly relevant. Every day, over 150 billion spam emails are sent globally. Building an effective spam classifier requires understanding both NLP fundamentals and practical ML engineering.

## The Pipeline

\`\`\`
Raw Emails → Text Cleaning → TF-IDF Vectorization → Model Training → Evaluation → Deployment
\`\`\`

### Step 1: Data Preprocessing

The raw email dataset contains noise — HTML tags, special characters, inconsistent formatting. Cleaning is critical:

\`\`\`python
import pandas as pd
import re

def clean_text(text):
    text = re.sub(r'<[^>]+>', '', text)      # Remove HTML
    text = re.sub(r'[^a-zA-Z\\s]', '', text)  # Keep only letters
    text = text.lower().strip()
    return text

df = pd.read_csv('emails.csv')
df['clean_text'] = df['text'].apply(clean_text)
\`\`\`

### Step 2: TF-IDF Vectorization

TF-IDF (Term Frequency - Inverse Document Frequency) converts text into numerical features that capture word importance:

\`\`\`python
from sklearn.feature_extraction.text import TfidfVectorizer

tfidf = TfidfVectorizer(
    max_features=5000,
    stop_words='english',
    max_df=0.95,    # Ignore words appearing in >95% of docs
    min_df=5         # Ignore words appearing in <5 docs
)
X_tfidf = tfidf.fit_transform(df['clean_text'])
\`\`\`

**Why TF-IDF over simple word counts?**
- Common words like "the" and "is" get downweighted automatically
- Rare, distinctive words (like "lottery" or "winner") get higher scores
- It creates sparse, efficient feature matrices

### Step 3: Model Training

I compared two classifiers:

| Model | Accuracy | Precision | Recall | F1 |
|-------|----------|-----------|--------|-----|
| Naive Bayes | 96.2% | 0.95 | 0.94 | 0.94 |
| SVM | 97.1% | 0.97 | 0.96 | 0.96 |

\`\`\`python
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X_tfidf, df['label'], test_size=0.2, stratify=df['label']
)

# Multinomial Naive Bayes
nb = MultinomialNB(alpha=0.1)
nb.fit(X_train, y_train)

# Linear SVM
svm = LinearSVC(max_iter=1000)
svm.fit(X_train, y_train)
\`\`\`

### Step 4: What Makes Spam "Spammy"?

Looking at the highest-weighted features reveals what the model learned:

**Top spam indicators**: "free", "winner", "click", "offer", "limited", "act now", "credit", "congratulations"

**Top ham indicators**: "meeting", "project", "attached", "schedule", "regards", "update"

## Lessons Learned

1. **Data quality > model complexity** — cleaning the dataset improved accuracy by 4% without changing the model
2. **TF-IDF is surprisingly powerful** — for text classification, you don't always need word embeddings or transformers
3. **Naive Bayes is fast and effective** — for production spam filtering, speed matters as much as accuracy
4. **Class imbalance matters** — use stratified splits and look at precision/recall, not just accuracy

---

*Full code available on [GitHub](https://github.com/Izumi6/Email-Spam-Detection-System-).*
    `,
  },
  {
    id: 'shipping-7-apps-vercel',
    title: 'From Idea to Deployment: Shipping 8 Apps on Vercel',
    excerpt: 'Lessons learned from building and deploying 8 production web applications — architecture decisions, CI/CD workflows, and performance optimization.',
    date: '2026-06-10',
    readTime: '10 min read',
    category: 'Engineering',
    tags: ['Vercel', 'Next.js', 'React', 'DevOps'],
    featured: false,
    content: `
## The Challenge

Over the past year, I've shipped 8 production web applications to Vercel — from a full-stack enterprise workflow system to security dashboards and e-commerce analytics tools. Here's what I learned about building and deploying real products.

## The Apps

| App | Stack | What It Does |
|-----|-------|-------------|
| **WorkSphere OS** | Node.js, Express, MongoDB | Enterprise workflow & team management |
| **CloudSecure** | JavaScript, React | Cloud security monitoring platform |
| **Price Pulse** | HTML, CSS, JS | E-commerce price tracking & analytics |
| **Smart Study Planner** | React, Firebase Auth | Study scheduling with Google SSO |
| **Edunet** | HTML, CSS, JS | Education analytics dashboard |
| **Portfolio** | Next.js, Three.js, Framer | This website you're reading |

## Architecture Decisions That Mattered

### 1. Start with the Data Model

Every successful app started by defining the data model first. For WorkSphere OS, I mapped out 10 Mongoose models before writing a single route:

\`\`\`
User → Task → Message → Timetable → KnowledgeDoc
ActivityLog → Announcement → Download → LeaveRequest → Notification
\`\`\`

This upfront investment saved weeks of refactoring later.

### 2. API-First Design

For apps with backends, I designed the REST API before building the frontend:

\`\`\`
POST /api/auth/register     → Create account
POST /api/auth/login         → Get JWT token
GET  /api/tasks              → List user's tasks
POST /api/tasks              → Create task
PUT  /api/tasks/:id/status   → Update task status
\`\`\`

This made frontend development parallel and predictable.

### 3. Vercel-Optimized Architecture

Vercel's serverless model has constraints. I learned to design around them:

- **Edge functions** for auth middleware (faster cold starts)
- **ISR (Incremental Static Regeneration)** for pages that change occasionally
- **API routes** with connection pooling for database calls
- **Static assets** in \`public/\` for zero-latency serving

## Deployment Workflow

\`\`\`
Local Dev → Git Push → Vercel Auto-Deploy → Preview URL → Production
\`\`\`

Every push to \`main\` triggers a production deployment. Every PR gets a preview URL. This CI/CD pipeline is free and takes zero configuration.

## Performance Wins

1. **Code splitting** — Next.js automatically splits bundles per page
2. **Image optimization** — Using \`next/image\` for automatic WebP conversion and lazy loading
3. **Font optimization** — Google Fonts loaded via \`next/font\` to eliminate layout shift
4. **Bundle analysis** — Running \`@next/bundle-analyzer\` to find and eliminate large dependencies

## What I'd Do Differently

- **Start with TypeScript** — I migrated two apps mid-project. It's always easier to start with it
- **Add monitoring from day one** — Error tracking (Sentry) and analytics (Vercel Analytics) should be there from the first deploy
- **Write tests early** — Not comprehensive unit tests, but at least API endpoint tests

## Key Takeaway

Shipping is a skill. The gap between "it works locally" and "it's live and reliable" is where real engineering happens. Every one of these 8 apps taught me something different about building products that actually work in the real world.

---

*Check out all my deployed apps at [suyashvakhariya.in](https://suyashvakhariya.in/#projects).*
    `,
  },
  {
    id: 'rfid-security-systems',
    title: 'RFID Security Systems: Bridging Hardware and Software',
    excerpt: 'Designing an NFC-based car ignition system with encrypted identity authentication — from Arduino prototyping to secure embedded C++ firmware.',
    date: '2026-05-22',
    readTime: '7 min read',
    category: 'IoT / Embedded',
    tags: ['RFID', 'NFC', 'C++', 'Arduino', 'Security'],
    featured: false,
    content: `
## The Idea

What if your car key was your NFC card? No mechanical keys to lose, no RF cloning vulnerabilities of traditional keyless entry. Just tap, authenticate, drive.

I built a prototype RFID-based car ignition system using Arduino and the MFRC522 RFID reader module.

## System Architecture

\`\`\`
RFID Card/Tag (NFC)
    ↓  [tap]
MFRC522 Reader Module (SPI bus)
    ↓
Arduino Uno (UID comparison + validation)
    ↓
Relay Module → Ignition Circuit
    ↓
LED + Buzzer (feedback)
\`\`\`

## Hardware Setup

| Component | Purpose | Pin |
|-----------|---------|-----|
| MFRC522 RFID Module | Read card UIDs | SPI (pins 10-13) |
| 5V Relay Module | Control ignition | Pin 4 |
| Arduino Uno | Main controller | — |
| LED (Green/Red) | Visual feedback | Pins 5, 6 |
| Piezo Buzzer | Audio feedback | Pin 7 |

## The Core Challenge: Security

The biggest risk with RFID systems is **UID cloning**. Cheap RFID cards can have their UIDs copied in seconds. Here's how I mitigated this:

### 1. Multi-Factor Authentication

Instead of relying solely on the UID, the system validates:
- **UID match** — the card's unique identifier
- **Read validation** — multiple consecutive reads to prevent glitch attacks
- **Timing check** — cards must be held for >500ms (prevents drive-by scanning)

### 2. Signal Validation Loops

One critical issue I discovered during testing: electromagnetic interference near the relay module caused false reads. The fix was adding validation loops:

\`\`\`cpp
bool validateCard(MFRC522 &reader) {
    int validReads = 0;
    for (int i = 0; i < 3; i++) {
        if (reader.PICC_IsNewCardPresent() && reader.PICC_ReadCardSerial()) {
            String uid = getUIDString(&reader.uid);
            if (uid == authorizedUID) validReads++;
        }
        delay(100);
    }
    return validReads >= 2;  // 2 out of 3 reads must match
}
\`\`\`

This reduced false triggers by **80%** during bench testing.

### 3. Toggle Mechanism

The ignition uses a tap-to-toggle pattern:
- **Tap 1**: Ignition ON (relay closes, green LED)
- **Tap 2**: Ignition OFF (relay opens, red LED)
- **Unauthorized card**: Buzzer alarm, red LED flash

## Lessons from Hardware

Building embedded systems is fundamentally different from web development:

1. **You can't hot-reload hardware** — every change requires compile, upload, test
2. **Electromagnetic interference is real** — relays generate EMI that can corrupt SPI communication
3. **Power management matters** — the MFRC522 draws significant current; poor power design causes intermittent failures
4. **Physical security is a separate discipline** — the card reader must be tamper-resistant

## What's Next

The prototype works, but a production system would need:
- **AES-128 encrypted communication** between card and reader
- **Rolling codes** (like modern car keys) to prevent replay attacks
- **Tamper detection** on the reader module itself
- **OBD-II integration** for real vehicle systems

---

*Source code: [GitHub](https://github.com/Izumi6/RFID-Based-Car-Ignition-System)*
    `,
  },
  {
    id: 'fake-news-detection-nlp',
    title: 'Fighting Misinformation with Machine Learning',
    excerpt: 'Building a fake news detection pipeline using NLP — text vectorization, model selection, and the challenges of training on real-world data.',
    date: '2026-05-05',
    readTime: '9 min read',
    category: 'AI/ML',
    tags: ['NLP', 'Fake News', 'Python', 'ML'],
    featured: false,
    content: `
## Why This Matters

Misinformation spreads 6x faster than factual news on social media. Automated detection systems aren't a silver bullet, but they're an essential tool in the fight against fake news. Here's how I built one.

## The Dataset

I used a dataset of ~44,000 news articles, labeled as "real" or "fake". Each article has:
- **Title**: headline text
- **Body**: full article text
- **Label**: real (0) or fake (1)

The key insight: **combining title and body text** significantly improves classification accuracy, because fake news often has sensational headlines that don't match the article's substance.

\`\`\`python
df['text'] = (df['title'].fillna('') + ' ' + df['text'].fillna('')).str.strip()
\`\`\`

## The Pipeline

### 1. Text Preprocessing

\`\`\`python
from sklearn.feature_extraction.text import TfidfVectorizer

tfidf = TfidfVectorizer(
    lowercase=True,
    stop_words='english',
    max_df=0.95,   # Remove words in >95% of articles (too common)
    min_df=5        # Remove words in <5 articles (too rare)
)
\`\`\`

### 2. Model Comparison

| Model | Accuracy | Notes |
|-------|----------|-------|
| Logistic Regression | 93.8% | Best balance of speed and accuracy |
| Random Forest | 91.2% | Slower, prone to overfitting |
| Naive Bayes | 89.5% | Very fast, but lower accuracy |
| Passive Aggressive | 94.1% | Best accuracy, less interpretable |

I chose **Logistic Regression** for the final model because:
- Near-best accuracy (93.8%)
- Highly interpretable (you can see which words drive predictions)
- Fast inference (important for real-time classification)
- Low memory footprint

### 3. What the Model Learned

The most informative features reveal clear patterns:

**Strong fake indicators**: "breaking", "shocking", "you won't believe", "share this", "urgent", "exposed"

**Strong real indicators**: "according to", "officials said", "reported", "study", "data shows", "percent"

This makes intuitive sense — fake news uses emotional, sensational language, while real reporting uses attribution and evidence-based language.

## The Hard Part: Distribution Shift

The biggest challenge isn't building the model — it's keeping it accurate over time. News language evolves. New topics emerge. Political vocabulary shifts.

A model trained on 2020 election news performs poorly on 2024 climate misinformation. This is called **distribution shift**, and it's the fundamental limitation of static ML classifiers.

### Mitigation Strategies

1. **Regular retraining** — Update the model monthly with fresh labeled data
2. **Feature monitoring** — Track which features are drifting from training distribution
3. **Ensemble methods** — Combine multiple models trained on different time periods
4. **Human-in-the-loop** — Flag low-confidence predictions for human review

## Ethical Considerations

Building a fake news detector raises important questions:

- **Who decides what's "fake"?** — The ground truth labels in training data encode someone's judgment
- **Bias amplification** — Models can disproportionately flag content from certain political perspectives
- **Censorship risk** — Automated systems shouldn't be the sole arbiter of truth
- **Adversarial attacks** — Bad actors can intentionally craft text to fool the classifier

The responsible approach is to use these systems as **assistive tools** — flagging content for human review rather than automatic removal.

---

*Code: [GitHub](https://github.com/Izumi6/Fake-News-Detection-System)*
    `,
  },
  {
    id: 'famm-llm-memory',
    title: 'FAMM: Solving the Memory Problem in LLM Agents',
    excerpt: 'How we designed a future-aware memory management framework for autonomous LLM agents — addressing context degradation in long-running AI systems.',
    date: '2026-04-18',
    readTime: '12 min read',
    category: 'AI Research',
    tags: ['LLM', 'Agents', 'Memory', 'Research'],
    featured: true,
    content: `
## The Problem with LLM Memory

Large Language Models have a fundamental limitation: **finite context windows**. Even with models supporting 100K+ tokens, autonomous agents that run for hours or days inevitably face memory degradation:

- **Context overflow** — important early information gets pushed out
- **Retrieval inefficiency** — finding relevant past context becomes a needle-in-a-haystack problem
- **Memory decay** — the model's ability to reason about distant information degrades

## Our Solution: FAMM

FAMM (Future-Aware Adaptive Memory Management) is a framework we designed to address these challenges. It was published on Zenodo with DOI [10.5281/zenodo.21168000](https://doi.org/10.5281/zenodo.21168000).

### Core Architecture

\`\`\`
Incoming Context
    ↓
┌─────────────────────────────┐
│   Adaptive Memory Organizer │
│   (categorize + prioritize) │
└─────────────┬───────────────┘
              ↓
┌─────────────────────────────┐
│  Future-Aware Prioritizer   │
│  (predict future relevance) │
└─────────────┬───────────────┘
              ↓
┌─────────────────────────────┐
│  Intelligent Retriever      │
│  (multi-strategy retrieval) │
└─────────────┬───────────────┘
              ↓
┌─────────────────────────────┐
│  Dynamic Memory Optimizer   │
│  (compress + consolidate)   │
└─────────────────────────────┘
\`\`\`

### Key Innovation: Future-Aware Context Prioritization

Most memory management approaches for LLM agents are **backward-looking** — they store what happened and retrieve based on similarity to the current query. FAMM is different because it's **forward-looking**:

- It predicts which memories will be **needed in the future** based on the agent's current task trajectory
- It proactively elevates relevant memories before they're needed
- It compresses or discards information that's unlikely to be useful

Think of it like a chess player: you don't just remember past moves, you think about which past patterns are relevant to your **next** moves.

### Memory Organization Tiers

FAMM organizes memory into adaptive tiers:

1. **Active Memory** — currently relevant context (always in the prompt)
2. **Warm Memory** — recently accessed, high future-relevance score
3. **Cold Memory** — compressed summaries of older interactions
4. **Archive** — highly compressed, retrievable only on specific queries

### Intelligent Retrieval

Instead of single-strategy retrieval (e.g., just semantic similarity), FAMM uses multi-strategy retrieval:

- **Semantic search** — find contextually similar memories
- **Temporal recency** — prefer recent, relevant information
- **Task dependency** — retrieve memories that are prerequisites for current tasks
- **Predictive loading** — pre-fetch memories likely needed in the next 2-3 steps

## Experimental Results

We evaluated FAMM against baseline approaches (sliding window, naive RAG, and fixed-buffer memory):

| Approach | Task Continuity | Retrieval Accuracy | Memory Efficiency |
|----------|----------------|-------------------|------------------|
| Sliding Window | Low | N/A | High |
| Naive RAG | Medium | 72% | Medium |
| Fixed Buffer | Medium | 68% | Low |
| **FAMM** | **High** | **89%** | **High** |

FAMM showed particular strength in:
- **Multi-session tasks** — maintaining context across conversation boundaries
- **Complex reasoning chains** — keeping track of intermediate results
- **Long-term planning** — remembering goals and constraints from early in the interaction

## Why This Matters

As LLM agents move from single-turn chatbots to **autonomous systems** that operate for hours, days, or continuously, memory management becomes the bottleneck. FAMM is a step toward agents that can:

- Run customer support systems that remember user history across weeks
- Manage software projects with full context of every decision
- Conduct multi-day research with coherent, evolving understanding

## Read the Full Paper

📄 [Download PDF](https://zenodo.org/records/21168000/files/main.pdf)
🔗 [DOI: 10.5281/zenodo.21168000](https://doi.org/10.5281/zenodo.21168000)

---


*By Suyash Vakhariya and Asmita Ipper*
    `,
  },
  {
    id: 'cloud-security-dashboard-react',
    title: 'Building a Cloud Security Dashboard with React',
    excerpt: 'How I designed and built CloudSecure — a real-time cloud security monitoring platform with threat detection, compliance tracking, and automated incident response.',
    date: '2026-08-05',
    readTime: '9 min read',
    category: 'Full-Stack',
    tags: ['React', 'Cloud Security', 'Dashboard', 'JavaScript'],
    featured: false,
    content: `
## The Problem: Cloud Security is Complex

Organizations using AWS, Azure, or GCP face a constant stream of security challenges:
- **Misconfigured resources** (the #1 cause of cloud breaches)
- **Unauthorized access** attempts
- **Compliance violations** (SOC 2, HIPAA, PCI DSS)
- **Anomalous network traffic**

I built CloudSecure to provide a single-pane-of-glass view of cloud security posture.

## Architecture Overview

\`\`\`
Frontend (React SPA)
    ↓ REST API calls
Dashboard Service
    ├── Threat Monitor (real-time alerts)
    ├── Compliance Checker (policy engine)
    ├── Incident Manager (workflow automation)
    └── Analytics Engine (trend analysis)
\`\`\`

## Key Features

### 1. Real-Time Threat Monitoring

The threat dashboard displays live security events with severity-based color coding:

\`\`\`javascript
const SEVERITY_COLORS = {
  critical: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-blue-500',
  info: 'bg-gray-500',
}

function ThreatCard({ threat }) {
  return (
    <div className={\`rounded-lg border p-4 \${SEVERITY_COLORS[threat.severity]}/10 border-\${SEVERITY_COLORS[threat.severity]}/30\`}>
      <h3>{threat.title}</h3>
      <p>{threat.description}</p>
      <span className="text-xs">{threat.timestamp}</span>
    </div>
  )
}
\`\`\`

### 2. Compliance Dashboard

The compliance module tracks adherence to security frameworks:

| Framework | What We Track |
|-----------|--------------|
| SOC 2 | Access controls, encryption, monitoring |
| HIPAA | PHI protection, audit trails |
| PCI DSS | Cardholder data security |
| CIS Benchmarks | Infrastructure configuration |

Each framework has a compliance score (0-100%) calculated from individual control checks.

### 3. Incident Response Workflows

When a critical threat is detected, CloudSecure triggers automated response workflows:

1. **Alert** — Notification sent to security team
2. **Triage** — Auto-classify severity based on rules
3. **Contain** — Suggest containment actions
4. **Investigate** — Provide context and related events
5. **Resolve** — Track resolution and generate report

### 4. Analytics & Trends

The analytics engine provides:
- **Threat volume trends** (7/30/90 day views)
- **Top attack vectors** breakdown
- **Geographic distribution** of threats
- **Mean time to detection** (MTTD) and **mean time to response** (MTTR)

## Design Decisions

### Why React (Not Next.js)?

CloudSecure is a **SPA dashboard**, not a content site. It doesn't need:
- Server-side rendering (it's behind auth)
- SEO optimization (it's a private tool)
- Static generation (all data is dynamic)

A client-side React app with React Router was the right choice for this use case.

### State Management

I used React Context + useReducer for global state instead of Redux:

\`\`\`javascript
const SecurityContext = createContext()

function securityReducer(state, action) {
  switch (action.type) {
    case 'SET_THREATS':
      return { ...state, threats: action.payload }
    case 'UPDATE_COMPLIANCE':
      return { ...state, compliance: action.payload }
    case 'ADD_INCIDENT':
      return { ...state, incidents: [...state.incidents, action.payload] }
    default:
      return state
  }
}
\`\`\`

### Visualization

For charts and graphs, I used lightweight libraries:
- **Recharts** for line/bar charts (threat trends)
- **Custom SVG** for the compliance donut charts
- **CSS animations** for real-time activity indicators

## Deployment

CloudSecure is deployed on Vercel at [cloud-secure.vercel.app](https://cloud-secure.vercel.app).

Key deployment considerations:
- **Environment variables** for API keys (never committed to Git)
- **Edge functions** for API proxying
- **Automatic HTTPS** via Vercel

## Lessons Learned

1. **Security dashboards need to be fast** — If the security tool is slow, people won't use it
2. **Color-coding is critical** — Severity levels must be immediately visually distinguishable
3. **Real-time updates matter** — Stale security data is dangerous
4. **Keep it actionable** — Every alert should suggest a next step

---

*Live demo: [cloud-secure.vercel.app](https://cloud-secure.vercel.app) | Source: [GitHub](https://github.com/Izumi6/cloud-secure)*
    `,
  },
  {
    id: 'network-intrusion-detection-ml',
    title: 'Network Intrusion Detection with Machine Learning: A Complete Guide',
    excerpt: 'How to build an ML-based network intrusion detection system (NIDS) using Python — from feature engineering on network traffic data to real-time anomaly classification.',
    date: '2026-07-25',
    readTime: '10 min read',
    category: 'AI + Security',
    tags: ['Cybersecurity', 'ML', 'Python', 'Network Security'],
    featured: false,
    content: `
## Why ML for Network Security?

Traditional intrusion detection systems (IDS) rely on **signature-based detection** — they match network traffic against known attack patterns. This approach has a critical flaw: it can't detect **zero-day attacks** (new, previously unseen threats).

Machine learning offers a solution: **anomaly-based detection**. By learning what "normal" network traffic looks like, ML models can flag deviations — even attacks that have never been seen before.

## The Dataset: NSL-KDD

I used the NSL-KDD dataset, an improved version of the original KDD Cup 1999 dataset. It contains:
- **125,973 training records** and **22,544 test records**
- **41 features** per connection record
- **5 categories**: Normal, DoS, Probe, R2L, U2R

Key features include:
| Feature | Description |
|---------|-------------|
| duration | Connection length in seconds |
| protocol_type | TCP, UDP, or ICMP |
| service | Network service (HTTP, FTP, etc.) |
| flag | Connection status |
| src_bytes | Data bytes from source |
| dst_bytes | Data bytes from destination |
| logged_in | Login status (1/0) |

## The ML Pipeline

\`\`\`
Raw Network Data → Feature Engineering → Normalization → Model Training → Real-Time Classification
\`\`\`

### Step 1: Feature Engineering

Network data requires careful preprocessing:

\`\`\`python
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler

# Encode categorical features
le = LabelEncoder()
for col in ['protocol_type', 'service', 'flag']:
    df[col] = le.fit_transform(df[col])

# Normalize numerical features
scaler = StandardScaler()
numerical_cols = df.select_dtypes(include=['float64', 'int64']).columns
df[numerical_cols] = scaler.fit_transform(df[numerical_cols])
\`\`\`

### Step 2: Feature Selection

With 41 features, dimensionality reduction is important:

\`\`\`python
from sklearn.feature_selection import SelectKBest, chi2

# Select top 20 most informative features
selector = SelectKBest(chi2, k=20)
X_selected = selector.fit_transform(X, y)

# Most important features:
# src_bytes, dst_bytes, logged_in, count, srv_count,
# same_srv_rate, dst_host_srv_count, dst_host_same_srv_rate
\`\`\`

### Step 3: Model Comparison

I evaluated multiple classifiers:

| Model | Accuracy | Precision | Recall | F1 | Training Time |
|-------|----------|-----------|--------|-----|---------------|
| Random Forest | 99.2% | 0.99 | 0.99 | 0.99 | 12s |
| Decision Tree | 98.7% | 0.98 | 0.98 | 0.98 | 2s |
| SVM | 97.4% | 0.97 | 0.96 | 0.96 | 45s |
| KNN | 97.1% | 0.97 | 0.96 | 0.96 | 1s* |
| Logistic Reg | 92.3% | 0.91 | 0.90 | 0.90 | 3s |

*KNN inference is slow at scale despite fast "training"

**Winner: Random Forest** — Best accuracy, fast training, and interpretable feature importances.

### Step 4: Attack Type Classification

Beyond binary (normal vs. attack), the model classifies attack types:

\`\`\`python
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

rf = RandomForestClassifier(
    n_estimators=100,
    max_depth=20,
    min_samples_split=5,
    n_jobs=-1,
    random_state=42
)
rf.fit(X_train, y_train)

print(classification_report(y_test, rf.predict(X_test)))
\`\`\`

**Per-class results:**
- **Normal**: 99.5% precision
- **DoS**: 99.8% precision (easiest to detect — high volume)
- **Probe**: 97.2% precision (port scanning, etc.)
- **R2L**: 85.3% precision (remote to local — harder, fewer examples)
- **U2R**: 78.1% precision (user to root — rarest, most dangerous)

## Key Challenges

### 1. Class Imbalance
U2R attacks are extremely rare (<1% of data). I addressed this with:
- **SMOTE** (Synthetic Minority Over-sampling)
- **Class weights** in Random Forest
- **Evaluation by precision/recall** rather than just accuracy

### 2. Feature Drift
Network traffic patterns change over time. A model trained on 2024 traffic may not work well in 2026. Continuous retraining is essential.

### 3. False Positives
In production, false positives are expensive — they cause alert fatigue. I tuned the decision threshold to minimize false positive rate while maintaining >95% detection rate.

## Real-World Considerations

For production deployment, you'd need:
1. **Packet capture** — Tools like tcpdump or Wireshark to collect raw traffic
2. **Feature extraction** — Convert raw packets to the 41-feature format
3. **Streaming inference** — Process packets in real-time (not batch)
4. **Alert integration** — Feed detections into SIEM systems (Splunk, ELK)
5. **Model monitoring** — Track prediction confidence and retrain on drift

## Impact

Network intrusion detection is a $6.2 billion industry (2025). ML-based approaches are increasingly replacing signature-based systems because:
- They detect zero-day attacks
- They adapt to new traffic patterns
- They reduce false positive rates with proper tuning

---

*Source code: [GitHub](https://github.com/Izumi6/-Network-Intrusion-Detection-System)*
    `,
  },
]

