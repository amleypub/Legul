import React from 'react';
import { View, type ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import {
  Archive,
  ArrowDown,
  ArrowDownCircle,
  ArrowRightCircle,
  ArrowUp,
  ArrowUpCircle,
  Award,
  BadgeCheck,
  Bell,
  Bookmark,
  BookOpen,
  Briefcase,
  Bug,
  Calculator,
  CalendarDays,
  ChartColumn,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleHelp,
  Clock,
  Compass,
  Cloud,
  CloudOff,
  Crown,
  Divide,
  Files,
  FileText,
  Flag,
  Flame,
  Footprints,
  Gauge,
  Gavel,
  Globe,
  GitCompareArrows,
  GraduationCap,
  Handshake,
  HardHat,
  Heart,
  House,
  Info,
  Landmark,
  Leaf,
  Library,
  Lightbulb,
  List,
  Lock,
  LogOut,
  Mail,
  MessageCircle,
  MessagesSquare,
  Mic,
  MinusCircle,
  MoreHorizontal,
  Navigation,
  PenLine,
  Play,
  PlayCircle,
  PlusCircle,
  Rocket,
  RotateCcw,
  Scale,
  ScrollText,
  Search,
  Send,
  Settings2,
  Shield,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  Timer,
  Trash2,
  TrendingUp,
  TriangleAlert,
  Trophy,
  User,
  UserMinus,
  Users,
  Volume2,
  Wand2,
  X,
  XCircle,
  Zap,
  type LucideIcon,
} from 'lucide-react-native';

/**
 * I due marchi dei pulsanti di accesso.
 *
 * Lucide non li ha, e non è una dimenticanza: è un set di icone di
 * interfaccia e i loghi commerciali ne stanno fuori. Sostituirli con
 * qualcosa che somigli — la mela di Lucide è un frutto, non il marchio —
 * sarebbe sbagliato due volte: sul piano visivo, perché nessuno
 * riconoscerebbe il pulsante, e su quello delle regole, perché sia Apple
 * sia Google impongono il proprio segno su quei bottoni.
 *
 * Sono quindi tracciati a mano. Hanno la stessa firma dei glifi Lucide,
 * così entrano nella mappa senza casi particolari; ignorano `fill`
 * perché sono marchi pieni per definizione.
 */
function LogoApple({ size = 20, color = '#000000' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M16.365 1.43c0 1.14-.417 2.2-1.25 3.03-.99.99-2.13 1.56-3.35 1.47-.02-.13-.03-.27-.03-.41 0-1.09.47-2.19 1.29-3 .45-.46 1-.84 1.65-1.14.64-.29 1.25-.45 1.83-.48.02.18.03.36.03.53zM20.9 17.1c-.33.77-.73 1.48-1.19 2.13-.63.88-1.15 1.49-1.55 1.83-.62.55-1.29.83-2 .85-.51 0-1.13-.15-1.85-.44-.72-.29-1.38-.44-1.99-.44-.63 0-1.31.15-2.04.44-.73.3-1.32.45-1.77.47-.68.03-1.36-.26-2.05-.87-.43-.37-.97-1-1.62-1.9-.7-.96-1.27-2.07-1.72-3.34C2.64 14.46 2.4 13.14 2.4 11.86c0-1.47.32-2.74.96-3.8a5.63 5.63 0 0 1 2-2.02 5.42 5.42 0 0 1 2.71-.76c.54 0 1.25.17 2.13.5.88.33 1.44.5 1.69.5.19 0 .81-.2 1.87-.59 1-.36 1.84-.51 2.53-.45 1.87.15 3.27.89 4.2 2.22-1.67 1.01-2.5 2.43-2.48 4.25.02 1.42.53 2.6 1.54 3.53.45.43.96.77 1.53 1.01-.12.36-.25.7-.38 1.03z"
      />
    </Svg>
  );
}

function LogoGoogle({ size = 20 }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <Path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <Path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <Path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </Svg>
  );
}

/**
 * Icone dell'app.
 *
 * I nomi restano quelli che il codice usava prima, mentre i glifi sotto
 * sono Lucide. Non è pigrizia: cambiare insieme grafica e settanta
 * stringhe sparse in venti schermate avrebbe reso impossibile capire,
 * davanti a un'icona sbagliata, se il problema fosse la mappa o la
 * chiamata. La mappa è un punto solo da correggere.
 *
 * Le varianti `-outline` non esistono in Lucide, che è un set di soli
 * contorni: puntano allo stesso glifo della variante piena, e dove la
 * differenza contava davvero si usa `pieno` per riempire il tratto.
 */
/*
  I marchi non sono `LucideIcon` ma ne condividono la firma utile
  (`size`, `color`): il tipo si allarga qui invece di introdurre casi
  particolari nel rendering.
*/
type Glifo = LucideIcon | typeof LogoApple | typeof LogoGoogle;

