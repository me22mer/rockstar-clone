"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/cn"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    thumbSize?: number,
    trackHeight?: number,
    color?: string,
    rangeColor?: string,
  }
>(({ className, thumbSize = 16, trackHeight = 4, color = "bg-primary/20", rangeColor = "bg-zinc-500", ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className={cn(`relative h-${trackHeight} w-full grow overflow-hidden rounded-full hover:cursor-pointer`, color)}>
      <SliderPrimitive.Range className={cn(`absolute h-full`, rangeColor)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        "block rounded-full border bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        `h-${thumbSize} w-${thumbSize} border-primary/50`
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
