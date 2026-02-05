import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import jesseAvatar from "@/assets/jesse-avatar.png";

// Declare GHL widget API types
declare global {
  interface Window {
    initChatWidget?: () => void;
    sendChatMessage?: (message: string) => void;
    onChatMessage?: (callback: (message: string) => void) => void;
  }
}

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{
    text: string;
    isUser: boolean;
  }>>([{
    text: "Hi! I'm Jesse, here to help you with your legacy planning. How can I assist you today?",
    isUser: false
  }]);
  const [inputValue, setInputValue] = useState("");
  const [isGHLReady, setIsGHLReady] = useState(false);

  // Initialize GHL widget connection
  useEffect(() => {
    const checkGHLWidget = setInterval(() => {
      // Check if GHL widget is loaded
      if (window.initChatWidget || document.querySelector('[data-widget-id]')) {
        setIsGHLReady(true);
        clearInterval(checkGHLWidget);
        
        // Initialize the widget silently
        if (window.initChatWidget) {
          window.initChatWidget();
        }
      }
    }, 500);

    return () => clearInterval(checkGHLWidget);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue;
    
    // Add user message to UI
    setMessages([...messages, {
      text: userMessage,
      isUser: true
    }]);
    
    setInputValue("");

    // Send to GHL widget if available
    if (isGHLReady) {
      try {
        // Try to trigger GHL chat
        if (window.sendChatMessage) {
          window.sendChatMessage(userMessage);
        } else {
          // Alternative: Try to find and trigger GHL input
          const ghlInput = document.querySelector('[data-widget-id] input, .chat-widget input') as HTMLInputElement;
          const ghlButton = document.querySelector('[data-widget-id] button, .chat-widget button[type="submit"]') as HTMLButtonElement;
          
          if (ghlInput && ghlButton) {
            ghlInput.value = userMessage;
            ghlButton.click();
          }
        }

        // Show acknowledgment message
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Thank you! A team member will respond shortly. Your message has been sent to our support team.",
            isUser: false
          }]);
        }, 500);
      } catch (error) {
        console.error('GHL integration error:', error);
        // Fallback message
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Thank you for your message! Our team will get back to you soon.",
            isUser: false
          }]);
        }, 500);
      }
    } else {
      // GHL not ready yet, show fallback
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thank you for your message! Please wait a moment while we connect you...",
          isUser: false
        }]);
      }, 500);
    }
  };
  return <div className="fixed bottom-6 right-6 z-50">
      {isOpen && <div className="mb-4 w-[350px] h-[500px] bg-background rounded-2xl shadow-2xl flex flex-col border border-border">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={jesseAvatar} alt="Jesse" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-semibold">Jesse</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${message.isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  <div>{message.text}</div>
                </div>
              </div>)}
            {!isGHLReady && (
              <div className="text-center text-xs text-muted-foreground">
                Connecting to support...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={e => e.key === "Enter" && handleSend()} placeholder="Type your message..." className="flex-1 focus-visible:ring-0 focus-visible:ring-offset-0" />
              <Button onClick={handleSend} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>}

      {/* Floating Button */}
      {!isOpen && <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={() => setIsOpen(true)} className="relative rounded-full shadow-lg transition-all hover:scale-105">
                <img src={jesseAvatar} alt="Chat" className="w-12 h-12 rounded-full object-cover" />
                <span className="absolute -top-3 -right-3 bg-destructive text-destructive-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-primary text-primary-foreground">
              <p>Chat with a support agent</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>}
    </div>;
};
export default AIChatBot;