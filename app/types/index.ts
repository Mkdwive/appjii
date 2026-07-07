import { JSX, ReactNode } from "react";
import { ComponentType, SVGProps } from "react";
export type IconsPropsType = SVGProps<SVGSVGElement>
export interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}
export interface SocialMediaProps {
    label: string,
    path: string,
    customClass: string,
    icon: JSX.Element,
}

export interface SliderData {
  id: number,
  SlideImage: string,
}
export interface EcosystemCard {
  id: number;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  cardClass: string;
  aosDelay: number;
  aosDuration: number;
  description: string;
  features: string[];
}
// for how it work section
export interface StepItem {
  id: number;
  stepNumber: string;
  title: string | ReactNode;
  visibleDesc: string;
  hiddenDesc: string;
  className?: string;
  icon: ReactNode;
}

export interface ChannelCardProps {
  id: number;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  aosDelay: number;
}

export interface IconsiedBgCardProps {
  id: number,
  icon: React.ReactNode,
  title: string,
  delay: number
}

export interface GradienBgIconisedCardProps {
  id: number;
  delay: number;
  className: string;
  title: string;
  description: string;
  icon: JSX.Element;
}
export interface ChooseDataType {
  id: number;
  eventKey: string;
  title: string;
  description: string;
  delay: number;
  Icon: ComponentType<IconProps>,
  image: string;
  imageAlt: string;
  infoImage: string;
  infoImageAlt: string;
}

export interface AIFeatureType {
  id: number;
  title: string;
  description: string;
  Icon:JSX.Element;
  delay: number;
}

export interface AIFeatureTabType {
  id: number;
  tabTitle: string;
  eventKey: string;
  features: AIFeatureType[];
}