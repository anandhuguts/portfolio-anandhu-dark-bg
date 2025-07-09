"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function FeatureAccordion({ features }) {
  return (
    <Accordion.Root
      type="single" // or "multiple" if you want multiple open
      collapsible
      className="w-full"
    >
      {features.map((feature, index) => (
        <Accordion.Item
          key={index}
          value={index.toString()}
          className="border-b border-[#454545] py-2.5"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between items-center font-medium text-[18px]">
              <span>{feature.featureName}</span>
              <ChevronDownIcon className="transition-transform duration-200 AccordionChevron" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="mt-2 text-secondary">
            {feature.featureDetails}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
