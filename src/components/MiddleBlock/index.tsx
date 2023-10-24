import React, { useState, useEffect } from 'react';
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, Title } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  id?: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, id, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <MiddleBlockSection id={id}>  {/* Set the id attribute here */}
      {isMounted && (
        <Slide direction="up" triggerOnce={true} cascade>
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="/img/svg/intro.svg" alt="Intro" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <Title>{t(title)}</Title>
                <Content>{t(content)}</Content>
                {/* {button && (
                  <Button name="submit" onClick={() => scrollTo("mission")}>
                    {t(button)}
                  </Button>
                )} */}
              </Col>
            </ContentWrapper>
          </Row>
        </Slide>
      )}
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
