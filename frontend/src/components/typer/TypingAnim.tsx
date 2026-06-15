import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Welcome to IntelliChat AI 🤖",
        2000,

        "Your Personal AI Assistant 🚀",
        2000,

        "Powered by Gemini 2.5 Flash ⚡",
        2000,

        "Ask. Learn. Create. Grow. 💡",
        2000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
        textAlign: "center",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;