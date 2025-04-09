import TrainingCard from "@/components/trainingCard";

export default function UserDashboard() {
  return (
    <section className="flex flex-col gap-4">
      <TrainingCard
        description="Fördjupa dina kunskaper i speluppbyggnad, press och positionsspel"
        tags={["Grundnivå", "3v3", "Speluppbyggnad"]}
        title="Spelförståelse"
        link="https://svenskfotboll.learnifier.se/a1/catalog/selfreg/v1-30979-37e4540ea7478b72/overview"
        progress={50}
      />

      <TrainingCard
        description="Fördjupa dina kunskaper i ledarskap"
        tags={["Avancerad", "3v3", "Ledarskap"]}
        title="Ledarskap"
        link="https://google.com"
        progress={70}
      />
    </section>
  );
}
