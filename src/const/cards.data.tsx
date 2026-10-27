import type { IconType } from "react-icons";

import {
    BsStarFill,
    BsBriefcaseFill,
    BsCashCoin,
    BsClipboardCheck,
    BsDribbble,
    BsFolderFill,
    BsHeadset,
} from "react-icons/bs";

export interface CardItem {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: IconType;
    gradient: {
        start: string;
        end: string;
        angle: number;
    };
}

export const cardsData: CardItem[] = [
    {
        id: 1,
        title: "Asesoría Registral",
        description: "Orientación sobre registros y trámites.",
        // image: "/images/registral.jpg",
        image: "https://picsum.photos/seed/documentos/600/360",
        icon: BsStarFill,
        gradient: { start: "#0b84c8", end: "#0867c0", angle: 135 },
    },
    {
        id: 2,
        title: "Consultoría Legal",
        description: "Asesoramiento legal personalizado.",
        // image: "/images/legal.jpg",
        image: "https://picsum.photos/seed/documentos/600/360",
        icon: BsStarFill,
        gradient: { start: "#f76c1d", end: "#f5be1b", angle: 60 },
    },
    {
        id: 3,
        title: "Gestión Empresarial",
        description: "Apoyo en la gestión de tu empresa.",
        // image: "/images/empresa.jpg",
        image: "https://picsum.photos/seed/documentos/600/360",
        icon: BsBriefcaseFill,
        gradient: { start: "#1a8b3b", end: "#58b42c", angle: 135 },
    },
    {
        id: 4,
        title: "Asesoría Financiera",
        description: "Orientación para decisiones financieras.",
        // image: "/images/finanzas.jpg",
        image: "https://picsum.photos/seed/documentos/600/360",
        icon: BsCashCoin,
        gradient: { start: "#1d0d7a", end: "#db2cc7", angle: 135 },
    },
    {
        id: 5,
        title: "Trámites Administrativos",
        description: "Acompañamiento en gestiones administrativas.",
        // image: "/images/tramites.jpg",
        image: "https://picsum.photos/seed/documentos/600/360",
        icon: BsClipboardCheck,
        gradient: { start: "#dc3545", end: "#931a25", angle: 135 },
    },
    {
        id: 6,
        title: "Asesoría Deportiva",
        description: "Orientación para actividades deportivas.",
        // image: "/images/deportes.jpg",
        image: "https://picsum.photos/seed/documentos/600/360",
        icon: BsDribbble,
        gradient: { start: "#0dcaf0", end: "#087ea9", angle: 135 },
    },
    {
        id: 7,
        title: "Gestión Documental",
        description: "Organización y seguimiento de documentos.",
        // image: "/images/documentos.jpg",
        image: "https://picsum.photos/seed/documentos/600/360",
        icon: BsFolderFill,
        gradient: { start: "#f76c1d", end: "#fbc31f", angle: 60 },
    },
    {
        id: 8,
        title: "Atención al Cliente",
        description: "Soporte y orientación personalizada.",
        // image: "/images/atencion.jpg",
        image: "https://picsum.photos/seed/documentos/600/360",
        icon: BsHeadset,
        gradient: { start: "#1a8b3b", end: "#bdd224", angle: 135 },
    },
];