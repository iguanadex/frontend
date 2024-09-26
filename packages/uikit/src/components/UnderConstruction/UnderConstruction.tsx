import { useTranslation } from "@iguanadex/localization";
import { JSXElementConstructor, ReactNode, createElement } from "react";
import { styled } from "styled-components";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { LogoIcon } from "../Svg";
import { Text } from "../Text";

const StyledUnderConstruction = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`;

const UnderConstruction = ({
  statusCode = 200,
  children,
  LinkComp,
}: {
  LinkComp: JSXElementConstructor<any>;
  statusCode?: number;
  children: ReactNode;
}) => {
  const { t } = useTranslation();

  const linkElement = createElement(
    LinkComp,
    {
      href: "/",
      passHref: true,
    },
    <Button scale="sm">{t("Back Home")}</Button>
  );

  return (
    <>
      {children}
      <StyledUnderConstruction>
        <LogoIcon width="64px" mb="8px" />
        <Heading scale="xxl">{statusCode}</Heading>
        <Text mb="16px">{t("Oops, page not found.")}</Text>
        {linkElement}
      </StyledUnderConstruction>
    </>
  );
};

export default UnderConstruction;