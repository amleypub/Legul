import React from 'react';
import { View, type ViewStyle } from 'react-native';
import {
  Archive,
  ArrowRightCircle,
  ArrowUp,
  Award,
  BadgeCheck,
  Bell,
  BookOpen,
  Briefcase,
  Bug,
  Calculator,
  CalendarDays,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleHelp,
  Clock,
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
  GraduationCap,
  GitCompareArrows,
  HardHat,
  Handshake,
  Heart,
  House,
  Info,
  Landmark,
  Leaf,
  Library,
  Lightbulb,
  List,
  Lock,
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
  ScrollText,
  Scale,
  Search,
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
  Trophy,
  User,
  UserMinus,
  Users,
  Wand2,
  X,
  XCircle,
  type LucideIcon,
} from 'lucide-react-native';

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
const MAPPA: Record<string, LucideIcon> = {
  'add-circle': PlusCircle,
  'alert-circle': Info,
  archive: Archive,
  'arrow-forward-circle': ArrowRightCircle,
  'arrow-up': ArrowUp,
  book: BookOpen,
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
export function glifoDi(nome: string): LucideIcon | null {
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
