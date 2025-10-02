import SlidePageOne from "@/presentation/onboarding/SlidePageOne";

export interface Slide {
  id: string;
  component: React.ComponentType<any>;
}

export const onboardingItems: Slide[] = [
  {
    id: "1",
    component: SlidePageOne,
  },

];
