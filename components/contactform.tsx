import React from "react";
import { Form, Input, Button } from "@heroui/react";

export default function App() {
  return (
    <Form className="w-full max-w-xs">
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Button type="submit" variant="bordered">
        Submit
      </Button>
    </Form>
  );
}
