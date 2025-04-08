/* eslint-disable prettier/prettier */
'use client'
import { ModuleCard } from "@/components/moduleCard";
import { useState } from "react";

export default function PricingPage() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Modules</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ModuleCard
            title="Basic"
            description="Basic module with limited features."
            price="99"
            onSelect={() => setSelectedModule("Basic")}
            selected={selectedModule === "Basic"}
          />
          <ModuleCard
            title="Pro"
            description="Pro module with advanced features."
            price="199"
            onSelect={() => setSelectedModule("Pro")}
            selected={selectedModule === "Pro"}
          />
          <ModuleCard
            title="Enterprise"
            description="Enterprise module with all features."
            price="299"
            onSelect={() => setSelectedModule("Enterprise")}
            selected={selectedModule === "Enterprise"}
          />
        </div>
      </div>
    </section>
  );
}
