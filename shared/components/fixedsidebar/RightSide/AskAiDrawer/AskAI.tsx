import * as React from "react"

import { cn } from "~/lib/utils"
import { useMediaQuery } from "~/hooks/use-media-query"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="p-6 hover:bg-orange-400 font-stretch-ultra-expanded  text-xl">Ask AI  Gemini</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[768px]">
          <Topview />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Ask AI Gemini</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Ask AI Gemini </DrawerTitle>
          
        </DrawerHeader>
        <Topview className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}



interface TopviewProps {
  className?: string;
}

function Topview({ className }: TopviewProps) {
  return (
    <div className={`flex justify-center items-center mt-3 p-6 ${className}`}>
      <div className="max-w-2xl text-center mx-auto bg-white p-8 rounded-lg shadow-lg border border-pink-200">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Arbor: Reshaping Future
        </h1>
        <p className="text-sm text-gray-700 mt-4">
          A Social Media for buying, selling, sharing, exchange and renting for genz demand and innovative
          solution to save future and save nature.
        </p>
        <fieldset className="border border-red-500 rounded-lg p-4 mt-4">
          <legend>Search with gemini</legend>
          <div className="flex border rounded-full p-2 shadow-md mt-4 max-w-md mx-auto   border-pink-200">
            <input
              type="text"
              placeholder="e.g I want nike shoes for rent or buy under 30$"
              className="w-full outline-none px-4 "
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
}