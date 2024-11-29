"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/icons";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { IconBrandGoogle } from "@tabler/icons-react";

export function LoginForm() {

  const params = useSearchParams();
  const error = params.get("error");
  const next = params.get("next");


  const  oAuthLogin = async (provider: string) => {
    try {
    await signIn(provider, {
        callbackUrl: next ?? "/",
      });
    } catch (error) {
      console.log("error ===>", error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
      {error && error === "AccessDenied" ? <AlertMessage variant="destructive" title="Attention" description="Vous n'avez pas le droit de vous connecter" className="mb-2" /> 
      : error &&  <AlertMessage variant="default" title="Oups" description="Une erreur est survenue" className="mb-2" />
       }
        <CardTitle className="text-2xl">Hi !</CardTitle>
        <CardDescription>
          Si vous n&apos;etes pas propriétaire de ce site, vous ne pouvez pas vous connecter,
          <br/>
          toutes les contributions sont volontaires, vous pouvez forker le site et ajouter des fonctionnalités.
          <Button className="mt-4 w-full" variant='outline'>
            Fork
            <Icons.github />
          </Button>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4">
        <Button className="w-full" onClick={() => oAuthLogin("google")}>
          <IconBrandGoogle />
          Google
        </Button>
      </CardContent>
    </Card>
  );
}


const AlertMessage = ({ variant, title, description, className}:{variant: "destructive" | "default", title: string, description: string, className?: string}) => {
  return (
    <Alert variant={variant} className={className}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}