import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeFromString(message: string) {
  if (message.includes("```")) {
    return message.split("```");
  }
  return null;
}

function isCodeBlock(str: string) {
  return (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#include") ||
    str.includes("function") ||
    str.includes("const ") ||
    str.includes("let ") ||
    str.includes("class ")
  );
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const auth = useAuth();
  const messageBlocks = extractCodeFromString(content);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
        my: 2,
        width: "100%",
        minWidth: 0,
        borderRadius: 3,
        boxSizing: "border-box",
        overflow: "hidden",
        bgcolor: role === "assistant" ? "#071926" : "#005761",
      }}
    >
      {role === "assistant" ? (
        <Avatar
          sx={{
            bgcolor: "#ffffff",
            width: 42,
            height: 42,
            flexShrink: 0,
          }}
        >
          <img src="robot.png" alt="AI" width="26px" />
        </Avatar>
      ) : (
        <Avatar
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: 42,
            height: 42,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {auth?.user?.name
            ?.split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("")}
        </Avatar>
      )}

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {!messageBlocks && (
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            {content}
          </Typography>
        )}

        {messageBlocks &&
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  overflowX: "auto",
                  my: 2,
                  borderRadius: 2,
                }}
              >
                <SyntaxHighlighter
                  language="cpp"
                  style={coldarkDark}
                  wrapLongLines={true}
                  customStyle={{
                    margin: 0,
                    borderRadius: "10px",
                    fontSize: "14px",
                    maxWidth: "100%",
                  }}
                >
                  {block}
                </SyntaxHighlighter>
              </Box>
            ) : (
              <Typography
                key={index}
                sx={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                  mb: 1,
                }}
              >
                {block}
              </Typography>
            )
          )}
      </Box>
    </Box>
  );
};

export default ChatItem;