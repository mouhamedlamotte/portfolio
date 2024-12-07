"use client";

import { Button } from "@/app/[locale]/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/[locale]/components/ui/card";
import { Separator } from "@/app/[locale]/components/ui/separator";
import { Icons } from "@/app/[locale]/icons";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/app/[locale]/components/ui/alert";
import { IconBrandGoogle } from "@tabler/icons-react";
import { kdebug } from "@/lib/kdebug";

export function LoginForm() {
  const params = useSearchParams();
  const error = params.get("error");
  const next = params.get("next");

  const oAuthLogin = async (provider: string) => {
    try {
      await signIn(provider, {
        callbackUrl: next ?? "/",
      });
    } catch (error) {
      kdebug("Login error:", error);
    }
  };

  return (
    <Card className="mx-auto max-w-md shadow-lg">
      <CardHeader>
        {error && (
          <AlertMessage
            variant={error === "AccessDenied" ? "destructive" : "default"}
            title={
              error === "AccessDenied" ? "Accès Refusé" : "Erreur Inconnue"
            }
            description={
              error === "AccessDenied"
                ? "Vous n'avez pas les permissions pour accéder à cette ressource."
                : "Une erreur inattendue s'est produite. Veuillez réessayer."
            }
            className="mb-4"
          />
        )}

        <CardTitle className="text-2xl font-semibold ">Bienvenue !</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="">
          Ce site est réservé aux administrateurs. Si vous souhaitez contribuer,{" "}
          <br />
          n&apos;hésitez pas à forker le projet et ajouter vos propres
          fonctionnalités.
        </CardDescription>
        <div className="flex mt-4">
          <Button variant="outline" className="flex items-center gap-2">
            Fork sur GitHub
            <Icons.github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <Separator className="mb-4" />
      <CardFooter>
        <Button
          className="w-full flex items-center justify-center gap-2"
          onClick={() => oAuthLogin("google")}
        >
          <IconBrandGoogle className="h-5 w-5" />
          Se connecter avec Google
        </Button>
      </CardFooter>
    </Card>
  );
}

const AlertMessage = ({
  variant,
  title,
  description,
  className,
}: {
  variant: "destructive" | "default";
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <Alert variant={variant} className={className}>
      <AlertCircle className="h-5 w-5 text-red-500" />
      <div>
        <AlertTitle className="font-medium text-lg">{title}</AlertTitle>
        <AlertDescription className="text-sm text-gray-700">
          {description}
        </AlertDescription>
      </div>
    </Alert>
  );
};
