"use client";

import { useForm, useWatch } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useRef } from "react";
import SVGIconUpload from "../svg/svg-icon-upload";
import { cn } from "@/lib/utils";
import SVGIconInfo from "../svg/svg-icon-info";

const fileSizeLimit = 500 * 1000; // 500KB

const formSchema = z.object({
  avatar: z
    .instanceof(File, { message: "Please upload a photo." })
    .refine((file) => file.type.includes("image/"), {
      message: "Invalid image file type",
    })
    .refine((file) => file.size <= fileSizeLimit, {
      message: "File too large. Please upload a photo under 500KB.",
    }),
  fullname: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(255),
  email: z.string().email({ message: "Please enter a valid email address." }),
  github: z
    .string()
    .min(2, {
      message: "Github name must be at least 2 characters.",
    })
    .max(255)
    .regex(/^@[a-zA-Z][a-zA-Z0-9]*/, {
      message: "Entered username is invalid",
    }),
});

export default function TicketForm({
  onSubmitSuccess,
}: {
  onSubmitSuccess: (data: UserTicketData) => void;
}) {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: undefined,
      fullname: "",
      email: "",
      github: "",
    },
  });

  // detecting avatar changes in the form
  const avatarFormData = useWatch({
    control: form.control,
    name: "avatar",
  });
  // using form data to display selected avatar image
  const imageData = useMemo(
    () =>
      form.getValues("avatar")
        ? URL.createObjectURL(form.getValues("avatar"))
        : undefined,
    [avatarFormData],
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.
    onSubmitSuccess(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"z-10 mt-8 w-full max-w-md space-y-4"}
      >
        <FormField
          control={form.control}
          name="avatar"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel className="data-[error=true]:text-foreground text-xl">
                Upload Avatar
              </FormLabel>
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className={cn(
                  "bg-custom-neutral-700/20 hover:bg-custom-neutral-700/60 border-border flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed p-4 px-4 py-6 backdrop-blur-xs transition-colors",
                  "ring-border focus-visible:ring-offset-background ring-offset-2 ring-offset-transparent outline-none focus-visible:ring-2",
                )}
              >
                <div className="bg-custom-neutral-700 flex aspect-square w-12 items-center justify-center overflow-hidden rounded-xl border">
                  {imageData ? (
                    <img src={imageData} alt="user avatar" />
                  ) : (
                    <SVGIconUpload className="object-contain" />
                  )}
                </div>
                {imageData ? (
                  <div className="mt-2 flex gap-2">
                    <div
                      className="bg-custom-neutral-700 text-custom-neutral-300 cursor-pointer rounded-[4px] px-2 text-sm hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        form.resetField("avatar");
                      }}
                    >
                      Remove image
                    </div>
                    <div className="bg-custom-neutral-700 text-custom-neutral-300 cursor-pointer rounded-[4px] px-2 text-sm hover:underline">
                      Change image
                    </div>
                  </div>
                ) : (
                  <p className="text-xl">Drag and drop or click to upload</p>
                )}
              </button>
              <FormControl className="rounded-2xl">
                <input
                  type="file"
                  {...fieldProps}
                  ref={imageInputRef}
                  accept="image/*"
                  onChange={(e) =>
                    onChange(e.target.files && e.target.files[0])
                  }
                  hidden
                />
              </FormControl>
              <FormMessage
                className="flex items-center gap-1.5"
                icon={<SVGIconInfo className="stroke-destructive" />}
              >
                {!imageData && (
                  <div className="text-custom-neutral-500 flex items-center gap-1.5">
                    <SVGIconInfo className="stroke-custom-neutral-500 fill-transparent" />{" "}
                    Upload your photo (JPG or PNG, max size: 500KB).
                  </div>
                )}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="data-[error=true]:text-foreground text-xl">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-custom-neutral-700/20 hover:bg-custom-neutral-700/60 placeholder:text-custom-neutral-500 border-border focus-visible:ring-offset-background ring-border rounded-lg px-4 py-6 ring-offset-2 ring-offset-transparent backdrop-blur-xs transition-colors placeholder:text-lg focus-visible:ring-[2px] md:text-lg"
                />
              </FormControl>
              <FormMessage
                className="flex items-center gap-1.5"
                icon={<SVGIconInfo className="stroke-destructive" />}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="data-[error=true]:text-foreground text-xl">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  {...field}
                  className="bg-custom-neutral-700/20 hover:bg-custom-neutral-700/60 placeholder:text-custom-neutral-500 border-border focus-visible:ring-offset-background ring-border rounded-lg px-4 py-6 ring-offset-2 ring-offset-transparent backdrop-blur-xs transition-colors placeholder:text-lg focus-visible:ring-[2px] md:text-lg"
                />
              </FormControl>
              <FormMessage
                className="flex items-center gap-1.5"
                icon={<SVGIconInfo className="stroke-destructive" />}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="github"
          render={({ field: { onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel className="data-[error=true]:text-foreground text-xl">
                GitHub Username
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="@yourusername"
                  {...fieldProps}
                  className="bg-custom-neutral-700/20 hover:bg-custom-neutral-700/60 placeholder:text-custom-neutral-500 border-border focus-visible:ring-offset-background ring-border rounded-lg px-4 py-6 ring-offset-2 ring-offset-transparent backdrop-blur-xs transition-colors placeholder:text-lg focus-visible:ring-[2px] md:text-lg"
                  onChange={(e) => {
                    const value = e.target.value;
                    onChange(
                      value.length > 0 && value[0] !== "@"
                        ? "@" + value
                        : value,
                    );
                  }}
                />
              </FormControl>
              <FormMessage
                className="flex items-center gap-1.5"
                icon={<SVGIconInfo className="stroke-destructive" />}
              />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-custom-orange-500 hover:bg-custom-orange-700 text-background hover:shadow-custom-orange-500 ring-border focus-visible:ring-offset-background w-full cursor-pointer p-6 text-xl font-bold shadow-[0px_3px] ring-offset-2 ring-offset-transparent transition-all [word-spacing:0.5rem] focus-visible:ring-2"
        >
          Generate My Ticket
        </Button>
      </form>
    </Form>
  );
}
