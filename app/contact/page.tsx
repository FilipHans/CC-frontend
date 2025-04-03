"use client";
import { Form, Input, Button, Textarea } from "@heroui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { title } from "@/components/primitives";

export default function ContactPage() {
  const { register, handleSubmit } = useForm<FormInputTypes>();

  interface FormInputTypes {
    name: string;
    email: string;
    förening: string;
    phone: number;
    message: string;
  }

  const onSubmit: SubmitHandler<FormInputTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className={title()}>Intresseanmälan</h1>
      <div className="w-full max-w-2xl p-6 rounded-lg border border-white/40">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4 "
        >
          <div className="flex gap-4">
            <Input
              isRequired
              errorMessage="Please enter your name"
              label="Namn"
              labelPlacement="outside"
              //   name="name"
              placeholder="Enter your name"
              type="text"
              {...register("name")}
            />

            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              //   name="email"
              placeholder="Enter your email"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="flex gap-4">
            <Input
              isRequired
              errorMessage="Please enter your association"
              label="Förening"
              labelPlacement="outside"
              //   name="förening"
              placeholder="Enter your association"
              type="text"
              {...register("förening")}
            />
            <Input
              label="Telefonnummer"
              labelPlacement="outside"
              //   name="phone"
              placeholder="Enter your phone number"
              type="tel"
              {...register("phone")}
            />
          </div>

          <Textarea
            disableAnimation
            isRequired
            errorMessage="Please enter a message"
            classNames={{
              base: "w-full",
              input: "resize-y min-h-[100px] ",
              label: "text-left",
            }}
            label="Meddelande"
            labelPlacement="outside"
            placeholder="Enter your message"
            {...register("message")}
          />

          <div className="flex gap-2">
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
