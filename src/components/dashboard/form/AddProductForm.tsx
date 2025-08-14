"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateProductMutation } from "@/redux/services/products/productsApi";
import SuccessDialog from "../SuccessDialog";
import { useGetCategoriesQuery } from "@/redux/services/categorys/categoriesApi";
import { CategoryType } from "@/types/categoryType";
import { parse } from "path";

const formSchema = z.object({
  title: z.string(),
  category: z.number(),
  description: z.string(),
  price: z.number(),
  image: z
    .instanceof(File, { message: "Please select a file." })
    .refine((f) => f.size > 0, "File is empty.")
    .refine((f) => f.size <= 5 * 1024 * 1024, "Max size is 5MB.")
    .refine(
      (f) => ["image/png", "image/jpeg"].includes(f.type),
      "Only PNG or JPEG."
    ),
});

export default function AddProductForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { data: categories, isLoading } = useGetCategoriesQuery();
  const category = (categories as CategoryType[]) || [];

  const [createProduct] = useCreateProductMutation();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    images: null as File | null,
    categoryId: 0,
  });

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}files/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.location;
  };

  const handleCreateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let imageUrl = "";
      if (formData.images) {
        imageUrl = await uploadImage(formData.images);
      }

      const payload = {
        title: formData.title,
        price: formData.price,
        description: formData.description,
        categoryId: formData.categoryId,
        images: [imageUrl],
      };

      console.log(payload);

      await createProduct(payload);

      setFormData({
        title: "",
        price: 0,
        images: null,
        categoryId: 0,
        description: "",
      });
      <SuccessDialog />;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleCreateProduct} className="flex flex-col gap-4 mt-3">
        <FormField
          control={form.control}
          name="title"
          render={() => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value); // update form state
                    setFormData({ ...formData, categoryId: parseInt(value) }); // update your custom state
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      {category.map((item) => (
                        <SelectItem value={item.id.toString()}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={() => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <textarea
                  placeholder="write your description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={() => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Price"
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: parseInt(e.target.value),
                    })
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFormData({ ...formData, images: file });
                    }
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
