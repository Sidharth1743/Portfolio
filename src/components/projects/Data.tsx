import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Graphay',
    description:
      'Graphay: AI-Powered Financial Process Automation\n\n• Built an AI system to automate invoice processing, handling from receiving invoices via email to confirming payments, using smart technology to extract data and manage approvals.\n\n• Integrated features like automated email responses for missing info, Discord notifications for team approvals, and tracking all steps in a Google spreadsheet for easy oversight.',
    techStack: [
      'Python',
      'LangGraph',
      'GPT-4o',
      'Google Sheets API',
      'Google Drive API',
      'Discord API',
      'Gmail API',
      'Etherscan API'
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Sidharth1743/Graphay.git',
      }
    ],
    images: []
  },

  {
    title: 'Chronos',
    description:
      'Chronos: Semantic Intelligence for Spine Medicine\n\n• Developed a multi-agent system that converts historical spine surgery texts into ontology-linked, machine-readable knowledge graphs.\n\n• Built an automated pipeline integrating OCR (LandingAI), IPFS-based storage, semantic preprocessing (LlamaIndex), and NER with biomedical ontology mapping (GO, DOID, ChEBI, ATC). Integrated with OpenAI, OxiGraph.',
    techStack: [
      'Python',
      'TypeScript',
      'IPFS (Pinata)',
      'LlamaIndex',
      'OpenAI API',
      'JSON-LD',
      'OxiGraph',
      'Biomedical Ontologies',
      'LandingAI OCR'
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Sidharth1743/SpineDAO-Final',
      }
    ],
    images: []
  },
  {
    title: 'NanoGPT',
    description:
      'NanoGPT: Building a Minimal GPT-Style Transformer from Scratch\n\n• A step-by-step educational implementation of a decoder-only Transformer language model (similar to GPT) inspired from the paper "Attention is All You Need" and trained on character-level Shakespeare text.\n\n• The project demonstrates core concepts like self-attention, multi-head attention, positional encoding, residual connections, and layer normalization—culminating in a model that generates Shakespeare-like text.\n\n• Dataset: Tiny Shakespeare – A ~1 MB concatenated text file of all of Shakespeare\'s works (~1 million characters, 65 unique tokens including letters, punctuation, and whitespace).',
    techStack: [
      'Python',
      'PyTorch',
      'Transformer Architecture',
      'Self-Attention',
      'Multi-Head Attention',
      'Character-level Tokenization',
      'Adam Optimizer',
      'Cross-Entropy Loss'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Sidharth1743/Transformer-using-Pytorch/',
      }
    ],
    images: []
  },
  {
    title: 'eduproc',
    description:
      'Eduproc – Blockchain-based Exam Platform\n\n• A decentralized, voice-enabled online examination system built on Next.js, Thirdweb, and Pinata. Exams and results are stored on IPFS, while critical actions are recorded on-chain (Sepolia), ensuring transparency, immutability, and tamper resistance.\n\n• Students can view and take exams from an IPFS cid route, answer via UI or voice commands (e.g., "Option A", "Next", "Submit"), with local scoring and results uploaded to IPFS and anchored on-chain.\n\n• Admins can create exams with title, start time, and duration, import questions from text or document (image/PDF) using Gemini extraction, and upload exam JSON to IPFS with on-chain registration.',
    techStack: [
      'Next.js 15',
      'React 19',
      'Tailwind CSS',
      'Thirdweb',
      'Sepolia Testnet',
      'Pinata (IPFS)',
      'Google Gemini AI',
      'react-speech-recognition',
      'Blockchain'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/yourusername/eduproc',
      }
    ],
    images: []
  },
  {
    title: 'EquityInsight',
    description:
      'EquityInsight: Real-Time ESG & Financial Equity Analyzer\n\n• A web application that empowers investors with real-time equity analysis by combining key financial metrics, ESG (Environmental, Social, Governance) sustainability scores, and market sentiment indicators.\n\n• Users can evaluate stocks holistically—assessing valuation (P/E, P/B), volatility (Beta), momentum (RSI), sustainability (via WikiRate, LSEG, MSCI proxies), and public sentiment from news and Reddit—through an intuitive, authenticated dashboard with interactive visualizations.\n\n• Core Features: Real-time stock data via Yahoo Finance, ESG sustainability scores from WikiRate, market sentiment analysis using news articles and Reddit posts (via News API, Reddit API, and VADER), interactive stock performance charts, and user authentication for personalized watchlists.',
    techStack: [
      'React.js',
      'Flask (Python)',
      'Chart.js',
      'Yahoo Finance API',
      'WikiRate API',
      'News API',
      'Reddit API (PRAW)',
      'VADER Sentiment Analysis',
      'HTML/CSS',
      'JavaScript'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Sidharth1743/Anna-University-Coimbatore---Hackgrid/tree/main',
      },
    ],
    images: []
  },
  {
    title: 'Delta Headlines',
    description:
      'Delta Headlines – AI War Reporter\n\n• An AI-powered web application that transforms scanned e-newspaper images—especially from conflict zones—into concise, professional news reports with lifelike audio narration.\n\n• Uses LayoutLMv3 for layout-aware document segmentation and Tesseract OCR for accurate text extraction from newspaper images. Generates clear summaries using open-source LLMs (DeepSeek, Mistral, or Ollama2).\n\n• Converts summaries to natural-sounding speech via Kokoro TTS with toggleable male/female voice tones. Features a clean, responsive UI with real-time loading feedback during processing.',
    techStack: [
      'Flask (Python)',
      'HTML',
      'Tailwind CSS',
      'JavaScript',
      'LayoutLMv3',
      'Tesseract OCR',
      'DeepSeek LLM',
      'Mistral',
      'Ollama2',
      'Kokoro TTS'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Sidharth1743/Delta_headline',
      },
    ],
    images: []
  },

];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <div className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description.split('\n').map((line, index) => (
              <p key={index} className={line.trim() ? 'mb-3' : 'mb-0'}>
                {line}
              </p>
            ))}
          </div>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'AI Automation',
    title: 'Graphay',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Graphay' }} />,
  },

  {
    category: 'Bio x AI Hackathon Winner',
    title: 'Chronos',
    src: '/chronos.png',
    content: <ProjectContent project={{ title: 'Chronos' }} />,
  },
  {
    category: 'Deep Learning',
    title: 'NanoGPT',
    src: '/nano.png',
    content: <ProjectContent project={{ title: 'NanoGPT' }} />,
  },
  {
    category: 'Hackathon Project',
    title: 'Eduproc',
    src: '/dataipreview.png',
    content: <ProjectContent project={{ title: 'eduproc' }} />,
  },
  {
    category: 'Hackathon Project',
    title: 'EquityInsight',
    src: '/transcendancepreview.png',
    content: <ProjectContent project={{ title: 'EquityInsight' }} />,
  },
  {
    category: 'Hackathon Project',
    title: 'Delta Headlines',
    src: '/minishellpreview.png',
    content: <ProjectContent project={{ title: 'Delta Headlines' }} />,
  },

];
