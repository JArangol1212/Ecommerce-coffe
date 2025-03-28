

import {  Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import {  Menu } from "lucide-react";
import Link from "next/link";

export function ItemMenuMobiles(){

      return (
            <Popover>

         
            <PopoverTrigger>
                  <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                  <Link href="/categories/cafe-molido" className="block"> Café molido</Link>
                  <Link href="/categories/cafe-grano" className="block"> Café Grano</Link>
                  <Link href="/categories/cafe-capsula" className="block"> Café en Capsulas</Link>
            </PopoverContent>
       
          </Popover>
      )
}