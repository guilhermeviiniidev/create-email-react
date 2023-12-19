import { Button, Html, Img, Tailwind, Text, Section, Row, Column, Container, Body } from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html >
      <Tailwind config={{
        theme: {
          extends: {
            fontFamily: {
              sans: ['"Verdana"', '"Geneva"', '"Tahoma"', "sans-serif"],
            },
          }
        }
      }}>
        <Body className="bg-white">
          <Container>
            <Img alt="Imagem de apresentação" src="https://ci3.googleusercontent.com/meips/ADKq_Nb9Zf4fBxotchPvXix_LX_Zd66IqEab7gF09AFua1mw-kTv-tZisH-zdEu7aPKLwrTfMCUU0OdwQJLz8xe-5nCNdJFMkNuhmpNF8N8dHTAC8b9oK9txwxj2D5K0esIRmX3JIw=s0-d-e1-ft#https://gist.github.com/assets/153016910/1974f40c-cb49-4f83-9979-4482fc81586c" />
            <Section className="bg-white">
              <Text > Olá Jessica, tudo bem? </Text>

              <Text > O Seja muito bem-vindo(a) à Field Control!  </Text>
              <Text > É um prazer imenso receber você e toda equipe nessa jornada! </Text>

              <Text > Eu sou a Wayne, Gerente da sua conta aqui na Field, a partir de agora eu e nosso suporte seremos seus contatos principais, combinado?</Text>

              <Text >Vamos agendar nossa primeira reunião?</Text>
            </Section>
            <Section className="text-center">
              <Button className=" bg-blue-500 text-white px-2 rounded-md text-center" href="https://fieldcontrol.lt.acemlnc.com/Prod/link-tracker?notrack=1&redirectUrl=aHR0cHMlM0ElMkYlMkZjYWxlbmRhci5hcHAuZ29vZ2xlJTJGRUV2SmlmVlZBSkx5S1lwTjk=&sig=BC1RUAdYGpbrTwodEetmLQCMQdgJY65Ur1hgfean9uQX&iat=1702994827&a=%7C%7C798993321%7C%7C&account=fieldcontrol%2Eactivehosted%2Ecom&email=SQ1XlhpEz2B0KjuXAMeMvc%2F4Wn8A8cdUtO90kwieM0usSuIZQyrNahvty%2FLfhxV5%2FFdX8hVQ%3AUtsGEkIvtncbnAFV0NhoI%2BsreF6sh%2B7f&s=d40b88dee1b9baf606ea55e377de3b3b&i=2049A25795A46A58324" >
                <Row>
                  <Column> <Img width="25" height="25" src="https://ci3.googleusercontent.com/meips/ADKq_Na65ei7GKZMegZy_w3fjSDVDxQEKwbCJeiqodn6iAYh2e48GBepLVcC94vnSn_vaJ__b9-fCPW2EuH1wUW645WtrOk_T-hXxoHnQ-93fQE5Vo6OhiappFn_qJimnaxXFG6FOw=s0-d-e1-ft#https://gist.github.com/assets/153016910/31b6b76e-9d33-4ab9-9748-9d16be6fff1a" /></Column>
                  <Column ><Text className="ml-4">Agende seu horário</Text></Column>
                </Row>
              </Button>

            </Section>

            <Section className="bg-white">
              <Text>Por aqui já estou lendo tudo sobre sua empresa e o que você e nosso time comercial combinaram. Enquanto isso, vou te mandar abaixo nossos primeiros passos.</Text>
            </Section>

            <Section className="mx-auto text-center">
              <Button className=" bg-blue-500 text-white px-2 rounded-md " href="https://fieldcontrol.lt.acemlnc.com/Prod/link-tracker?notrack=1&redirectUrl=aHR0cHMlM0ElMkYlMkZjYWxlbmRhci5hcHAuZ29vZ2xlJTJGRUV2SmlmVlZBSkx5S1lwTjk=&sig=BC1RUAdYGpbrTwodEetmLQCMQdgJY65Ur1hgfean9uQX&iat=1702994827&a=%7C%7C798993321%7C%7C&account=fieldcontrol%2Eactivehosted%2Ecom&email=SQ1XlhpEz2B0KjuXAMeMvc%2F4Wn8A8cdUtO90kwieM0usSuIZQyrNahvty%2FLfhxV5%2FFdX8hVQ%3AUtsGEkIvtncbnAFV0NhoI%2BsreF6sh%2B7f&s=d40b88dee1b9baf606ea55e377de3b3b&i=2049A25795A46A58324" >
                <Row>
                  <Column> <Img width="25" height="25" src="https://ci3.googleusercontent.com/meips/ADKq_Nb2Zyl2c1187FRcoT1XFzMH4ZwVvHeXu9Mg51ygoqlQvSHxWcArPKzr39NYPKGmMHj77aOCUFq-pBrByWLcY2aIAePhk8FEgzxzXzpHOdBGTS3i92ppVCIo8r7Y5a8IKw1obQ=s0-d-e1-ft#https://gist.github.com/assets/153016910/89f8032e-d6da-4991-a0d8-fba07f0986fe" /></Column>
                  <Column ><Text className="ml-4">Prefiro Ler</Text></Column>
                </Row>
              </Button>


            </Section>

            <Section className="text-center mt-4">
              <Button className=" bg-blue-500 text-white px-2 rounded-md " href="https://fieldcontrol.lt.acemlnc.com/Prod/link-tracker?notrack=1&redirectUrl=aHR0cHMlM0ElMkYlMkZjYWxlbmRhci5hcHAuZ29vZ2xlJTJGRUV2SmlmVlZBSkx5S1lwTjk=&sig=BC1RUAdYGpbrTwodEetmLQCMQdgJY65Ur1hgfean9uQX&iat=1702994827&a=%7C%7C798993321%7C%7C&account=fieldcontrol%2Eactivehosted%2Ecom&email=SQ1XlhpEz2B0KjuXAMeMvc%2F4Wn8A8cdUtO90kwieM0usSuIZQyrNahvty%2FLfhxV5%2FFdX8hVQ%3AUtsGEkIvtncbnAFV0NhoI%2BsreF6sh%2B7f&s=d40b88dee1b9baf606ea55e377de3b3b&i=2049A25795A46A58324" >
                <Row>
                  <Column> <Img width="25" height="25" src="https://ci3.googleusercontent.com/meips/ADKq_NabmCfZ3HFt9yrnPgYT6NF5KefMnBQofJ2yZQlIiLOP_b-hCB9WR7rihSQhm3uFqsKmYSDG6ID0Fz_YQ7cEctcm0J9sqQCmkupcdM5YVvF1zfqmqnD--6SDKa_JZXZAt7rMVA=s0-d-e1-ft#https://gist.github.com/assets/153016910/f8b0926d-d7ba-4512-be80-43db3e7fa169" /></Column>
                  <Column ><Text className="ml-4">Prefiro assistir</Text></Column>
                </Row>
              </Button>
            </Section>
            <Text >
              Um ponto muito importante para nossa primeira reunião, é super importante que a pessoa que decide como vai ser o vai e vem das tarefas esteja lá.
            </Text>

            <Text>
              Chama sua galera pra participar!
            </Text>

            <Section className="text-center">
              <Column>
                <Img width="160" height="160" className="rounded-full mx-auto" src="https://ci3.googleusercontent.com/meips/ADKq_NYp3nZo3aXYlrQBMZ_h-PoxhTYukT5621bNGE8xNdRFk5BTqcyN7kVgtjEI-cJ5nY6IrFzUFVjOZbSVPvus0F_LIkbkHyMRPiZLZPQBY-yAb1DK0XviUkDftvg6-LyQibHPVQ=s0-d-e1-ft#https://gist.github.com/assets/153016910/6dbe89a7-2d49-4f30-ba03-c78d99b4785c" />
              </Column>
              <Column>
                <Button className=" bg-blue-500 text-white px-2 rounded-md w-full" href="https://fieldcontrol.lt.acemlnc.com/Prod/link-tracker?notrack=1&redirectUrl=aHR0cHMlM0ElMkYlMkZjYWxlbmRhci5hcHAuZ29vZ2xlJTJGRUV2SmlmVlZBSkx5S1lwTjk=&sig=BC1RUAdYGpbrTwodEetmLQCMQdgJY65Ur1hgfean9uQX&iat=1702994827&a=%7C%7C798993321%7C%7C&account=fieldcontrol%2Eactivehosted%2Ecom&email=SQ1XlhpEz2B0KjuXAMeMvc%2F4Wn8A8cdUtO90kwieM0usSuIZQyrNahvty%2FLfhxV5%2FFdX8hVQ%3AUtsGEkIvtncbnAFV0NhoI%2BsreF6sh%2B7f&s=d40b88dee1b9baf606ea55e377de3b3b&i=2049A25795A46A58324" >
                  <Row>
                    <Column> <Img width="25" height="25" src="https://ci3.googleusercontent.com/meips/ADKq_NZw7ZhsCDahmZx1m7xBZoQkBoOk-cxlpuaDJvHtcXRXAZ7BPZcyKRiS-iBb_KhTpPVQz0jKutyde56qBT3sy_33k3XNq8-OUfMV3hGlPDrbpT1pTEr_plNN9InrSVcV65LTDg=s0-d-e1-ft#https://gist.github.com/assets/153016910/c8f440c7-c471-47f4-82c8-99bab8859af6" /></Column>
                    <Column ><Text className="ml-4">Quero falar com um CSM</Text></Column>
                  </Row>
                </Button>
              </Column>
            </Section>

            <Text className="text-center mt-4">
              FIQUE ATENTO ÀS PRÓXIMAS COMUNICAÇÕES!
            </Text>
          </Container>


        </Body>
      </Tailwind>
    </Html >
  );
}