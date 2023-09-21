import { useEffect, useState } from "react";
import { userData } from "@/utils/userData";
import { Container, Paragraph, StyledAboutMe, Title } from "./style";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const AboutMe = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <StyledAboutMe id="about">
      <Container>
        <Title>About</Title>
        <Paragraph>
          Hi! I am an engineer passionate about technology, with a focus on web
          development and versatile skills to work as a Full Stack developer. My
          academic journey began with a degree in Control and Automation
          Engineering from Universidade Paulista - UNIP, where I acquired a
          solid foundation in exact sciences and developed an analytical
          mindset.
        </Paragraph>
        <Paragraph>
          In addition to my academic background, I sought to enhance my skills
          through an MBA in Data Science & Analytics from the University of São
          Paulo - USP/Esalq and a specialization in Full Stack Development from
          Kenzie Academy Brasil, consolidating a multidisciplinary profile.
        </Paragraph>
        <Paragraph>
          I am always seeking challenges that allow me to apply my knowledge and
          improve my abilities. If you are looking for a professional with a
          multidisciplinary approach, passionate about technology, and committed
          to excellence, I am ready to contribute and make a difference. Let's
          work together to achieve your goals!
        </Paragraph>
      </Container>
    </StyledAboutMe>
  );
};