const MAPPA: Record<string, Glifo> = {
  'add-circle': PlusCircle,
  'alert-circle': Info,
  archive: Archive,
  'arrow-forward-circle': ArrowRightCircle,
  'arrow-up': ArrowUp,
  'arrow-up-circle': ArrowUpCircle,
  'arrow-down': ArrowDown,
  'arrow-down-circle': ArrowDownCircle,
  bookmark: Bookmark,
  book: BookOpen,
  hammer: Gavel,
  business: Landmark,
  'chatbox-ellipses': MessageCircle,
  'color-wand': Wand2,
  library: Library,
  play: Play,
  reader: ScrollText,
  briefcase: Briefcase,
  gavel: Gavel,
  handshake: Handshake,
  'hard-hat': HardHat,
  landmark: Landmark,
  scales: Scale,
  'bug-outline': Bug,
  bulb: Lightbulb,
  'bulb-outline': Lightbulb,
  'calculator-outline': Calculator,
  calendar: CalendarDays,
  'calendar-outline': CalendarDays,
  cart: ShoppingCart,
  'chatbubble-ellipses-outline': MessageCircle,
  chatbubbles: MessagesSquare,
  'chatbubbles-outline': MessagesSquare,
  checkmark: Check,
  'checkmark-circle': CheckCircle2,
  // Passate come prop `icona=` ad altri componenti: per questo la mappa
  // non le aveva, e a schermo erano buchi.
  analytics: ChartColumn,
  compass: Compass,
  globe: Globe,
  flash: Zap,
  'log-out': LogOut,
  'logo-apple': LogoApple,
  'logo-google': LogoGoogle,
  mail: Mail,
  'paper-plane': Send,
  refresh: RotateCcw,
  time: Clock,
  'volume-high': Volume2,
  warning: TriangleAlert,
  // Pallino vuoto: la scelta non fatta in un gruppo di opzioni.
  'ellipse-outline': Circle,
  'checkmark-done': CheckCheck,
  'checkmark-done-circle': BadgeCheck,
  'chevron-forward': ChevronRight,
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  close: X,
  'close-circle': XCircle,
  'cloud-done': Cloud,
  'cloud-offline-outline': CloudOff,
  construct: Settings2,
  'create-outline': PenLine,
  crown: Crown,
  'document-attach-outline': Files,
  'document-text': FileText,
  'document-text-outline': FileText,
  'ellipsis-horizontal': MoreHorizontal,
  'file-tray-full': Files,
  flag: Flag,
  'flag-outline': Flag,
  flame: Flame,
  footsteps: Footprints,
  'git-compare': GitCompareArrows,
  heart: Heart,
  home: House,
  person: User,
  'help-circle': CircleHelp,
  'help-circle-outline': CircleHelp,
  'information-circle': Info,
  leaf: Leaf,
  'library-outline': Library,
  'list-outline': List,
  'lock-closed': Lock,
  'mail-open': Mail,
  mic: Mic,
  'mic-outline': Mic,
  navigate: Navigation,
  'options-outline': SlidersHorizontal,
  people: Users,
  'people-outline': Users,
  'person-remove': UserMinus,
  'play-circle-outline': PlayCircle,
  pulse: TrendingUp,
  'reader-outline': ScrollText,
  'refresh-circle': ArrowRightCircle,
  'remove-circle-outline': MinusCircle,
  'return-down-forward': ArrowRightCircle,
  rocket: Rocket,
  school: GraduationCap,
  'school-outline': GraduationCap,
  'search-outline': Search,
  search: Search,
  'shield-checkmark': ShieldCheck,
  'shield-checkmark-outline': ShieldCheck,
  'shield-half': Shield,
  sparkles: Sparkles,
  speedometer: Gauge,
  star: Star,
  'stopwatch-outline': Timer,
  'time-outline': Clock,
  'timer-outline': Timer,
  trash: Trash2,
  trophy: Trophy,
  'warning-outline': Info,
  notifications: Bell,
  'notifications-outline': Bell,
  calculator: Calculator,
  divide: Divide,
  checkbox: CheckCircle2,
  'square-outline': MinusCircle,
};

export type NomeIcona = string;

interface Props {
  nome: NomeIcona;
  size?: number;
  color?: string;
  /** Riempie il tratto: serve dove la variante piena aveva un significato. */
  pieno?: boolean;
  /**
   * Spessore del tratto. Il valore predefinito è più sottile del solito
   * di Lucide: accanto a una tipografia stretta un tratto a due punti
   * sembra grossolano.
   */
  strokeWidth?: number;
  /** Micro-allineamenti rispetto al testo accanto. */
  style?: ViewStyle;
}

/**
 * Restituisce il glifo, o `null` se il nome non è mappato.
 * Esportata per il test che verifica la copertura della mappa.
 */
export function glifoDi(nome: string): Glifo | null {
  return MAPPA[nome] ?? null;
}

export function Icona({ nome, size = 20, color = '#101422', pieno, strokeWidth, style }: Props) {
  const Glifo = MAPPA[nome];
  // Un nome non mappato non deve far esplodere una schermata: sparisce e
  // basta, e il test sulla copertura lo intercetta prima del rilascio.
  if (!Glifo) return null;
  const glifo = (
    <Glifo
      size={size}
      color={color}
      strokeWidth={strokeWidth ?? 1.9}
      fill={pieno ? color : 'transparent'}
    />
  );
  // I glifi Lucide sono SVG e non accettano tutte le proprietà di stile:
  // l'involucro serve solo quando lo stile c'è davvero, per non aggiungere
  // una View a ognuna delle centinaia di icone dell'app.
  return style ? <View style={style}>{glifo}</View> : glifo;
}
