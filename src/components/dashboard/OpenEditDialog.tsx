import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function OpenEditDialog({name, component} : {name:string, component: React.JSX.Element}) {
  return (
    <Dialog>
      <DialogTrigger>
          <p>{name}</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            {component}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
