"use client";
import { Calendar } from "@heroui/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Accordion, AccordionItem } from "@heroui/react";

export const HeroAccordion = () => {
    const defaultContent = "big man";

return (
    <>
    <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
        </AccordionItem>
    </Accordion>
        <Calendar isReadOnly aria-label="Date (Read Only)" value={today(getLocalTimeZone())} />
    </>
);
};
