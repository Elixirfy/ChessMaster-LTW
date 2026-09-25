export const ChessKnightSVG = ({
  size = 24,
  color = "currentColor",
  className
}) => <svg width={size} height={size} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" />
      <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" />
      <circle cx="9.5" cy="25.5" r="0.8" />
      <ellipse cx="14.5" cy="15.5" rx="0.5" ry="1.5" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" />
    </g>
  </svg>;
export const ChessKingSVG = ({
  size = 24,
  color = "currentColor"
}) => <svg width={size} height={size} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <g fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 22.5,11.63 L 22.5,6" strokeLinejoin="miter" />
      <path d="M 20,8 L 25,8" strokeLinejoin="miter" />
      <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" />
      <path d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37" />
    </g>
  </svg>;
export const ChessPawnSVG = ({
  size = 24,
  color = "currentColor"
}) => <svg width={size} height={size} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <g fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22.5" cy="9" r="4" />
      <path d="M 22.5,15 L 22.5,23" />
      <path d="M 16,23 L 29,23" />
      <path d="M 14.5,37 C 14.5,37 16.5,30 17.5,28 L 27.5,28 C 28.5,30 30.5,37 30.5,37" />
      <path d="M 11.5,37 L 34,37" />
    </g>
  </svg>;
export const ChessBoardSVG = ({
  size = 24,
  color = "currentColor"
}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
    <rect x="2" y="2" width="5" height="5" fill={color} />
    <rect x="12" y="2" width="5" height="5" fill={color} />
    <rect x="7" y="7" width="5" height="5" fill={color} />
    <rect x="17" y="7" width="5" height="5" fill={color} />
    <rect x="2" y="12" width="5" height="5" fill={color} />
    <rect x="12" y="12" width="5" height="5" fill={color} />
    <rect x="7" y="17" width="5" height="5" fill={color} />
    <rect x="17" y="17" width="5" height="5" fill={color} />
  </svg>;
export {
  Zap,
  Trophy,
  BarChart2,
  Globe,
  Bot,
  Smartphone,
  Flame,
  Timer,
  Target,
  Rocket,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogOut,
  Settings,
  Crown,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Minus,
  Play,
  Pause,
  Flag,
  Send,
  Search,
  Bell,
  Home,
  ClipboardList,
  MessageSquare,
  Star,
  Swords,
  GraduationCap,
  CheckCircle2,
  XCircle,
  Pencil,
  Check,
  X,
  Sparkles,
  Users,
  Clock,
  Monitor,
  Layers,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Medal,
  Shield,
  Activity
} from "lucide-react";
