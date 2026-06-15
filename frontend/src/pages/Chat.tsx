import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import red from "@mui/material/colors/red";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/ChatItem";
import {
  deleteUserChats,
  getUserChats,
  sendChatRequest,
} from "../helpers/api-communicator";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const getInitials = (name?: string) => {
    if (!name) return "U";

    return name
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
  };

  const handleSubmit = async () => {
    const content = inputRef.current?.value.trim() || "";

    if (!content) return;

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    const newMessage: Message = {
      role: "user",
      content,
    };

    setChatMessages((prev) => [...prev, newMessage]);

    try {
      const chatData = await sendChatRequest(content);
      setChatMessages([...chatData.chats]);
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting Chats...", {
        id: "deletechats",
      });

      await deleteUserChats();

      setChatMessages([]);

      toast.success("Chats deleted successfully", {
        id: "deletechats",
      });
    } catch (error) {
      console.log(error);

      toast.error("Failed to delete chats", {
        id: "deletechats",
      });
    }
  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats...", {
        id: "loadchats",
      });

      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats]);

          toast.success("Chats loaded successfully", {
            id: "loadchats",
          });
        })
        .catch((error) => {
          console.log(error);

          toast.error("Failed to load chats", {
            id: "loadchats",
          });
        });
    }
  }, [auth?.isLoggedIn, auth?.user]);

  useEffect(() => {
    if (!auth?.user) {
      navigate("/login");
    }
  }, [auth?.user, navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        gap: 3,
        p: 2,
        boxSizing: "border-box",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "280px",
          flexShrink: 0,
          display: {
            md: "flex",
            xs: "none",
            sm: "none",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              width: 60,
              height: 60,
              fontWeight: 700,
            }}
          >
            {getInitials(auth?.user?.name)}
          </Avatar>

          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            You are talking to IntelliChat AI
          </Typography>

          <Typography
            sx={{
              mt: 4,
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            Ask questions about programming, technology,
            learning, careers, debugging, and software development.
          </Typography>

          <Button
            onClick={handleDeleteChats}
            sx={{
              mt: "auto",
              color: "white",
              bgcolor: red[300],
              borderRadius: 3,
              fontWeight: 700,
              "&:hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>

      {/* Chat Area */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "28px",
              md: "42px",
            },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Model - Gemini 2.5 Flash
        </Typography>

        {/* Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            pr: 1,
            minHeight: 0,
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem
              key={index}
              content={chat.content}
              role={chat.role}
            />
          ))}
        </Box>

        {/* Input */}
        <Box
          sx={{
            mt: 2,
            borderRadius: 2,
            bgcolor: "rgb(17,27,39)",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask anything..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            style={{
              width: "100%",
              padding: "22px",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "18px",
            }}
          />

          <IconButton
            onClick={handleSubmit}
            sx={{
              color: "white",
              mr: 1,
            }}
          >
            <IoMdSend />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;