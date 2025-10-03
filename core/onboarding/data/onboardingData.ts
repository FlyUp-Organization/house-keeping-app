import SlidePageOne from "@/presentation/onboarding/SlidePageOne";
import SlidePageTwo from "@/presentation/onboarding/SlidePageTwo";

interface SlidePros {
  id: string;
  component: React.ComponentType<any>; 
}

export const slides: SlidePros[] = [
  { id: "1", component: SlidePageOne },
  { id: "2", component: SlidePageTwo },
];
