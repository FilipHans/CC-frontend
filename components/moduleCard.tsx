import { Button, PressEvent } from "@heroui/button";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

interface ModuleCardProps {
    title: string;
    description: string;
    price: string;
    onSelect: (e: PressEvent) => void;
    selected: boolean;
}

export function ModuleCard({title, description, price, onSelect, selected}: ModuleCardProps) {
    return (
        <article>
            <Card className={`p-4 cursor-pointer transition-all duration-300 ${selected ? "border-2 border-blue-200 shadow-lg" : "border border-gray-300"}`} onPress={onSelect}>
            <CardHeader>
                <h2>{title}</h2>
            </CardHeader>
            <CardBody>
                <p className="text-lg font-bold">{description}</p>
                <p className="text-gray-500 self-center mt-4">{price}kr</p>
            </CardBody>
            <CardFooter>
            <Button className="mt-2 w-full" onPress={onSelect}>Välj</Button>
            </CardFooter>
            </Card>
        </article>
    )
}