"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose, // Added DialogClose
} from "@/components/ui/dialog"
import { ContactSupplierForm } from "./contact-supplier-form"
import { Button } from "../ui/button"; // For default trigger

interface ContactSupplierDialogProps {
  productName: string;
  supplierName: string;
  trigger?: React.ReactNode; // Allow custom trigger
}

export function ContactSupplierDialog({ productName, supplierName, trigger }: ContactSupplierDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleFormSuccess = () => {
    setIsOpen(false); // Close dialog on successful form submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Contact Supplier</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Contact {supplierName}</DialogTitle>
          <DialogDescription>
            Send a message to {supplierName} regarding the product: {productName}.
            They will typically respond to your email address.
          </DialogDescription>
        </DialogHeader>
        <ContactSupplierForm 
          productName={productName} 
          supplierName={supplierName}
          onSuccess={handleFormSuccess} 
        />
        {/* Optional: Add a manual close button if needed, though X is usually present */}
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
