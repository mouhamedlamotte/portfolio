import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resume } from "@/data";
import Markdown from "react-markdown";
import { Section } from "./section";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <Section>
      <div className="space-y-8">
        <Card className="bg-gray-900 md:border border-gray-800  ">
          <CardHeader className="pb-4 border-b border-gray-800 flex-row items-center">
            <CardTitle className="text-xl text-gray-200">
              À propos de moi
            </CardTitle>
            <Badge className="bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 ml-auto space-x-2 py-3 px-5">
              Notion lover
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 199.54 208.48"
                className="h-4 w-4 ms-2 me-0.5 "
              >
                <path
                  d="M404,389.62l115.36-8.52c14.17-1.22,17.81-.4,26.72,6.08l36.82,25.94c6.07,4.46,8.1,5.68,8.1,10.54V565.93c0,8.92-3.24,14.19-14.57,15l-134,8.11c-8.51.4-12.56-.81-17-6.49l-27.12-35.26c-4.86-6.49-6.88-11.35-6.88-17V403.8c0-7.29,3.24-13.37,12.54-14.18Z"
                  transform="translate(-391.46 -380.63)"
                  className="fill-white"
                />
                <path
                  d="M557,450.41c.81,3.65,0,7.3-3.65,7.71l-6.07,1.2V548.5C542,551.33,537.17,553,533.11,553c-6.48,0-8.1-2-12.95-8.1L480.5,482.43v60.39L493,545.66s0,7.3-10.12,7.3L455,554.58c-.81-1.63,0-5.68,2.83-6.48l7.29-2V466.23L455,465.41a7.58,7.58,0,0,1,6.88-9.33l30-2,41.28,63.22V461.36l-10.52-1.21c-.81-4.47,2.43-7.71,6.47-8.11ZM432.75,564.71V443.93c0-5.27,1.62-7.71,6.47-8.12l131.53-7.7c4.46-.4,6.48,2.43,6.48,7.7v120c0,5.27-.81,9.74-8.1,10.14l-125.87,7.3c-7.28.4-10.51-2-10.51-8.51ZM445.5,421.33c-10.94.74-13.42.9-19.63-4.15l-15.8-12.56c-1.61-1.63-.8-3.66,3.25-4.06l110.89-8.1c9.31-.81,14.16,2.43,17.8,5.27l19,13.78c.81.41,2.84,2.84.4,2.84l-114.52,6.89Zm73.86-40.23L404,389.62c-9.3.81-12.54,6.89-12.54,14.18V530.26c0,5.68,2,10.53,6.88,17l27.12,35.26c4.45,5.68,8.51,6.89,17,6.49l134-8.11c11.33-.81,14.57-6.08,14.57-15V423.66c0-4.61-1.82-5.93-7.18-9.87l-.92-.67-36.82-25.94c-8.91-6.48-12.55-7.3-26.72-6.08Z"
                  transform="translate(-391.46 -380.63)"
                  style={{ fillRule: "evenodd" }}
                />
              </svg>
              🤓
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300 py-4">
            {/* <div>
              <p className="text-lg">
                <span className="text-2xl font-bold text-blue-400 ">
                  🎉 Mouhamed Lamotte !
                </span>
              </p>
              <p className="mt-4">
                Un{" "}
                <span className="font-semibold text-blue-300">code lover</span>{" "}
                basé à Dakar 🌍, toujours en mode{" "}
                <span className="font-semibold text-blue-300">créa vibes</span>{" "}
                pour inventer des solutions web{" "}
                <span className="font-semibold text-blue-300">
                  qui claquent
                </span>{" "}
                et qui répondent à des vrais besoins. 🛠️ Passionné par le
                mélange des outils modernes et des challenges réels, je me
                régale à chaque ligne de code. 🚀
              </p>

              <p className="mt-4">
                Formé à{" "}
                <span className="font-semibold text-blue-300">
                  Sonatel Academy
                </span>{" "}
                🎓, j’ai une{" "}
                <span className="font-semibold">double casquette</span> :
                backend et frontend, tout en explorant des terrains passionnants
                comme la gestion des données 📊, l’IA 🤖 et l’indexation 🔍. En
                vrai, mon crédo, c’est apprendre en{" "}
                <span className="font-semibold">
                  créant des trucs utiles pour la commu
                </span>
                . 🙌
              </p>

              <div className="mt-4">
                <span className="text-xl font-semibold text-blue-400">
                  🌟 Mes vibes ?
                </span>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>
                    Développer des{" "}
                    <span className="font-semibold text-blue-300">
                      interfaces stylées et fluides
                    </span>{" "}
                    🎨
                  </li>
                  <li>
                    Construire des{" "}
                    <span className="font-semibold text-blue-300">
                      API en béton armé
                    </span>{" "}
                    🧱
                  </li>
                  <li>
                    Jouer avec des montagnes de données 📈 (et kiffer ça 🤓).
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                💡 <span className="font-semibold">Objectif ultime ?</span>{" "}
                Allier{" "}
                <span className="font-semibold text-blue-300">
                  simplicité et efficacité
                </span>{" "}
                dans des projets qui{" "}
                <span className="font-semibold text-blue-300">
                  marquent la diff’
                </span>{" "}
                !
              </p>

              <p className="mt-6 text-center text-lg font-bold text-blue-400">
                Let’s code, collab, and create some magic ✨.
              </p>
            </div> */}
            <Markdown>
            {resume.summary}
            </Markdown>
            <Separator />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200">
                Compétences techniques
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
                {resume.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    className="bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 py-1 px-5 flex justify-between"
                  >
                    <p>{skill.name}</p>
                    <skill.logo className="ms-1 h-6 w-6" />
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
