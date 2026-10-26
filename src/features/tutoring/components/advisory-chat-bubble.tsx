type Side = "student" | "teacher";

interface Props {
  author: string;
  time: string;
  message: string;
  side?: Side;
  status?: string;
}

export function AdvisoryChatBubble({ author, time, message, side = "student", status }: Props) {
  const isTeacher = side === "teacher";
  const initials = author
    .replace(/^Prof\.\s*/, "")
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className={`chat ${isTeacher ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar avatar-placeholder">
        <div
          className={`w-10 rounded-full ${
            isTeacher ? "bg-secondary text-secondary-content" : "bg-primary/15 text-primary"
          }`}
        >
          <span className="text-xs font-bold">{initials}</span>
        </div>
      </div>
      <div className="chat-header text-xs">
        {author} <time className="opacity-60">{time}</time>
      </div>
      <div
        className={`chat-bubble text-sm ${
          isTeacher ? "chat-bubble-primary" : "bg-base-200 text-base-content"
        }`}
      >
        {message}
      </div>
      {status && <div className="chat-footer text-xs opacity-60">{status}</div>}
    </div>
  );
}
