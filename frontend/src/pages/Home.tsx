import { Box, Typography } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const capabilities = [
  {
    icon: "💻",
    title: "Code Generation",
    desc: "Generate clean code snippets in C++, Java, Python, JavaScript and more.",
  },
  {
    icon: "🐞",
    title: "Debugging",
    desc: "Identify errors, understand issues, and improve your code efficiently.",
  },
  {
    icon: "📚",
    title: "Learning Assistant",
    desc: "Learn programming concepts, frameworks, and technologies faster.",
  },
  {
    icon: "🧠",
    title: "DSA Practice",
    desc: "Get help with algorithms, data structures, and coding challenges.",
  },
  {
    icon: "🎯",
    title: "Interview Prep",
    desc: "Prepare for coding interviews with explanations and practice questions.",
  },
  {
    icon: "🚀",
    title: "Career Guidance",
    desc: "Receive guidance on projects, internships, and software development.",
  },
];

const Home = () => {
  return (
    <Box width="100%" minHeight="100vh">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mt: 3,
        }}
      >
        <TypingAnim />

        {/* Hero Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            my: 8,
          }}
        >
          <img
            src="robot.png"
            alt="IntelliChat AI"
            style={{
              width: "220px",
              filter: "drop-shadow(0px 0px 25px rgba(0,255,255,0.4))",
            }}
          />

          <Box textAlign="center">
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                mb: 2,
              }}
            >
              Meet IntelliChat AI
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                maxWidth: "500px",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Your intelligent AI assistant for coding, learning,
              problem-solving, interview preparation, and career growth.
            </Typography>
          </Box>
        </Box>

        {/* Features Section */}
        <Box
          sx={{
            width: {
              xs: "95%",
              sm: "90%",
              md: "85%",
            },
            mb: 10,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: "white",
              fontWeight: 800,
              mb: 2,
            }}
          >
            What IntelliChat AI Can Do
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#94a3b8",
              maxWidth: "700px",
              mx: "auto",
              mb: 6,
            }}
          >
            Designed for students, developers, and professionals to
            learn faster, solve problems, and boost productivity.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 3,
            }}
          >
            {capabilities.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0px 0px 25px rgba(0,255,255,0.25)",
                    border:
                      "1px solid rgba(0,255,255,0.3)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#cbd5e1",
                    lineHeight: 1.8,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;