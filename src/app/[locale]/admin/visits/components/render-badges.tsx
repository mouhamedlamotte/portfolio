import { Button } from "@/app/[locale]/components/ui/button"
import { Icons } from "@/app/[locale]/icons"

export const RenderBroswer = ({browser}:{browser:string}) => {

    if (!browser) {
        return <Button className="px-0 hover:bg-transparent flex justify-between truncate" variant="ghost">
        <Icons.globe className="h-5 w-5" />
        <span>Unknown</span>
        </Button>
    }
   
    browser = browser.toLowerCase()
    switch (browser) {
        case "chrome":
            return <Button className="px-0 hover:bg-transparent flex justify-between truncate" variant="ghost">
            <Icons.chrome  className="h-5 w-5" />
            <span>{browser}</span>
            </Button>
        case "safari":
            return <Button className="px-0 hover:bg-transparent flex justify-between truncate" variant="ghost">
            <Icons.safari className="h-5 w-5" />
            <span>{browser}</span>
            </Button>
        case "edge":
            return <Button className="px-0 hover:bg-transparent flex justify-between truncate" variant="ghost">
            <Icons.edge className="h-5 w-5" />
            <span>{browser}</span>
            </Button>
        default:
            return <Button className="px-0 hover:bg-transparent flex justify-between truncate" variant="ghost">
            <Icons.globe className="h-5 w-5" />
            <span>{browser}</span>
            </Button>

}
}

export const RenderSource = ({ source }: { source: string }) => {

  if (!source) {
    return <Button className="px-0 hover:bg-transparent flex justify-between truncate" variant="ghost">
    <Icons.globe className="h-5 w-5" />
    <span>Unknown</span>
    </Button>
}
    source = source.toLowerCase();
    switch (source) {
      case "facebook":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.facebook className="h-5 w-5" />
            <span>{source}</span>
          </Button>
        );
      case "twitter":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.x className="h-5 w-5" />
            <span>{source}</span>
          </Button>
        );
      case "linkedin":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.linkedin className="h-5 w-5" />
            <span>{source}</span>
          </Button>
        );
        case "github":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.github className="h-5 w-5" />
            <span>{source}</span>
          </Button>
        )
        case "instagram":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.instagram className="h-5 w-5" />
            <span>{source}</span>
          </Button>
        )
      case "web":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.globe className="h-5 w-5" />
            <span>{source}</span>
          </Button>
        );
      default:
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.globe className="h-5 w-5" />
            <span>{source}</span>
          </Button>
        );
    }
  };
  

  export const RenderOS = ({ os }: { os: string }) => {

    if (!os) {
      return <Button className="px-0 hover:bg-transparent flex justify-between truncate" variant="ghost">
      <Icons.globe className="h-5 w-5" />
      <span>Unknown</span>
      </Button>
  }

    os = os.toLowerCase();
    switch (os) {
      case "windows":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.windows className="h-5 w-5" />
            <span>{os}</span>
          </Button>
        );
      case "macos":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.macos className="h-5 w-5" />
            <span>{os}</span>
          </Button>
        );
      case "linux":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.lunix className="h-5 w-5" />
            <span>{os}</span>
          </Button>
        );
      case "android":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.android className="h-5 w-5" />
            <span>{os}</span>
          </Button>
        );
      case "ios":
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.macos className="h-5 w-5" />
            <span>{os}</span>
          </Button>
        );
      default:
        return (
          <Button
            className="px-0 hover:bg-transparent flex justify-between truncate"
            variant="ghost"
          >
            <Icons.globe className="h-5 w-5" />
            <span>{os}</span>
          </Button>
        );
    }
  };