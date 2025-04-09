
'use client';

import { Input, Form, Button } from '@heroui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const formSchema = z.object({
  logo: z.any().nullable(), // enkel filhantering
  primaryColor: z.string().min(1),
  secondaryColor: z.string().min(1),
  trainerName: z.string().min(1),
  trainerEmail: z.string().email(),
  paymentEmail: z.string().email(),
});

type Inputs = z.infer<typeof formSchema>;

export default function OnboardingForm() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logo: null,
      primaryColor: '#000000',
      secondaryColor: '#ffffff',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('Onboarding-data:', data);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue('logo', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <Form
        className="w-full max-w-lg space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Logo */}
        <label htmlFor="logo-upload" className="font-medium">Ladda upp logo</label>
        <input
          id="logo-upload"
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
        />

        {logoPreview && (
        <img
        src={logoPreview}
        alt="Förhandsvisning"
        className="w-32 h-32 object-contain border rounded"
        />
        )}


        {/* Färger */}
        <div className="space-y-2">
        <label htmlFor="primaryColor" className="font-medium">Primär färg</label>
      <input
        id="primaryColor"
        type="color"
        {...register('primaryColor')}
        className="w-16 h-10 p-0 border rounded"
      />
      {errors.primaryColor && (
        <span className="text-red-500 text-sm">
          Ogiltig färg
        </span>
      )}
    </div>


        <div className="space-y-2">
          <label htmlFor="secondaryColor" className="font-medium">Sekundär färg</label>
          <input
            id="secondaryColor"
            type="color"
            {...register('secondaryColor')}
            className="w-16 h-10 p-0 border rounded"
          />
          {errors.secondaryColor && (
            <span className="text-red-500 text-sm">
              Ogiltig färg
            </span>
          )}
        </div>

        {/* Tränare */}
        <Input
          isRequired
          className="w-full"
          defaultValue=""
          label="Coach's name plus team"
          {...register('trainerName')}
        />
        <Input
          isRequired
          className="w-full"
          defaultValue=""
          label="Coach's email"
          type="email"
          {...register('trainerEmail')}
        />

        {/* Betalningsmejl */}
        <Input
          isRequired
          className="w-full"
          defaultValue=""
          label="Payment email"
          type="email"
          {...register('paymentEmail')}
        />

        <Button type="submit" color="primary" className="w-full">
          Spara inställningar
        </Button>
      </Form>
    </div>
  );
}
