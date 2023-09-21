import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";

export const StyledAboutMe = styled("section", {
  margin: "1.25rem 0 1.25rem 0",
  opacity: 50,
  width: "100%",
  paddingTop: "8rem",
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  color: "$grey2",
  padding: "0  0.5rem",
  borderRadius: "$2",
  gap: "1rem",
  "@firstChild": {
    lineHeight: "36px",
  },
});

export const Paragraph = styled("p", {
  lineHeight: "28px",
  textAlign: "justify",
});

export const Title = styled("h1", {
  marginBottom: "1.5rem",

  "&:hover": {
    color: "$grey5",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});

export const ProjectTitle = styled(Text, {});

export const Project = styled("article", {
  marginTop: "4rem",
  [`&:first-child`]: {
    [`& ${ProjectTitle}:first-child`]: {
      position: "relative",
      width: "max-content",

      "@mobile": {
        width: "auto",
      },

      "&::before": {
        content: "New",
        position: "absolute",
        top: "5px",
        right: "-4rem",
        width: "max-content",
        height: "28px",
        backgroundColor: "$brand1",
        padding: "0px 8px",
        borderRadius: "var(--radii-1)",
        fontSize: "14px",
        color: "var(--colors-whiteFixed)",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter",

        "@mobile": {
          letf: 0,
          top: "-2.5rem",
          right: "auto",
        },
      },
    },
  },
});
